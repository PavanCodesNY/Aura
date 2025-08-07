import React, { useState, useRef, useEffect } from "react";
import { Send, Copy, Sparkles, Code, Settings } from "lucide-react";

const UIComponentGenerator = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content:
        "Hi! I'm your AI component designer. I can create beautiful, interactive UI components from your descriptions. What would you like to build today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [generatedComponent, setGeneratedComponent] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isComponentLoading, setIsComponentLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showApiSettings, setShowApiSettings] = useState(false);
  const messagesEndRef = useRef(null);
  // Enhanced AI-like responses with context awareness
  const aiPersonality = {
    greetings: [
      "Hello! I'm excited to help you create something amazing. What UI component are you envisioning?",
      "Hey there! Ready to build some beautiful components? Tell me what you have in mind.",
      "Hi! I love creating UI magic. What interactive element would you like me to design?",
    ],

    componentResponses: {
      button: [
        "Great choice! I'll create a magnetic button that smoothly follows your cursor. It'll have that satisfying interactive feel.",
        "Perfect! Let me craft a button with some delightful hover physics. Users will love the responsive feedback.",
        "Nice! I'm designing a button that feels alive - it'll subtly track your mouse movement for maximum engagement.",
      ],
      card: [
        "Excellent! I'll build a card with a mesmerizing glow effect that tracks your cursor. Very modern and sleek.",
        "Love it! Creating a card with subtle lighting that follows your mouse - it'll feel premium and interactive.",
        "Perfect choice! This card will have a beautiful radial glow that responds to mouse movement. Very elegant!",
      ],
      input: [
        "Smart thinking! I'll create a clean, minimal input with smooth focus animations. Form fields should be delightful.",
        "Great idea! Designing an input with elegant label animations and clean styling. Users will appreciate the polish.",
        "Wonderful! This input will have buttery-smooth animations and perfect typography. Form design at its finest.",
      ],
      toggle: [
        "Excellent choice! A satisfying toggle switch with smooth transitions. These micro-interactions make all the difference.",
        "Perfect! Creating a toggle that feels premium to use - smooth animations and perfect tactile feedback.",
        "Love toggles! This one will have that perfect 'click' feeling with beautiful state transitions.",
      ],
      loading: [
        "Brilliant! Loading animations are crucial for good UX. I'll create something mesmerizing yet subtle.",
        "Great thinking! A beautiful loading animation keeps users engaged. Let me craft something elegant.",
        "Perfect! Loading states are often overlooked but so important. This will be both functional and beautiful.",
      ],
    },

    clarifications: [
      "Could you tell me more about the style you're looking for? Modern, minimal, or something else?",
      "What's the primary use case for this component? That'll help me optimize the interaction design.",
      "Any specific colors or themes in mind? I can adapt the design to match your vision.",
      "Should this component have any special accessibility features or animations?",
    ],

    encouragement: [
      "This is going to look fantastic! I'm excited to show you what I've created.",
      "I think you'll love how this turned out. The interactions feel really premium.",
      "This component has that perfect balance of functionality and delight. Great choice!",
      "The attention to detail in this one is going to make your users smile.",
    ],
  };
  const componentTemplates = {
    "magnetic button": {
      code: `import React, { useRef, useEffect } from 'react';

const MagneticButton = ({ children, className = "" }) => {
  const buttonRef = useRef(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    
    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;
      
      button.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
    };
    
    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px)';
    };
    
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <button
      ref={buttonRef}
      className={\`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg \${className}\`}
    >
      {children}
    </button>
  );
};

export default MagneticButton;`,
      preview: "magnetic button",
      type: "button",
    },
    "glowing card": {
      code: `import React, { useRef, useEffect } from 'react';

const GlowingCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div
      ref={cardRef}
      className={\`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer \${className}\`}
      style={{
        background: \`radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 0, 0, 0.04), transparent 40%)\`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;`,
      preview: "glowing card",
      type: "card",
    },
    "minimal input": {
      code: `import React, { useState } from 'react';

const MinimalInput = ({ placeholder = "Enter text...", className = "" }) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  
  return (
    <div className={\`relative \${className}\`}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg"
        placeholder={placeholder}
      />
      <div className={\`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${focused || value ? 'w-full' : 'w-0'}\`} />
    </div>
  );
};

export default MinimalInput;`,
      preview: "minimal input",
      type: "input",
    },
    "loading spinner": {
      code: `import React from 'react';

const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };
  
  return (
    <div className={\`flex items-center justify-center \${className}\`}>
      <div className={\`\${sizeClasses[size]} relative\`}>
        <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;`,
      preview: "loading spinner",
      type: "loading",
    },
    "toggle switch": {
      code: `import React, { useState } from 'react';

const ToggleSwitch = ({ defaultChecked = false, onChange, className = "" }) => {
  const [checked, setChecked] = useState(defaultChecked);
  
  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };
  
  return (
    <button
      onClick={handleToggle}
      className={\`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${checked ? 'bg-black' : 'bg-gray-300'} \${className}\`}
    >
      <div
        className={\`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${checked ? 'translate-x-7' : 'translate-x-0.5'}\`}
      />
    </button>
  );
};

export default ToggleSwitch;`,
      preview: "toggle switch",
      type: "toggle",
    },
  };
  // Real API Integration
  const callOpenRouterAPI = async (userInput, conversationHistory) => {
    if (!apiKey) {
      return {
        response:
          "Please set your OpenRouter API key in settings to enable AI conversations.",
        componentType: null,
      };
    }

    try {
      const systemPrompt = `You are an expert UI/UX designer and React developer who creates beautiful, interactive components. 

Your role:
- Analyze user requests for UI components
- Provide helpful, enthusiastic responses about component design
- Identify what type of component they want to build
- Give design insights and best practices
- Be conversational and encouraging

Available component types you can create:
- magnetic button (cursor-following button)
- glowing card (mouse-tracking glow effects)
- minimal input (clean form field with animations)
- loading spinner (elegant loading indicator)
- toggle switch (smooth toggle with animations)

When you identify a specific component request, end your response with: [COMPONENT:component_type]

Examples:
- User: "I need a button that follows the cursor" → Response should end with [COMPONENT:magnetic button]
- User: "Create a card with hover effects" → Response should end with [COMPONENT:glowing card]

Keep responses concise but helpful. Focus on the design and user experience aspects.`;

      const messages = [
        { role: "system", content: systemPrompt },
        ...conversationHistory.slice(-10).map((msg) => ({
          role: msg.type === "user" ? "user" : "assistant",
          content: msg.content,
        })),
        { role: "user", content: userInput },
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
            model: "anthropic/claude-3.5-sonnet",
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
      const cleanResponse = aiResponse
        .replace(/\[COMPONENT:[^\]]+\]/, "")
        .trim();

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
  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();

    // Detect component type
    let componentType = null;
    let detectedType = null;

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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
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
      ? await callOpenRouterAPI(currentInput, messages)
      : generateAIResponse(currentInput);

    const assistantMessage = {
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

      setGeneratedComponent(componentTemplates[componentType]);
      setIsComponentLoading(false);

      // Add encouragement message
      const encouragementResponses = aiPersonality.encouragement;
      const encouragementMessage = {
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const copyToClipboard = () => {
    if (generatedComponent) {
      navigator.clipboard.writeText(generatedComponent.code);
    }
  };
  const ComponentLoader = () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-6">
          {/* Outer ring */}
          <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
          {/* Spinning ring */}
          <div className="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
          {/* Inner pulse */}
          <div className="absolute inset-2 bg-black rounded-full animate-pulse opacity-20"></div>
          {/* Center dot */}
          <div className="absolute inset-6 bg-black rounded-full"></div>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-800">
            Crafting your component
          </p>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPreview = () => {
    if (isComponentLoading) {
      return <ComponentLoader />;
    }

    if (!generatedComponent) {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-gray-400">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6" />
            </div>
            <p className="text-sm">Component preview will appear here</p>
            <p className="text-xs text-gray-300 mt-1">
              Start a conversation to begin
            </p>
          </div>
        </div>
      );
    }

    switch (generatedComponent.preview) {
      case "magnetic button":
        return (
          <div className="flex items-center justify-center h-full">
            <MagneticButton>Hover & move cursor</MagneticButton>
          </div>
        );
      case "glowing card":
        return (
          <div className="flex items-center justify-center h-full p-8">
            <GlowingCard className="w-80">
              <h3 className="text-lg font-semibold mb-3">Interactive Card</h3>
              <p className="text-gray-600 leading-relaxed">
                This card responds to your cursor with a subtle glow effect.
                Perfect for showcasing content with elegant hover states.
              </p>
            </GlowingCard>
          </div>
        );
      case "minimal input":
        return (
          <div className="flex items-center justify-center h-full">
            <div className="w-80">
              <MinimalInput placeholder="Enter your email" />
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
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Enable notifications
              </span>
              <ToggleSwitch />
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  retur;
  n(
    <div className="h-screen bg-white flex">
      {/* Left Panel - Chat Interface */}
      <div className="w-1/2 bg-white flex flex-col border-r border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">
                AI Component Designer
              </h2>
              <p className="text-sm text-gray-500">
                {apiKey ? "OpenRouter API Connected" : "Fallback Mode"}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <div
                className={`w-2 h-2 rounded-full ${
                  apiKey ? "bg-green-500 animate-pulse" : "bg-gray-400"
                }`}
              ></div>
              <span className="text-xs text-gray-500">
                {apiKey ? "AI Active" : "Local"}
              </span>
            </div>
            <button
              onClick={() => setShowApiSettings(!showApiSettings)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Settings size={16} />
            </button>
          </div>
        </div>

        {/* API Settings Panel */}
        {showApiSettings && (
          <div className="p-6 border-b border-gray-100 bg-gray-50">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              OpenRouter API Settings
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">
                  API Key
                </label>
                <input
                  type="password"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="sk-or-..."
                  className="w-full p-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <p className="text-xs text-gray-500">
                Get your API key from{" "}
                <a
                  href="https://openrouter.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black underline"
                >
                  openrouter.ai
                </a>
              </p>
              <div className="flex items-center space-x-2 text-xs">
                <div
                  className={`w-2 h-2 rounded-full ${
                    apiKey ? "bg-green-500" : "bg-red-500"
                  }`}
                ></div>
                <span className="text-gray-600">
                  {apiKey
                    ? "API key configured"
                    : "No API key - using fallback responses"}
                </span>
              </div>
            </div>
          </div>
        )}
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {message.type === "assistant" && (
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-gray-600" />
                </div>
              )}
              <div
                className={`max-w-sm lg:max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  message.type === "user"
                    ? "bg-black text-white rounded-br-md"
                    : "bg-gray-50 text-gray-900 rounded-bl-md"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isGenerating && (
            <div className="flex justify-start">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 mt-1">
                <Sparkles className="w-4 h-4 text-gray-600" />
              </div>
              <div className="bg-gray-50 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-md text-sm flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
                <span>AI is thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-100 p-6 bg-gray-50">
          <div className="flex items-end space-x-4">
            <div className="flex-1">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Describe the component you'd like me to create..."
                className="w-full p-4 border border-gray-200 rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white"
                rows="3"
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isGenerating}
              className="p-4 bg-black text-white rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Send size={18} />
            </button>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-xs text-gray-500">
              Press Enter to send • Shift+Enter for new line
            </p>
            {generatedComponent && (
              <button
                onClick={copyToClipboard}
                className="text-xs text-gray-600 hover:text-black transition-colors flex items-center space-x-2 px-3 py-1 rounded-full hover:bg-white"
              >
                <Copy size={12} />
                <span>Copy code</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel - Preview */}
      <div className="w-1/2 bg-gray-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
          <h3 className="font-semibold text-gray-900">Live Preview</h3>
          {generatedComponent && (
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600 capitalize">
                {generatedComponent.preview}
              </span>
            </div>
          )}
        </div>

        {/* Preview Area */}
        <div className="flex-1 relative">{renderPreview()}</div>
      </div>
    </div>
  );
};
// Enhanced Preview Components
const MagneticButton = ({ children, className = "" }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;

      button.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    const handleMouseLeave = () => {
      button.style.transform = "translate(0px, 0px)";
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg ${className}`}
    >
      {children}
    </button>
  );
};

const GlowingCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", x + "px");
      card.style.setProperty("--mouse-y", y + "px");
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => card.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer ${className}`}
      style={{
        background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 0, 0, 0.04), transparent 40%)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
const MinimalInput = ({ placeholder = "Enter text...", className = "" }) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg"
        placeholder={placeholder}
      />
      <div
        className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${
          focused || value ? "w-full" : "w-0"
        }`}
      />
    </div>
  );
};

const LoadingSpinner = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]} relative`}>
        <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

const ToggleSwitch = ({ defaultChecked = false, onChange, className = "" }) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <button
      onClick={handleToggle}
      className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 ${
        checked ? "bg-black" : "bg-gray-300"
      } ${className}`}
    >
      <div
        className={`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md ${
          checked ? "translate-x-7" : "translate-x-0.5"
        }`}
      />
    </button>
  );
};

export default UIComponentGenerator;
