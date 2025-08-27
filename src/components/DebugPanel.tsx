import React, { useState } from 'react';
import { testAPIConfiguration } from '../debug/apiTest';
import { testOpenRouterAPI } from '../debug/openrouterTest';

const DebugPanel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [testResults, setTestResults] = useState<string>('');

  const runTests = async () => {
    setTestResults('Running tests...\n');
    
    // Test API configuration
    const apiConfig = testAPIConfiguration();
    setTestResults(prev => prev + `API Config: ${apiConfig.hasApiKey ? '✅' : '❌'}\n`);
    
    // Test OpenRouter API
    try {
      await testOpenRouterAPI();
      setTestResults(prev => prev + 'OpenRouter API: Check console for details\n');
    } catch (error) {
      setTestResults(prev => prev + `OpenRouter API: ❌ ${error}\n`);
    }
  };

  if (!import.meta.env.DEV) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="px-3 py-2 bg-red-500 text-white text-sm rounded shadow hover:bg-red-600"
      >
        Debug
      </button>
      
      {isVisible && (
        <div className="mt-2 p-4 bg-white border rounded shadow-lg w-80 max-h-96 overflow-auto">
          <h3 className="font-bold mb-2">Debug Panel</h3>
          
          <button
            onClick={runTests}
            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 mb-3"
          >
            Run API Tests
          </button>
          
          <pre className="text-xs bg-gray-100 p-2 rounded whitespace-pre-wrap">
            {testResults || 'Click "Run API Tests" to check configuration'}
          </pre>
          
          <div className="mt-3 text-xs text-gray-600">
            <div>• Check browser console for detailed logs</div>
            <div>• OpenRouter key should start with 'sk-or-'</div>
            <div>• RAG will use keyword fallback (HuggingFace disabled)</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DebugPanel;