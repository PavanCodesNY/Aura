import type { ORChatMessage } from "./openrouterClient";

export interface GeminiMessage {
  role: "user" | "model";
  parts: { text: string }[];
}

export interface GeminiRequest {
  contents: GeminiMessage[];
  generationConfig?: {
    temperature?: number;
    maxOutputTokens?: number;
  };
}

export interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{ text?: string }>;
    };
    finishReason?: string;
  }>;
  error?: {
    message?: string;
    code?: number;
  };
}

export interface GeminiClientParams {
  apiKey: string;
  model?: string;
  messages: ORChatMessage[];
  temperature?: number;
  maxTokens?: number;
  timeoutMs?: number;
  signal?: AbortSignal;
}

function withTimeout(signal: AbortSignal | undefined, ms: number): AbortSignal {
  if (ms <= 0) return signal as AbortSignal;
  const controller = new AbortController();
  
  if (signal) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener("abort", () => controller.abort(), { once: true });
  }
  
  const id = setTimeout(() => controller.abort(), ms) as unknown as number;
  return controller.signal;
}

function convertToGeminiMessages(messages: ORChatMessage[]): GeminiMessage[] {
  const geminiMessages: GeminiMessage[] = [];
  
  for (const msg of messages) {
    if (msg.role === "system") {
      // Gemini doesn't have system role, prepend to first user message or create one
      const systemText = `System: ${msg.content}`;
      if (geminiMessages.length === 0) {
        geminiMessages.push({
          role: "user",
          parts: [{ text: systemText }]
        });
      } else {
        const firstMsg = geminiMessages[0];
        if (firstMsg.role === "user") {
          firstMsg.parts[0].text = `${systemText}\n\n${firstMsg.parts[0].text}`;
        }
      }
    } else if (msg.role === "user") {
      geminiMessages.push({
        role: "user",
        parts: [{ text: msg.content }]
      });
    } else if (msg.role === "assistant") {
      geminiMessages.push({
        role: "model",
        parts: [{ text: msg.content }]
      });
    }
  }
  
  return geminiMessages;
}

export class GeminiClient {
  static async chatCompletion(params: GeminiClientParams): Promise<any> {
    const {
      apiKey,
      model = "gemini-1.5-flash",
      messages,
      temperature = 0.7,
      maxTokens = 1000,
      timeoutMs = 60000,
      signal,
    } = params;

    if (!apiKey) throw new Error("Missing Gemini API key");
    if (!Array.isArray(messages) || messages.length === 0)
      throw new Error("Messages array must be non-empty");

    const geminiMessages = convertToGeminiMessages(messages);
    
    const body: GeminiRequest = {
      contents: geminiMessages,
      generationConfig: {
        temperature,
        maxOutputTokens: maxTokens,
      },
    };

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    console.log(`🚀 Using Gemini model: ${model}`);

    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      signal: withTimeout(signal, timeoutMs),
    });

    if (!resp.ok) {
      const text = await resp.text();
      throw new Error(`Gemini ${resp.status}: ${text}`);
    }

    const data = (await resp.json()) as GeminiResponse;
    
    if (data?.error) {
      throw new Error(data.error.message || "Unknown Gemini error");
    }

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts || !data.candidates[0].content.parts[0]) {
      throw new Error("Invalid Gemini response: missing content");
    }

    // Convert Gemini response to OpenRouter format for compatibility
    const geminiText = data.candidates[0].content.parts[0].text || "";
    
    return {
      choices: [
        {
          index: 0,
          message: {
            role: "assistant",
            content: geminiText,
          },
          finish_reason: data.candidates[0].finishReason || "stop",
        },
      ],
      model,
    };
  }
}