import React, { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Framework } from "../types/framework";
import FrameworkSelector from "./FrameworkSelector";
import FrameworkIcon from "./FrameworkIcon";

interface CodeViewerProps {
  isOpen: boolean;
  code: string;
  componentName: string;
  framework: Framework;
  frameworks: Framework[];
  onFrameworkChange: (framework: Framework) => void;
  showFrameworkSelector?: boolean;
  readonly?: boolean;
}

const CodeViewer: React.FC<CodeViewerProps> = ({
  isOpen,
  code,
  componentName,
  framework,
  frameworks,
  onFrameworkChange,
  showFrameworkSelector = true,
  readonly = false,
}) => {
  const [copied, setCopied] = useState(false);
  const [wrap, setWrap] = useState(false);
  const [fontSize, setFontSize] = useState(11);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  // Framework-aware syntax highlighting
  const highlightCode = (code: string) => {
    // For now, use basic highlighting until framework highlighters are fixed
    return basicHighlight(code);
  };

  // Fallback basic highlighting
  const basicHighlight = (code: string) => {
    // Escape HTML first
    let highlighted = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Apply basic highlighting
    highlighted = highlighted
      // Comments
      .replace(
        /(\/\/.*?)$/gm,
        '<span style="color: #6b7280; font-style: italic;">$1</span>'
      )
      .replace(
        /(\/\*[\s\S]*?\*\/)/g,
        '<span style="color: #6b7280; font-style: italic;">$1</span>'
      )
      // Strings
      .replace(
        /("(?:[^"\\]|\\.)*?")/g,
        '<span style="color: #34d399;">$1</span>'
      )
      .replace(
        /('(?:[^'\\]|\\.)*?')/g,
        '<span style="color: #34d399;">$1</span>'
      )
      .replace(
        /(`(?:[^`\\]|\\.)*?`)/g,
        '<span style="color: #34d399;">$1</span>'
      )
      // Keywords
      .replace(
        /\b(import|export|const|let|var|function|return|if|else|for|while|interface|type|class|extends|implements|from|as|default)\b/g,
        '<span style="color: #60a5fa;">$1</span>'
      )
      // Numbers
      .replace(/\b(\d+\.?\d*)\b/g, '<span style="color: #fb923c;">$1</span>');

    return highlighted;
  };

  // Generate line numbers
  const generateLineNumbers = (code: string) => {
    const lines = code.split("\n");
    return lines.map((_, index) => (
      <div
        key={index + 1}
        className="text-gray-500 text-center select-none text-xs leading-relaxed"
      >
        {index + 1}
      </div>
    ));
  };

  return (
    <div
      className={`absolute top-0 right-0 h-full bg-[#0b0b0c] border-l border-black/10 shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-40 backdrop-blur-xl ${
        isOpen ? "w-[540px] translate-x-0" : "w-0 translate-x-full"
      }`}
      style={{
        backgroundImage:
          "radial-gradient(1200px 50% at 100% 0%, rgba(255,255,255,0.04), transparent 40%), radial-gradient(1200px 50% at 0% 100%, rgba(255,255,255,0.04), transparent 40%)",
      }}
    >
      {/* Header - Dark theme */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-white/[0.02]">
        <div className="flex items-center space-x-3">
          <div className="w-1.5 h-1.5 bg-red-500/80 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-yellow-400/80 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-green-500/80 rounded-full"></div>
          <div className="ml-3 text-xs font-medium text-gray-200 truncate">
            {componentName.charAt(0).toUpperCase() +
              componentName.slice(1).replace(/\s+/g, "")}
            .{framework.extension}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Framework Selector */}
          {showFrameworkSelector && !readonly && (
            <div className="w-32">
              <FrameworkSelector
                currentFramework={framework}
                frameworks={frameworks}
                onFrameworkChange={onFrameworkChange}
                compact={true}
                className="text-xs"
              />
            </div>
          )}

          {/* Controls */}
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center space-x-1.5 px-2 py-1 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200 shrink-0"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check size={10} className="text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={10} />
                <span>Copy</span>
              </>
            )}
          </button>
          <div className="hidden sm:flex items-center space-x-2 text-[10px] text-gray-400">
            <button
              type="button"
              onClick={() => setWrap(!wrap)}
              className={`px-1.5 py-0.5 rounded-md hover:bg-white/5 ${wrap ? "text-white" : ""}`}
              title="Toggle line wrap"
            >
              Wrap
            </button>
            <div className="flex items-center space-x-1">
              <button
                type="button"
                onClick={() => setFontSize((s) => Math.max(10, s - 1))}
                className="px-1.5 py-0.5 rounded-md hover:bg-white/5"
                title="Smaller font"
              >
                A-
              </button>
              <button
                type="button"
                onClick={() => setFontSize((s) => Math.min(16, s + 1))}
                className="px-1.5 py-0.5 rounded-md hover:bg-white/5"
                title="Larger font"
              >
                A+
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Code Content with line numbers */}
      <div className="flex-1 overflow-hidden bg-transparent">
        <div className="h-full flex">
          {/* Line numbers - extends full height */}
          <div className="bg-white/[0.03] border-r border-white/10 w-10 flex-shrink-0 overflow-hidden">
            <div className="py-4 px-2">{generateLineNumbers(code)}</div>
          </div>

          {/* Code content */}
          <div className="flex-1 min-w-0 overflow-auto">
            <pre className={`p-4 leading-relaxed font-mono text-gray-100 ${wrap ? "whitespace-pre-wrap break-words" : "whitespace-pre"}`} style={{ fontSize }}>
              <code
                dangerouslySetInnerHTML={{
                  __html: highlightCode(code),
                }}
              />
            </pre>
          </div>
        </div>
      </div>

      {/* Footer - Dark theme */}
      <div className="px-4 py-2 border-t border-white/10 bg-white/[0.02]">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center space-x-3">
            <span className="text-blue-400 capitalize">
              {framework.language}
            </span>
            <span>•</span>
            <span>{code.split("\n").length} lines</span>
            <span>•</span>
            <span>{(code.length / 1000).toFixed(1)}K chars</span>
          </div>
          <div className="flex items-center space-x-2">
            <FrameworkIcon framework={framework} size="sm" />
            <span className="text-gray-300">{framework.displayName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeViewer;
