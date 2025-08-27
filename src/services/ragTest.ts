// Simple test file to verify RAG functionality
import { ragService } from './ragService';

// Test RAG functionality
export const testRAGService = async () => {
  console.log("🧪 Starting RAG Service Test");
  
  try {
    // Initialize if not already done
    await ragService.initialize();
    console.log("✅ RAG Service initialized");

    // Test search functionality
    const testQueries = [
      { query: "create a button component", framework: "react" as const },
      { query: "make a card with hover effects", framework: "vue" as const },
      { query: "build a modal dialog", framework: "svelte" as const },
      { query: "responsive navigation menu", framework: "angular" as const },
    ];

    for (const test of testQueries) {
      console.log(`\n🔍 Testing: "${test.query}" for ${test.framework}`);
      
      const context = await ragService.getContext(test.query, test.framework);
      
      console.log(`📊 RAG Results:`);
      console.log(`  - Used RAG: ${context.usedRAG}`);
      console.log(`  - Relevant Examples: ${context.relevantExamples.length}`);
      console.log(`  - Framework Patterns: ${context.frameworkPatterns.length}`);
      console.log(`  - Tailwind Patterns: ${context.tailwindPatterns.length}`);
      
      if (context.relevantExamples.length > 0) {
        console.log(`  - First example preview:`, 
          context.relevantExamples[0].substring(0, 100) + "...");
      }
    }

    console.log("\n✅ RAG Service test completed successfully!");
    
  } catch (error) {
    console.error("❌ RAG Service test failed:", error);
  }
};

// Auto-run test in development
if (import.meta.env.DEV) {
  // Run test after a short delay to ensure initialization
  setTimeout(testRAGService, 2000);
}