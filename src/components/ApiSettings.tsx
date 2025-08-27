import React from "react";
import { AIProvider } from "../services/aiService";

interface ApiSettingsProps {
  aiProvider: AIProvider;
  setAiProvider: (provider: AIProvider) => void;
  apiKey: string;
  setApiKey: (key: string) => void;
  model: string;
  setModel: (model: string) => void;
  showApiSettings: boolean;
}

const ApiSettings: React.FC<ApiSettingsProps> = ({
  aiProvider,
  setAiProvider,
  apiKey,
  setApiKey,
  model,
  setModel,
  showApiSettings,
}) => {
  if (!showApiSettings) return null;

  return (
    <div className="px-8 py-6 border-b border-gray-100/50 bg-white/70 backdrop-blur-xl rounded-b-2xl">
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
              AI Provider
            </label>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => {
                  setAiProvider("gemini");
                  setModel("gemma-3-27b-it");
                }}
                className={`flex-1 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                  aiProvider === "gemini"
                    ? "bg-black text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Gemini
              </button>
              <button
                type="button"
                onClick={() => {
                  setAiProvider("openrouter");
                  setModel("qwen/qwen3-coder:free");
                }}
                className={`flex-1 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                  aiProvider === "openrouter"
                    ? "bg-black text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                OpenRouter
              </button>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wide uppercase">
              {aiProvider === "gemini" ? "Gemini API Key" : "OpenRouter Key"}
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder={aiProvider === "gemini" ? "AIzaSy..." : "sk-or-..."}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 bg-white shadow-sm placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-2 tracking-wide uppercase">
              Model
            </label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              placeholder={aiProvider === "gemini" ? "gemma-3-27b-it" : "qwen/qwen3-coder:free"}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 bg-white shadow-sm placeholder:text-gray-400"
            />
          </div>
          <div className="text-xs text-gray-500 leading-relaxed">
            {aiProvider === "gemini" ? (
              <div>
                <p className="mb-2">
                  Get your API key from{" "}
                  <a
                    href="https://console.cloud.google.com/apis/credentials"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:underline font-medium"
                  >
                    Google Cloud Console
                  </a>
                </p>
                <p>Default model is gemma-3-27b-it. You can override it here.</p>
              </div>
            ) : (
              <div>
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
                <p>Default model is qwen/qwen3-coder:free. You can override it here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiSettings;
