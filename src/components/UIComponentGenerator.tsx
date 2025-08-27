import React, { useState, useRef, useEffect } from "react";
import { Send, Copy, Sparkles, Code, Settings } from "lucide-react";

// Types
import { Message, ComponentTemplate } from "../types";
import { Framework, FrameworkId } from "../types/framework";

// Components
import { ComponentLoader } from "./ui";
import ResizeHandle from "./ResizeHandle";
import ApiSettings from "./ApiSettings";
import CodeViewer from "./CodeViewer";
import CodeButton from "./CodeButton";
// import DebugPanel from "./DebugPanel";

// Data & Services
import { aiPersonality } from "../data/aiPersonality";
import {
  callAIAPI,
  generateCustomComponent,
  AIProvider,
  AIConfig,
} from "../services/aiService";
import { frameworkManager } from "../services/frameworkManager";
import { getAllFrameworks } from "../data/frameworks";
import { multiFrameworkTemplates } from "../data/multiFrameworkTemplates";
import { templateEngine } from "../services/templateEngine";

const UIComponentGenerator: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "assistant",
      content:
        "Hi! I'm your AI component designer. I can create beautiful, interactive UI components from your descriptions. What would you like to build today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [generatedComponent, setGeneratedComponent] =
    useState<ComponentTemplate | null>(null);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isComponentLoading, setIsComponentLoading] = useState<boolean>(false);
  // AI Configuration state
  const [aiProvider, setAiProvider] = useState<AIProvider>(
    (localStorage.getItem("aura_ai_provider") as AIProvider) || "gemini"
  );
  const [apiKey, setApiKey] = useState<string>(() => {
    const stored = localStorage.getItem("aura_api_key");
    if (stored) return stored;

    // Auto-load API key based on current provider
    const currentProvider =
      (localStorage.getItem("aura_ai_provider") as AIProvider) || "gemini";
    if (currentProvider === "gemini") {
      return (import.meta as any).env?.VITE_GEMINI_API_KEY || "";
    } else {
      return (import.meta as any).env?.VITE_OPENROUTER_API_KEY || "";
    }
  });
  const [model, setModel] = useState<string>(
    localStorage.getItem("aura_model") ||
      (aiProvider === "openrouter" ? "qwen/qwen3-coder:free" : "gemma-3-27b-it")
  );
  const [showApiSettings, setShowApiSettings] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(20); // Percentage
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const [showCodeViewer, setShowCodeViewer] = useState<boolean>(false);

  // Framework state
  const [currentFramework, setCurrentFramework] = useState<Framework>(
    frameworkManager.getCurrentFramework()
  );
  const [availableFrameworks] = useState<Framework[]>(getAllFrameworks());

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const resizeRef = useRef<HTMLDivElement>(null);
  const isInitialLoad = useRef<boolean>(true);

  // Framework change handler
  const handleFrameworkChange = async (framework: Framework) => {
    try {
      await frameworkManager.setFramework(framework.id);
      setCurrentFramework(framework);

      // If there's a generated component, update it for the new framework
      if (generatedComponent) {
        updateGeneratedComponentForFramework(framework);
      }
    } catch (error) {
      console.error("Failed to change framework:", error);
    }
  };

  // Update generated component for new framework
  const updateGeneratedComponentForFramework = (framework: Framework) => {
    if (!generatedComponent) return;

    // Check if this is a custom AI-generated component
    const multiFrameworkData = (window as any).currentMultiFrameworkComponent;
    if (multiFrameworkData && multiFrameworkData[framework.id]) {
      setGeneratedComponent({
        code: multiFrameworkData[framework.id].code,
        preview: generatedComponent.preview,
        type: generatedComponent.type,
      });
      return;
    }

    // Find the component in predefined multi-framework templates
    const componentId = Object.keys(multiFrameworkTemplates).find(
      (id) => multiFrameworkTemplates[id].preview === generatedComponent.preview
    );

    if (componentId) {
      const frameworkTemplate = templateEngine.getTemplate(
        componentId,
        framework.id
      );
      if (frameworkTemplate) {
        setGeneratedComponent({
          code: frameworkTemplate.code,
          preview: generatedComponent.preview,
          type: generatedComponent.type,
        });
      }
    }
  };

  // Create dynamic CSS classes
  useEffect(() => {
    const styleId = "dynamic-sidebar-styles";
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = `
      .sidebar-width { width: ${sidebarWidth}% !important; }
      .preview-width { width: ${100 - sidebarWidth}% !important; }
      
      /* Prevent unwanted scrolling on load */
      html, body {
        overflow-x: hidden;
        scroll-behavior: smooth;
      }
      
      /* Ensure animations don't cause layout shifts */
      * {
        animation-fill-mode: both;
      }
    `;
  }, [sidebarWidth]);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Only scroll to bottom when new messages are added, not on initial load
  useEffect(() => {
    // Skip scrolling on initial load
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    // Only scroll if there are multiple messages (not just the welcome message)
    if (messages.length > 1) {
      // Add a small delay to ensure DOM is updated
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [messages]);

  // Resize functionality
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;

      const containerWidth = window.innerWidth;
      const newWidth = (e.clientX / containerWidth) * 100;

      // Constrain between 20% and 80%
      const constrainedWidth = Math.min(Math.max(newWidth, 20), 80);
      setSidebarWidth(constrainedWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizing]);

  const handleResizeStart = () => {
    setIsResizing(true);
  };

  // Persist AI configuration and auto-load API key when provider changes
  useEffect(() => {
    localStorage.setItem("aura_ai_provider", aiProvider);

    // Always load the appropriate environment API key and model when provider changes
    if (aiProvider === "gemini") {
      const geminiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
      if (geminiKey) {
        setApiKey(geminiKey);
        localStorage.removeItem("aura_api_key"); // Clear cached key
      }
      // Force set the correct model
      setModel("gemma-3-27b-it");
      localStorage.removeItem("aura_model"); // Clear cached model
    } else {
      const openrouterKey = (import.meta as any).env?.VITE_OPENROUTER_API_KEY;
      if (openrouterKey) {
        setApiKey(openrouterKey);
        localStorage.removeItem("aura_api_key"); // Clear cached key
      }
      // Force set the correct model
      setModel("qwen/qwen3-coder:free");
      localStorage.removeItem("aura_model"); // Clear cached model
    }
  }, [aiProvider]);
  useEffect(() => {
    if (apiKey) localStorage.setItem("aura_api_key", apiKey);
  }, [apiKey]);
  useEffect(() => {
    if (model) localStorage.setItem("aura_model", model);
  }, [model]);

  // Keyboard shortcuts for framework switching, resizing and code viewer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          // Framework switching shortcuts (Cmd+1-5)
          case "1":
            e.preventDefault();
            if (availableFrameworks[0]) {
              handleFrameworkChange(availableFrameworks[0]); // React
            }
            break;
          case "2":
            e.preventDefault();
            if (availableFrameworks[1]) {
              handleFrameworkChange(availableFrameworks[1]); // Vue
            }
            break;
          case "3":
            e.preventDefault();
            if (availableFrameworks[2]) {
              handleFrameworkChange(availableFrameworks[2]); // Svelte
            }
            break;
          case "4":
            e.preventDefault();
            if (availableFrameworks[3]) {
              handleFrameworkChange(availableFrameworks[3]); // Angular
            }
            break;
          case "5":
            e.preventDefault();
            if (availableFrameworks[4]) {
              handleFrameworkChange(availableFrameworks[4]); // Vanilla
            }
            break;
          // Resizing shortcuts (Cmd+Shift+1-3)
          case "!": // Cmd+Shift+1
            e.preventDefault();
            setSidebarWidth(30);
            break;
          case "@": // Cmd+Shift+2
            e.preventDefault();
            setSidebarWidth(50);
            break;
          case "#": // Cmd+Shift+3
            e.preventDefault();
            setSidebarWidth(70);
            break;
          case "k":
            e.preventDefault();
            if (generatedComponent) {
              setShowCodeViewer(!showCodeViewer);
            }
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [generatedComponent, showCodeViewer, availableFrameworks]);

  const handleSendMessage = async (): Promise<void> => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue("");
    setIsGenerating(true);

    // Simulate AI thinking time
    await new Promise((resolve) =>
      setTimeout(resolve, 800 + Math.random() * 1200)
    );

    // Always use AI - no fallback
    const aiConfig: AIConfig = {
      provider: aiProvider,
      apiKey,
      model,
    };
    const { response, componentType } = await callAIAPI(
      currentInput,
      messages,
      aiConfig,
      currentFramework.id
    );

    const assistantMessage: Message = {
      id: Date.now() + 1,
      type: "assistant",
      content: response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsGenerating(false);

    // Generate AI component if componentType is detected
    if (componentType) {
      setIsComponentLoading(true);

      // Component generation animation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Always generate custom AI components
      const customComponent = await generateCustomComponent(
        currentInput,
        aiConfig,
        undefined,
        currentFramework.id
      );

      if (customComponent && customComponent.multiFramework) {
        // Store the multi-framework component for framework switching
        const currentFrameworkCode =
          customComponent.multiFramework[currentFramework.id];
        if (currentFrameworkCode) {
          setGeneratedComponent({
            code: currentFrameworkCode.code,
            preview: customComponent.preview,
            type: customComponent.type,
          });
          // Store the multi-framework data for later use
          (window as any).currentMultiFrameworkComponent =
            customComponent.multiFramework;
        }
      } else if (customComponent) {
        // Fallback to just the React code
        setGeneratedComponent(customComponent);
      }

      setIsComponentLoading(false);

      // Add encouragement message
      const encouragementResponses = aiPersonality.encouragement;
      const encouragementMessage: Message = {
        id: Date.now() + 2,
        type: "assistant",
        content:
          encouragementResponses[
            Math.floor(Math.random() * encouragementResponses.length)
          ],
        timestamp: new Date(),
      };

      await new Promise((resolve) => setTimeout(resolve, 500));
      setMessages((prev) => [...prev, encouragementMessage]);
    }
  };

  const handleKeyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
  ): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyToClipboard = (): void => {
    if (generatedComponent) {
      navigator.clipboard.writeText(generatedComponent.code);
    }
  };

  const renderPreview = (): React.ReactNode => {
    if (isComponentLoading) {
      return <ComponentLoader />;
    }

    if (!generatedComponent) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-6">
            <div className="w-12 h-12 mx-auto border border-dashed border-gray-300 rounded-2xl flex items-center justify-center bg-gray-50/50">
              <Code className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600">
                AI-Powered Component Generator
              </p>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Describe any component and our AI will generate custom code for
                you
              </p>
            </div>
          </div>
        </div>
      );
    }

    // For AI-generated components, show a generic preview message
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 mx-auto bg-gradient-to-br from-black to-gray-600 rounded-2xl flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-800 capitalize">
              {generatedComponent.preview}
            </p>
            <p className="text-sm text-gray-600">
              AI-generated component ready!
            </p>
            <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
              Your custom component has been generated with{" "}
              {generatedComponent.code.split("\n").length} lines of code. Use ⌘K
              to view the full code.
            </p>
          </div>
        </div>
      </div>
    );
  };

  // No predefined suggestions - everything is AI-generated

  return (
    <div className="h-screen bg-white flex overflow-hidden relative">
      {/* Main Content Wrapper */}
      <div
        className={`flex flex-1 transition-all duration-300 overflow-hidden ${
          showCodeViewer ? "mr-[480px]" : ""
        }`}
      >
        {/* Left Panel - Chat Interface */}
        <div className="bg-white flex flex-col border-r border-gray-100 sidebar-width">
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100/50 backdrop-blur-xl bg-white/70">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-black to-gray-800 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="space-y-0.5">
                <h1 className="text-xl font-medium text-black tracking-tight">
                  Aura
                </h1>
                <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                  {apiKey
                    ? `${aiProvider} Connected`.toUpperCase()
                    : "Local Mode"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    apiKey ? "bg-black animate-pulse shadow-sm" : "bg-gray-300"
                  }`}
                ></div>
                <span className="text-xs text-gray-600 font-medium">
                  {apiKey ? "Connected" : "Offline"}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowApiSettings(!showApiSettings)}
                className="p-2.5 text-gray-400 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Toggle API settings"
                title="Toggle API settings"
              >
                <Settings size={15} />
              </button>
            </div>
          </div>

          {/* API Settings Panel */}
          <ApiSettings
            aiProvider={aiProvider}
            setAiProvider={setAiProvider}
            apiKey={apiKey}
            setApiKey={setApiKey}
            model={model}
            setModel={setModel}
            showApiSettings={showApiSettings}
          />

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    message.type === "user"
                      ? "bg-black text-white ml-4 shadow-sm"
                      : "bg-white/70 backdrop-blur-sm text-gray-800 mr-4 border border-gray-100"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isGenerating && (
              <div className="flex justify-start">
                <div className="bg-white/70 backdrop-blur-sm text-gray-800 mr-4 border border-gray-100 px-4 py-3 rounded-2xl text-sm shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]"></div>
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]"></div>
                    </div>
                    <span className="text-gray-500 text-xs">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="px-8 py-6 border-t border-gray-100/50 bg-white/80 backdrop-blur-xl">
            {/* Input with integrated send button */}
            <div className="relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Describe your component..."
                className="w-full pl-4 pr-16 py-3 border border-gray-200 rounded-2xl text-sm resize-none focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 bg-white/70 backdrop-blur-sm shadow-sm placeholder:text-gray-400 hover:shadow-md focus:shadow-md"
                rows={3}
                maxLength={500}
              />

              {/* Character counter */}
              <div
                className={`absolute bottom-3 left-3 text-xs font-medium transition-colors duration-200 ${
                  inputValue.length > 450
                    ? "text-red-500"
                    : inputValue.length > 400
                    ? "text-yellow-600"
                    : "text-gray-400"
                }`}
              >
                {inputValue.length}/500
              </div>

              {/* Integrated send button */}
              <button
                type="button"
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isGenerating}
                className="absolute bottom-3 right-2 p-2 bg-black text-white rounded-xl hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md group overflow-hidden"
                aria-label="Send message"
                title="Send message"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Send size={14} className="relative z-10" />
              </button>
            </div>
            {/* Compact instructions */}
            <div className="space-y-2 mt-3">
              <div className="flex justify-between items-center">
                <div className="text-[10px] text-gray-500 font-medium flex items-center space-x-2 flex-wrap">
                  <span className="whitespace-nowrap">⏎ Send</span>
                  <span className="whitespace-nowrap">⇧⏎ Line</span>
                  <span className="whitespace-nowrap">⌘1-5 Framework</span>
                  <span
                    className={
                      generatedComponent ? "opacity-100" : "opacity-50"
                    }
                  >
                    ⌘K Code
                  </span>
                </div>
                {generatedComponent && (
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="text-[10px] text-gray-600 hover:text-black transition-all duration-200 flex items-center space-x-1.5 px-2 py-1 rounded-lg hover:bg-gray-50 font-medium group shrink-0"
                  >
                    <Copy
                      size={10}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <span>Copy</span>
                  </button>
                )}
              </div>
              {generatedComponent && (
                <div className="text-[10px] text-gray-400 font-medium">
                  {generatedComponent.code.split("\n").length} lines generated
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Resize Handle */}
        <ResizeHandle
          isResizing={isResizing}
          onResizeStart={handleResizeStart}
          resizeRef={resizeRef}
        />

        {/* Right Panel - Preview */}
        <div className="bg-gray-50 flex flex-col preview-width overflow-hidden">
          {/* Header */}
          <div
            className={`flex items-center justify-between px-8 py-6 border-b border-gray-200/50 bg-white/80 backdrop-blur-sm transition-all duration-300 ${
              showCodeViewer ? "pr-4" : ""
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-4 bg-black rounded-full"></div>
                <h3 className="font-medium text-black tracking-tight">
                  Preview
                </h3>
              </div>
              <div className="text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg font-medium border border-gray-100">
                {Math.round(sidebarWidth)}% • {Math.round(100 - sidebarWidth)}%
              </div>
            </div>
            <div
              className={`flex items-center transition-all duration-300 ${
                showCodeViewer ? "space-x-2" : "space-x-4"
              }`}
            >
              {generatedComponent && !showCodeViewer && (
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  <span className="text-xs text-gray-600 capitalize font-medium">
                    {generatedComponent.preview}
                  </span>
                </div>
              )}
              <div className="flex items-center space-x-3">
                <CodeButton
                  onClick={() => setShowCodeViewer(!showCodeViewer)}
                  disabled={!generatedComponent}
                  isActive={showCodeViewer}
                  framework={currentFramework}
                />
                {!showCodeViewer && (
                  <div className="text-xs text-gray-400 font-medium whitespace-nowrap">
                    ⌘1-5
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Preview Area */}
          <div className="flex-1 p-8">{renderPreview()}</div>
        </div>
      </div>

      {/* Code Viewer Sidebar */}
      <CodeViewer
        isOpen={showCodeViewer}
        code={generatedComponent?.code || ""}
        componentName={
          generatedComponent?.preview.replace(/\s+/g, "") || "Component"
        }
        framework={currentFramework}
        frameworks={availableFrameworks}
        onFrameworkChange={handleFrameworkChange}
      />

      {/* Debug Panel (dev mode only) */}
      {/* <DebugPanel /> */}
    </div>
  );
};

export default UIComponentGenerator;
