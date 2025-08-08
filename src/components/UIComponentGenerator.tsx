import React, { useState, useRef, useEffect } from "react";
import { Send, Copy, Sparkles, Code, Settings } from "lucide-react";

// Types
import { Message, ComponentTemplate } from "../types";
import { Framework, FrameworkId } from "../types/framework";

// Components
import {
  MagneticButton,
  GlowingCard,
  MinimalInput,
  LoadingSpinner,
  ToggleSwitch,
  ComponentLoader,
} from "./ui";
import ResizeHandle from "./ResizeHandle";
import ApiSettings from "./ApiSettings";
import CodeViewer from "./CodeViewer";
import CodeButton from "./CodeButton";

// Data & Services
import { componentTemplates } from "../data/componentTemplates";
import { multiFrameworkTemplates } from "../data/multiFrameworkTemplates";
import { aiPersonality } from "../data/aiPersonality";
import {
  callOpenRouterAPI,
  generateAIResponse,
  generateCustomComponent,
} from "../services/aiService";
import { frameworkManager } from "../services/frameworkManager";
import { templateEngine } from "../services/templateEngine";
import { getAllFrameworks } from "../data/frameworks";

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
  const [apiKey, setApiKey] = useState<string>("");
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

    // Use real AI API if key is provided, otherwise use fallback
    const { response, componentType } = apiKey
      ? await callOpenRouterAPI(currentInput, messages, apiKey)
      : generateAIResponse(currentInput);

    const assistantMessage: Message = {
      id: Date.now() + 1,
      type: "assistant",
      content: response,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsGenerating(false);

    // If a component was identified, generate it
    if (componentType && componentTemplates[componentType]) {
      setIsComponentLoading(true);

      // Component generation animation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Handle custom AI-generated components
      if (componentType === "custom") {
        const customComponent = await generateCustomComponent(
          currentInput,
          apiKey
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
        } else {
          // Fallback to just the React code
          setGeneratedComponent(customComponent);
        }
        setIsComponentLoading(false);
        return;
      }

      // Use the new multi-framework system for predefined components
      // Map component type to component ID
      const componentTypeToId: Record<string, string> = {
        "magnetic button": "magnetic-button",
        "glowing card": "glowing-card",
        "minimal input": "minimal-input",
        "toggle switch": "toggle-switch",
        "loading spinner": "loading-spinner",
      };

      const componentId = componentTypeToId[componentType];

      if (componentId) {
        const frameworkTemplate = templateEngine.getTemplate(
          componentId,
          currentFramework.id
        );
        if (frameworkTemplate) {
          setGeneratedComponent({
            code: frameworkTemplate.code,
            preview: componentType,
            type: multiFrameworkTemplates[componentId].type,
          });
        } else {
          // Fallback to old system
          setGeneratedComponent(componentTemplates[componentType]);
        }
      } else {
        // Fallback to old system
        setGeneratedComponent(componentTemplates[componentType]);
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
                Ready to Create
              </p>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Describe your component and watch it come to life
              </p>
            </div>
          </div>
        </div>
      );
    }

    switch (generatedComponent.preview) {
      case "magnetic button":
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-6">
              <MagneticButton>Hover & move cursor</MagneticButton>
              <p className="text-xs text-gray-500 font-medium">
                Try hovering and moving your cursor around the button
              </p>
            </div>
          </div>
        );
      case "glowing card":
        return (
          <div className="flex items-center justify-center h-full p-8">
            <div className="text-center space-y-6">
              <GlowingCard className="w-80">
                <h3 className="text-lg font-semibold mb-3">Interactive Card</h3>
                <p className="text-gray-600 leading-relaxed">
                  This card responds to your cursor with a subtle glow effect.
                  Perfect for showcasing content with elegant hover states.
                </p>
              </GlowingCard>
              <p className="text-xs text-gray-500 font-medium">
                Move your cursor over the card to see the glow effect
              </p>
            </div>
          </div>
        );
      case "minimal input":
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-6">
              <div className="w-80">
                <MinimalInput placeholder="Enter your email" />
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Click to focus and start typing
              </p>
            </div>
          </div>
        );
      case "loading spinner":
        return (
          <div className="flex items-center justify-center h-full">
            <LoadingSpinner size="lg" />
          </div>
        );
      case "toggle switch":
        return (
          <div className="flex items-center justify-center h-full">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-sm text-gray-600">
                  Enable notifications
                </span>
                <ToggleSwitch />
              </div>
              <p className="text-xs text-gray-500 font-medium">
                Click to toggle the switch
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Quick suggestions
  const suggestions = [
    { label: "Button", full: "magnetic button that follows cursor" },
    { label: "Card", full: "glowing card with hover effects" },
    { label: "Input", full: "minimal input field with animations" },
    { label: "Toggle", full: "smooth toggle switch" },
    { label: "Spinner", full: "loading spinner animation" },
  ];

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
          <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100/50 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-black to-gray-800 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </div>
              <div className="space-y-0.5">
                <h1 className="text-xl font-medium text-black tracking-tight">
                  Aura
                </h1>
                <p className="text-xs text-gray-500 font-medium tracking-wide uppercase">
                  {apiKey ? "AI Connected" : "Local Mode"}
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
                className="p-2.5 text-gray-400 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                aria-label="Toggle API settings"
                title="Toggle API settings"
              >
                <Settings size={15} />
              </button>
            </div>
          </div>

          {/* API Settings Panel */}
          <ApiSettings
            apiKey={apiKey}
            setApiKey={setApiKey}
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
                      ? "bg-black text-white ml-4"
                      : "bg-gray-50 text-gray-800 mr-4 border border-gray-100"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {isGenerating && (
              <div className="flex justify-start">
                <div className="bg-gray-50 text-gray-800 mr-4 border border-gray-100 px-4 py-3 rounded-2xl text-sm">
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
          <div className="px-8 py-6 border-t border-gray-100/50 bg-white/80 backdrop-blur-sm">
            {/* Quick suggestions */}
            {!inputValue && (
              <div className="flex flex-wrap gap-2 mb-4">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.label}
                    type="button"
                    onClick={() => setInputValue(`Create a ${suggestion.full}`)}
                    className="px-2 py-0.5 text-xs bg-gray-50 hover:bg-black hover:text-white text-gray-600 rounded-md transition-all duration-200 border border-gray-200 hover:border-black font-medium shrink-0"
                  >
                    {suggestion.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input with integrated send button */}
            <div className="relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Describe your component..."
                className="w-full pl-4 pr-16 py-3 border border-gray-200 rounded-xl text-sm resize-none focus:outline-none focus:ring-1 focus:ring-black focus:border-black transition-all duration-200 bg-white shadow-sm placeholder:text-gray-400 hover:shadow-md focus:shadow-md"
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
                className="absolute bottom-3 right-2 p-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md group overflow-hidden"
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
                    className="text-[10px] text-gray-600 hover:text-black transition-all duration-200 flex items-center space-x-1.5 px-2 py-1 rounded-md hover:bg-gray-50 font-medium group shrink-0"
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
    </div>
  );
};

export default UIComponentGenerator;
