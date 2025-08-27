import { Message, AIResponse } from "../types";
import { OpenRouterClient } from "./openrouterClient";
import { GeminiClient } from "./geminiClient";
import { ragService } from "./ragService";
import { FrameworkId } from "../types/framework";

export type AIProvider = "openrouter" | "gemini";

export interface AIConfig {
  provider: AIProvider;
  apiKey: string;
  model: string;
}

// Default AI configuration  
const DEFAULT_GEMINI_MODEL: string = "gemini-1.5-flash";
const DEFAULT_PROVIDER: AIProvider = "gemini";

// Single API call (no retries - fail fast)
const callAIProvider = async (
  messages: any[],
  config: AIConfig,
  temperature = 0.7,
  maxTokens = 1000,
  timeoutMs = 60000,
  signal?: AbortSignal
): Promise<any> => {
  console.log(`🚀 Using ${config.provider} with model: ${config.model}`);
  
  let response;
  if (config.provider === "openrouter") {
    response = await OpenRouterClient.chatCompletion({
      apiKey: config.apiKey,
      model: config.model,
      messages,
      temperature,
      maxTokens,
      timeoutMs,
      signal,
    });
  } else if (config.provider === "gemini") {
    response = await GeminiClient.chatCompletion({
      apiKey: config.apiKey,
      model: config.model,
      messages,
      temperature,
      maxTokens,
      timeoutMs,
      signal,
    });
  } else {
    throw new Error(`Unsupported AI provider: ${config.provider}`);
  }
  
  console.log(`✅ Success with ${config.provider}: ${config.model}`);
  return response;
};

// AI API Integration with RAG support (supports OpenRouter and Gemini)
export const callAIAPI = async (
  userInput: string,
  conversationHistory: Message[],
  config: AIConfig,
  framework: FrameworkId = "react"
): Promise<AIResponse> => {
  console.log("🚀 callAIAPI called with:");
  console.log("  User Input:", userInput);
  console.log("  Framework:", framework);
  console.log("  Provider:", config.provider);
  console.log("  Model:", config.model);
  console.log("🔑 API Key Debug - Present:", !!config.apiKey);
  console.log("🔑 API Key Debug - Length:", config.apiKey?.length || 0);
  console.log(
    "🔑 API Key Debug - First 10 chars:",
    config.apiKey?.substring(0, 10) + "..."
  );
  console.log("🔑 API Key Debug - Type:", config.provider === "gemini" ? "Should be Gemini (AIzaSy...)" : "Should be OpenRouter (sk-or-...)");

  if (!config.apiKey) {
    const providerInfo = config.provider === "openrouter" 
      ? "OpenRouter API key (starts with 'sk-or-') from https://openrouter.ai"
      : "Gemini API key from Google Cloud Console";
    
    return {
      response:
        `🔑 **API Key Required**\n\nTo use Aura's AI component generator, please:\n\n1. Click the ⚙️ settings icon in the top-right\n2. Enter your ${providerInfo}\n3. Select your preferred AI provider\n\nWithout an API key, I cannot generate components for you.`,
      componentType: null,
      usedRAG: false,
    };
  }

  try {
    // Get RAG context for enhanced generation
    const ragContext = await ragService.getContext(userInput, framework);
    console.log("🔍 RAG Context:", ragContext.usedRAG ? "Enabled" : "Disabled");
    if (ragContext.usedRAG) {
      console.log("📚 RAG Results:");
      console.log("  - Relevant Examples:", ragContext.relevantExamples.length);
      console.log("  - Framework Patterns:", ragContext.frameworkPatterns.length);
      console.log("  - Tailwind Patterns:", ragContext.tailwindPatterns.length);
    }
    let systemPrompt = `You are an expert ${framework} developer who creates beautiful, functional UI components with TypeScript and Tailwind CSS.`;
    
    // Enhance system prompt with RAG context
    if (ragContext.usedRAG) {
      systemPrompt += `

RELEVANT EXAMPLES AND PATTERNS:
${ragContext.relevantExamples.length > 0 ? 
  `\nComponent Examples:\n${ragContext.relevantExamples.join('\n\n')}` : ''}
${ragContext.frameworkPatterns.length > 0 ? 
  `\n\nFramework Patterns for ${framework}:\n${ragContext.frameworkPatterns.join('\n\n')}` : ''}
${ragContext.tailwindPatterns.length > 0 ? 
  `\n\nTailwind CSS Patterns:\n${ragContext.tailwindPatterns.join('\n\n')}` : ''}

Use these examples as inspiration but adapt them to the specific request. Follow the same coding patterns and best practices shown above.`;
    }
    
    systemPrompt += `

RESPONSE FORMAT (always use this structure):
**✨ Component Created**
[Brief 1-line description of what you're building]

**🎯 Implementation**
[2-3 bullet points about key features/functionality]

**🚀 Code Generated**
Your custom component is ready to use!

RULES:
- Always generate actual React TypeScript code for any component request
- Use Tailwind CSS for styling
- Include proper TypeScript interfaces
- Make components responsive and accessible
- Keep responses under 150 words total
- Always end with [COMPONENT:custom] to trigger code generation

For ANY component request (header, navbar, footer, modal, etc.), you should:
1. Provide the formatted response above
2. End with [COMPONENT:custom]
3. The system will then generate the actual React code

Examples:
- "Create a website header" → End with [COMPONENT:custom]
- "Make a modal dialog" → End with [COMPONENT:custom]
- "Build a navigation menu" → End with [COMPONENT:custom]

Generate components for ANY request - don't limit yourself to predefined types.`;

    const messages = [
      { role: "system" as const, content: systemPrompt },
      ...conversationHistory.slice(-10).map((msg) => ({
        role: msg.type === "user" ? ("user" as const) : ("assistant" as const),
        content: msg.content,
      })),
      { role: "user" as const, content: userInput },
    ];

    const data = await callAIProvider(
      messages,
      config,
      0.7,
      500,
      60000
    );
    console.log("📊 OpenRouter API Response:", data);

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error("❌ Invalid API response structure:", data);
      throw new Error("Invalid API response structure");
    }

    const aiResponse = data.choices[0].message.content;

    // Extract component type if specified
    const componentMatch = aiResponse.match(/\[COMPONENT:([^\]]+)\]/);
    const componentType = componentMatch ? componentMatch[1] : null;
    let cleanResponse = aiResponse.replace(/\[COMPONENT:[^\]]+\]/, "").trim();

    // Format the response properly if it's not already formatted
    cleanResponse = formatAIResponse(cleanResponse, componentType);

    return {
      response: cleanResponse,
      componentType: componentType,
      usedRAG: ragContext.usedRAG,
    };
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    
    // No retries - fail fast as requested
    const errorMessage = String((error as Error)?.message || error);
    const providerName = config.provider === "openrouter" ? "OpenRouter" : "Gemini";
    
    if (errorMessage.includes("429") || errorMessage.includes("Too Many Requests") || errorMessage.includes("rate")) {
      return {
        response: `🕐 **Rate Limited**\n\nYou've hit the rate limit for \`${config.model}\` on ${providerName}. No automatic retries will be attempted.\n\n• Wait before trying again\n• Consider switching AI providers\n• Check your usage limits\n\nPlease try again later or switch providers.`,
        componentType: null,
        usedRAG: false,
      };
    }
    
    return {
      response:
        `Sorry, I'm having trouble connecting to ${providerName}. Error: ${errorMessage}\n\nPlease check your API key or try switching AI providers. No retries will be attempted.`,
      componentType: null,
      usedRAG: false,
    };
  }
};

// Note: Removed fallback generateAIResponse - everything now uses AI
// Format AI response to ensure consistent structure
const formatAIResponse = (
  response: string,
  componentType: string | null
): string => {
  // If response already has the proper format, return as is
  if (
    response.includes("**✨ Component Identified**") ||
    response.includes("**🎯 Design Approach**")
  ) {
    return response;
  }

  // Otherwise, format it properly
  if (componentType) {
    const componentNames: Record<string, string> = {
      "magnetic button": "magnetic button that follows your cursor",
      "glowing card": "glowing card with mouse-tracking effects",
      "minimal input": "minimal input field with focus animations",
      "toggle switch": "toggle switch with smooth animations",
      "loading spinner": "loading spinner with elegant animations",
    };

    const componentName = componentNames[componentType] || componentType;

    return `**✨ Component Identified**
Creating a ${componentName} for enhanced user interaction.

**🎯 Design Approach**
• Clean, modern styling with smooth animations
• Optimized for both desktop and mobile interactions
• Follows accessibility best practices

**🚀 Ready to Build**
Let's create this beautiful component that will elevate your interface!`;
  } else {
    // For general responses without component identification
    return `**💡 Design Insight**
${response}

**🎯 Available Components**
I can create these specific components for you:
• Magnetic Button - cursor-following interactive button
• Glowing Card - mouse-tracking hover effects
• Minimal Input - clean form field with animations
• Toggle Switch - smooth on/off control
• Loading Spinner - elegant loading indicator

**🚀 Next Steps**
Choose one of the components above and I'll build it for you!`;
  }
};

// Generate custom component code using AI with RAG support
export const generateCustomComponent = async (
  userRequest: string,
  config: AIConfig,
  signal?: AbortSignal,
  framework: FrameworkId = "react"
): Promise<any> => {
  console.log("🚀 Starting custom component generation for:", userRequest);
  console.log("🔑 API Key present:", !!config.apiKey);
  console.log(
    `📊 Process: Single React generation using ${config.provider} (1 API call total)`
  );

  if (!config.apiKey) {
    console.error("❌ No API key provided");
    return null;
  }

  try {
    console.log("📝 Generating React component (React only - no conversions)...");
    const startTime = Date.now();

    // Generate React component with RAG context
    const reactCode = await generateReactComponent(
      userRequest,
      config,
      signal,
      framework
    );

    console.log(`✅ React generation completed in ${Date.now() - startTime}ms`);
    console.log("📄 React code length:", reactCode?.length || 0);

    if (!reactCode) {
      console.error("❌ React generation failed");
      return null;
    }

    console.log("🎯 Total generation time:", Date.now() - startTime, "ms");

    return {
      code: reactCode,
      preview: extractComponentName(userRequest),
      type: "custom",
      multiFramework: {
        react: { code: reactCode, extension: "tsx", language: "typescript" }
      },
    };
  } catch (error) {
    console.error("Custom component generation failed:", error);
    return null;
  }
};

// Step 1: Generate React component with RAG context
const generateReactComponent = async (
  userRequest: string,
  config: AIConfig,
  signal?: AbortSignal,
  framework: FrameworkId = "react"
): Promise<string | null> => {
  // Get RAG context for enhanced generation
  const ragContext = await ragService.getContext(userRequest, framework);
  
  let prompt = `Create a React TypeScript component based on this request: "${userRequest}"

REQUIREMENTS:
- Use React with TypeScript
- Use Tailwind CSS for styling
- Make it responsive and accessible
- Include proper interfaces for props
- Export as default
- Make it production-ready`;

  // Enhance prompt with RAG context
  if (ragContext.usedRAG) {
    prompt += `

RELEVANT EXAMPLES AND PATTERNS:
${ragContext.relevantExamples.length > 0 ? 
  `\nComponent Examples:\n${ragContext.relevantExamples.join('\n\n')}` : ''}
${ragContext.frameworkPatterns.length > 0 ? 
  `\n\nReact Patterns:\n${ragContext.frameworkPatterns.join('\n\n')}` : ''}
${ragContext.tailwindPatterns.length > 0 ? 
  `\n\nTailwind CSS Patterns:\n${ragContext.tailwindPatterns.join('\n\n')}` : ''}

Use these examples as inspiration and follow the same coding patterns and best practices.`;
  }

  prompt += `\n\nReturn ONLY the complete React component code, no explanations or markdown formatting.`;

  try {
    const data = await callAIProvider(
      [{ role: "user" as const, content: prompt }],
      config,
      0.3,
      2000,
      90000,
      signal
    );
    console.log(`📊 React Generation ${config.provider} API Response:`, data);

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error("❌ Invalid React generation API response:", data);
      throw new Error("Invalid API response structure");
    }

    const raw = data.choices[0].message.content.trim();
    return sanitizeCodeBlock(raw);
  } catch (error) {
    console.error("❌ React generation failed:", error);
    return null;
  }
};

// Note: Multi-framework conversions removed to save tokens

// Extract component name from user request
const extractComponentName = (userRequest: string): string => {
  const request = userRequest.toLowerCase();
  
  // Prioritize by common component types
  if (request.includes("button")) return "button";
  if (request.includes("card")) return "card";
  if (request.includes("input") || request.includes("form")) return "form";
  if (request.includes("modal") || request.includes("dialog")) return "modal";
  if (request.includes("header")) return "header";
  if (request.includes("navbar") || request.includes("navigation")) return "navbar";
  if (request.includes("footer")) return "footer";
  if (request.includes("sidebar")) return "sidebar";
  if (request.includes("menu")) return "menu";
  if (request.includes("table")) return "table";
  if (request.includes("carousel") || request.includes("slider")) return "carousel";
  if (request.includes("tab")) return "tabs";
  if (request.includes("accordion")) return "accordion";
  if (request.includes("dropdown")) return "dropdown";
  
  return "component";
};

// Remove markdown fences and extraneous wrapping from LLM output
function sanitizeCodeBlock(text: string): string {
  let cleaned = text.trim();
  // Strip triple backtick blocks with optional language
  const fenceMatch = cleaned.match(/^```[a-zA-Z0-9]*\n([\s\S]*?)\n```\s*$/);
  if (fenceMatch) {
    cleaned = fenceMatch[1];
  }
  // Remove stray leading/trailing backticks
  cleaned = cleaned.replace(/^```+\s*/, "").replace(/\s*```+$/, "");
  // Normalize CRLF
  cleaned = cleaned.replace(/\r\n/g, "\n");
  return cleaned.trim();
}
