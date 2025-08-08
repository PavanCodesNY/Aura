import React from "react";

interface ApiSettingsProps {
  apiKey: string;
  setApiKey: (key: string) => void;
  showApiSettings: boolean;
}

const ApiSettings: React.FC<ApiSettingsProps> = ({
  apiKey,
  setApiKey,
  showApiSettings,
}) => {
  if (!showApiSettings) return null;

  return (
    <div className="px-8 py-6 border-b border-gray-100/50 bg-gray-50/30 backdrop-blur-sm">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-1 h-4 bg-black rounded-full"></div>
          <h3 className="text-sm font-medium text-black tracking-tight">
            API Configuration
          </h3>
        </div>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wide uppercase">
              OpenRouter Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-or-..."
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 bg-white shadow-sm placeholder:text-gray-400"
            />
          </div>
          <div className="text-xs text-gray-500 leading-relaxed">
            <p className="mb-2">
              Get your API key from{" "}
              <a
                href="https://openrouter.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:underline font-medium"
              >
                OpenRouter
              </a>
            </p>
            <p>
              Without an API key, you'll get simulated responses with limited
              component generation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiSettings;
