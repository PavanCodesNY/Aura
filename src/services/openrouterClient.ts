import type { Message as AuraMessage } from "../types";

export interface ORChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatCompletionParams {
  apiKey: string;
  model: string;
  messages: ORChatMessage[];
  temperature?: number;
  maxTokens?: number;
  timeoutMs?: number;
  signal?: AbortSignal;
}

export interface ChatCompletionChoice {
  index?: number;
  message?: { role: string; content: string };
  finish_reason?: string;
}

export interface ChatCompletionResponse {
  id?: string;
  created?: number;
  model?: string;
  choices?: ChatCompletionChoice[];
  usage?: any;
  error?: { message?: string; type?: string; code?: string | number };
}

// Simple in-memory semaphore to limit concurrent requests
class Semaphore {
  private max: number;
  private current = 0;
  private queue: Array<() => void> = [];

  constructor(max: number) {
    this.max = Math.max(1, max);
  }

  async acquire(): Promise<() => void> {
    if (this.current < this.max) {
      this.current += 1;
      return () => this.release();
    }
    return new Promise<() => void>((resolve) => {
      this.queue.push(() => {
        this.current += 1;
        resolve(() => this.release());
      });
    });
  }

  private release() {
    this.current = Math.max(0, this.current - 1);
    const next = this.queue.shift();
    if (next) next();
  }
}

const semaphore = new Semaphore(3);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function withTimeout(signal: AbortSignal | undefined, ms: number): AbortSignal {
  if (ms <= 0) return signal as AbortSignal;
  const controller = new AbortController();
  const timers: number[] = [];

  if (signal) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener("abort", () => controller.abort(), { once: true });
  }
  const id = setTimeout(() => controller.abort(), ms) as unknown as number;
  timers.push(id);
  return controller.signal;
}

export class OpenRouterClient {
  static async chatCompletion(params: ChatCompletionParams): Promise<ChatCompletionResponse> {
    const release = await semaphore.acquire();
    try {
      const {
        apiKey,
        model,
        messages,
        temperature = 0.7,
        maxTokens = 1000,
        timeoutMs = 60000,
        signal,
      } = params;

      if (!apiKey) throw new Error("Missing OpenRouter API key");
      if (!model) throw new Error("Missing OpenRouter model");
      if (!Array.isArray(messages) || messages.length === 0)
        throw new Error("Messages array must be non-empty");

      const body = {
        model,
        messages,
        temperature,
        max_tokens: maxTokens,
      };

      const url = "https://openrouter.ai/api/v1/chat/completions";

      // No retries - fail fast as requested
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
          "X-Title": "Aura",
        },
        body: JSON.stringify(body),
        signal: withTimeout(signal, timeoutMs),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`OpenRouter ${resp.status}: ${text}`);
      }

      const data = (await resp.json()) as ChatCompletionResponse;
      if (data?.error) {
        throw new Error(data.error.message || "Unknown OpenRouter error");
      }

      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error("Invalid response: missing choices[0].message");
      }

      return data;
    } finally {
      release();
    }
  }
}
