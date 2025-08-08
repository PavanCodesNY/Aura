import { Message, AIResponse } from "../types";
import { aiPersonality } from "../data/aiPersonality";

// Real API Integration
export const callOpenRouterAPI = async (
  userInput: string,
  conversationHistory: Message[],
  apiKey: string
): Promise<AIResponse> => {
  if (!apiKey) {
    return {
      response:
        "Please set your OpenRouter API key in settings to enable AI conversations.",
      componentType: null,
    };
  }

  try {
    const systemPrompt = `You are an expert React developer who creates beautiful, functional UI components with TypeScript and Tailwind CSS.

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
      { role: "system", content: systemPrompt },
      ...conversationHistory.slice(-10).map((msg) => ({
        role: msg.type === "user" ? ("user" as const) : ("assistant" as const),
        content: msg.content,
      })),
      { role: "user" as const, content: userInput },
    ];

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
        },
        body: JSON.stringify({
          messages: messages,
          temperature: 0.7,
          max_tokens: 500,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status}`);
    }

    const data = await response.json();
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
    };
  } catch (error) {
    console.error("OpenRouter API Error:", error);
    return {
      response:
        "Sorry, I'm having trouble connecting to my AI brain right now. Please check your API key or try again later.",
      componentType: null,
    };
  }
};

// Fallback AI Response Generator (when no API key)
export const generateAIResponse = (userInput: string): AIResponse => {
  const input = userInput.toLowerCase();

  // Detect component type
  let componentType: string | null = null;
  let detectedType: string | null = null;

  if (
    input.includes("button") ||
    input.includes("click") ||
    input.includes("magnetic")
  ) {
    componentType = "magnetic button";
    detectedType = "button";
  } else if (input.includes("card") || input.includes("glow")) {
    componentType = "glowing card";
    detectedType = "card";
  } else if (
    input.includes("input") ||
    input.includes("field") ||
    input.includes("form")
  ) {
    componentType = "minimal input";
    detectedType = "input";
  } else if (input.includes("loading") || input.includes("spinner")) {
    componentType = "loading spinner";
    detectedType = "loading";
  } else if (input.includes("toggle") || input.includes("switch")) {
    componentType = "toggle switch";
    detectedType = "toggle";
  }

  // Generate contextual response
  if (
    componentType &&
    detectedType &&
    aiPersonality.componentResponses[detectedType]
  ) {
    const responses = aiPersonality.componentResponses[detectedType];
    const response = responses[Math.floor(Math.random() * responses.length)];
    return { response, componentType };
  }

  // Fallback responses
  const fallbacks = [
    "That sounds interesting! Could you describe the component in more detail? For example, are you thinking of a button, card, input field, or something else?",
    "I'd love to help you create that! Can you tell me more about what kind of interaction or visual style you're looking for?",
    "Great idea! To make sure I build exactly what you need, could you describe the component type and any specific behaviors you want?",
    "I'm excited to work on this with you! What type of UI element are you envisioning - a button, form element, card, or something different?",
  ];

  return {
    response: fallbacks[Math.floor(Math.random() * fallbacks.length)],
    componentType: null,
  };
};
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

// Generate custom component code using AI
export const generateCustomComponent = async (
  userRequest: string,
  apiKey: string
): Promise<any> => {
  if (!apiKey) return null;

  try {
    // Step 1: Generate React component
    const reactCode = await generateReactComponent(userRequest, apiKey);
    if (!reactCode) return null;

    // Step 2: Convert to all other frameworks
    const multiFrameworkCode = await convertToAllFrameworks(
      reactCode,
      userRequest,
      apiKey
    );

    return {
      code: reactCode,
      preview: extractComponentName(userRequest),
      type: "custom",
      multiFramework: multiFrameworkCode,
    };
  } catch (error) {
    console.error("Custom component generation failed:", error);
    return null;
  }
};

// Step 1: Generate React component
const generateReactComponent = async (
  userRequest: string,
  apiKey: string
): Promise<string | null> => {
  const prompt = `Create a React TypeScript component based on this request: "${userRequest}"

REQUIREMENTS:
- Use React with TypeScript
- Use Tailwind CSS for styling
- Make it responsive and accessible
- Include proper interfaces for props
- Export as default
- Make it production-ready

Return ONLY the complete React component code, no explanations or markdown formatting.`;

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: prompt }],
          temperature: 0.3,
          max_tokens: 2000,
        }),
      }
    );

    if (!response.ok) throw new Error(`API call failed: ${response.status}`);

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error("React generation failed:", error);
    return null;
  }
};

// Step 2: Convert React code to all other frameworks
const convertToAllFrameworks = async (
  reactCode: string,
  userRequest: string,
  apiKey: string
): Promise<any> => {
  const frameworks = [
    { id: "vue", name: "Vue 3", extension: "vue" },
    { id: "svelte", name: "Svelte", extension: "svelte" },
    { id: "angular", name: "Angular", extension: "ts" },
    { id: "vanilla", name: "Vanilla JavaScript", extension: "js" },
  ];

  const conversions: any = {
    react: { code: reactCode, extension: "tsx", language: "typescript" },
  };

  for (const framework of frameworks) {
    try {
      const convertedCode = await convertToFramework(
        reactCode,
        framework,
        userRequest,
        apiKey
      );
      if (convertedCode) {
        conversions[framework.id] = {
          code: convertedCode,
          extension: framework.extension,
          language: framework.id === "vanilla" ? "javascript" : "typescript",
        };
      }
    } catch (error) {
      console.error(`Failed to convert to ${framework.name}:`, error);
    }
  }

  return conversions;
};

// Convert React code to specific framework
const convertToFramework = async (
  reactCode: string,
  framework: any,
  userRequest: string,
  apiKey: string
): Promise<string | null> => {
  const conversionPrompts: Record<string, string> = {
    vue: `Convert this React component to Vue 3 with Composition API and TypeScript:

${reactCode}

REQUIREMENTS:
- Use Vue 3 Composition API with <script setup lang="ts">
- Convert all React hooks to Vue equivalents (useState → ref, useEffect → onMounted, etc.)
- Use proper Vue template syntax
- Include <style scoped> if needed
- Make it functionally identical to the React version
- Use proper TypeScript interfaces

Return ONLY the complete Vue component code.`,

    svelte: `Convert this React component to Svelte with TypeScript:

${reactCode}

REQUIREMENTS:
- Use <script lang="ts"> for TypeScript
- Convert React hooks to Svelte equivalents (useState → let variables, useEffect → onMount, etc.)
- Use Svelte's reactive syntax ($:) where appropriate
- Use proper Svelte event handling (on:click, etc.)
- Make it functionally identical to the React version
- Include proper TypeScript interfaces

Return ONLY the complete Svelte component code.`,

    angular: `Convert this React component to Angular with TypeScript:

${reactCode}

REQUIREMENTS:
- Use Angular component with @Component decorator
- Convert React hooks to Angular equivalents (useState → properties, useEffect → ngOnInit/ngOnDestroy)
- Use Angular template syntax with proper event binding
- Include proper TypeScript interfaces
- Use Angular lifecycle hooks appropriately
- Make it functionally identical to the React version

Return ONLY the complete Angular component code.`,

    vanilla: `Convert this React component to Vanilla JavaScript:

${reactCode}

REQUIREMENTS:
- Use modern ES6+ JavaScript (no frameworks)
- Create a class-based component or function-based approach
- Use DOM manipulation for all interactions
- Include proper event listeners and cleanup
- Make it functionally identical to the React version
- Use modern JavaScript features (classes, arrow functions, etc.)

Return ONLY the complete Vanilla JavaScript code.`,
  };

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
          "HTTP-Referer": window.location.origin,
        },
        body: JSON.stringify({
          messages: [
            { role: "user", content: conversionPrompts[framework.id] },
          ],
          temperature: 0.2,
          max_tokens: 2000,
        }),
      }
    );

    if (!response.ok) throw new Error(`API call failed: ${response.status}`);

    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    console.error(`Conversion to ${framework.name} failed:`, error);
    return null;
  }
};

// Extract component name from user request
const extractComponentName = (userRequest: string): string => {
  const request = userRequest.toLowerCase();
  if (request.includes("header")) return "header";
  if (request.includes("navbar") || request.includes("navigation"))
    return "navbar";
  if (request.includes("footer")) return "footer";
  if (request.includes("modal")) return "modal";
  if (request.includes("sidebar")) return "sidebar";
  if (request.includes("card")) return "card";
  if (request.includes("button")) return "button";
  if (request.includes("form")) return "form";
  return "custom component";
};
