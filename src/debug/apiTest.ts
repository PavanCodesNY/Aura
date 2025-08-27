// Debug script to test OpenRouter API configuration
export const testAPIConfiguration = () => {
  console.log("🔧 Testing API Configuration:");
  
  // Check environment variables
  const viteApiKey = (import.meta as any).env?.VITE_OPENROUTER_API_KEY;
  const viteModel = (import.meta as any).env?.VITE_OPENROUTER_MODEL;
  const viteHuggingface = (import.meta as any).env?.VITE_HUGGINGFACE_TOKEN;
  
  console.log("📋 Environment Variables:");
  console.log(`  VITE_OPENROUTER_API_KEY: ${viteApiKey ? '✅ Present (' + viteApiKey.substring(0, 10) + '...)' : '❌ Missing'}`);
  console.log(`  VITE_OPENROUTER_MODEL: ${viteModel ? '✅ ' + viteModel : '❌ Missing'}`);
  console.log(`  VITE_HUGGINGFACE_TOKEN: ${viteHuggingface ? '✅ Present (' + viteHuggingface.substring(0, 10) + '...)' : '❌ Missing'}`);
  
  // Check localStorage
  const storedApiKey = localStorage.getItem("aura_openrouter_key");
  const storedModel = localStorage.getItem("aura_openrouter_model");
  
  console.log("💾 LocalStorage:");
  console.log(`  aura_openrouter_key: ${storedApiKey ? '✅ Present (' + storedApiKey.substring(0, 10) + '...)' : '❌ Missing'}`);
  console.log(`  aura_openrouter_model: ${storedModel ? '✅ ' + storedModel : '❌ Missing'}`);
  
  // Final resolved values
  const finalApiKey = storedApiKey || viteApiKey || "";
  const finalModel = storedModel || viteModel || "qwen/qwen3-coder:free";
  
  console.log("🎯 Final Resolved Values:");
  console.log(`  API Key: ${finalApiKey ? '✅ Present (' + finalApiKey.substring(0, 10) + '...)' : '❌ Missing'}`);
  console.log(`  Model: ${finalModel}`);
  
  return {
    hasApiKey: !!finalApiKey,
    apiKey: finalApiKey,
    model: finalModel
  };
};

// Auto-run in development
if (import.meta.env.DEV) {
  setTimeout(testAPIConfiguration, 1000);
}