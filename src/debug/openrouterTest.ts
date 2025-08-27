// Direct test of OpenRouter API to verify the key works
import { OpenRouterClient } from '../services/openrouterClient';

export const testOpenRouterAPI = async () => {
  console.log("🧪 Testing OpenRouter API directly...");
  
  // Get the API key from environment or localStorage
  const apiKey = localStorage.getItem("aura_openrouter_key") || 
                 (import.meta as any).env?.VITE_OPENROUTER_API_KEY || "";
  
  const model = localStorage.getItem("aura_openrouter_model") || 
                (import.meta as any).env?.VITE_OPENROUTER_MODEL || 
                "qwen/qwen3-coder:free";
  
  console.log("🔑 Testing with API Key:", apiKey ? `${apiKey.substring(0, 10)}...` : "MISSING");
  console.log("🤖 Testing with Model:", model);
  
  if (!apiKey) {
    console.error("❌ No API key found! Please set VITE_OPENROUTER_API_KEY in .env or configure in settings.");
    return;
  }
  
  try {
    const response = await OpenRouterClient.chatCompletion({
      apiKey,
      model,
      messages: [
        {
          role: "user",
          content: "Hello, can you respond with just 'API test successful'?"
        }
      ],
      temperature: 0.1,
      maxTokens: 50,
      timeoutMs: 30000
    });
    
    console.log("✅ OpenRouter API Response:", response);
    
    if (response.choices && response.choices[0] && response.choices[0].message) {
      console.log("📝 API Response Content:", response.choices[0].message.content);
      console.log("✅ OpenRouter API is working correctly!");
    } else {
      console.error("❌ Invalid response structure:", response);
    }
    
  } catch (error) {
    console.error("❌ OpenRouter API Test Failed:", error);
    
    // Provide specific error messages
    if (error instanceof Error) {
      if (error.message.includes('401')) {
        console.error("🔑 Authentication failed - check your API key");
      } else if (error.message.includes('403')) {
        console.error("🚫 Access forbidden - check your API key permissions");
      } else if (error.message.includes('429')) {
        console.error("⏰ Rate limit exceeded - try again later");
      } else if (error.message.includes('timeout')) {
        console.error("⏱️ Request timeout - try again");
      }
    }
  }
};

// Auto-run test in development mode - disabled for now since we have the debug panel
// if (import.meta.env.DEV) {
//   setTimeout(testOpenRouterAPI, 3000);
// }