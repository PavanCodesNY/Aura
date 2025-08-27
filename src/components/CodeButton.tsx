import React from "react";
import { Framework } from "../types/framework";
import FrameworkIcon from "./FrameworkIcon";

interface CodeButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
  framework?: Framework;
  showFrameworkIndicator?: boolean;
}

const CodeButton: React.FC<CodeButtonProps> = ({
  onClick,
  disabled = false,
  isActive = false,
  framework,
  showFrameworkIndicator = true,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`group relative px-2.5 py-1.5 text-xs font-mono font-medium rounded-lg border transition-all duration-200 ${
        disabled
          ? "text-gray-300 border-gray-200 cursor-not-allowed"
          : isActive
          ? "text-black border-black bg-gray-50"
          : "text-gray-600 border-gray-200 hover:text-black hover:border-black hover:bg-gray-50 active:scale-95"
      }`}
      title={
        disabled
          ? "No component to show"
          : isActive
          ? `Hide ${framework?.displayName || "component"} code`
          : `View ${framework?.displayName || "component"} code`
      }
    >
      <span className="relative z-10 flex items-center space-x-1.5">
        {/* Framework indicator */}
        {showFrameworkIndicator && framework && (
          <FrameworkIcon framework={framework} size="sm" />
        )}

        {/* Code brackets */}
        <span className="flex items-center space-x-0.5">
          <span>&lt;</span>
          <span>/</span>
          <span>&gt;</span>
        </span>
      </span>

      {/* Subtle hover effect */}
      {!disabled && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      )}
    </button>
  );
};

export default CodeButton;
