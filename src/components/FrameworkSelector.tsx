import React, { useState, useRef, useEffect } from "react";
import { Framework } from "../types/framework";

interface FrameworkSelectorProps {
  currentFramework: Framework;
  frameworks: Framework[];
  onFrameworkChange: (framework: Framework) => void;
  disabled?: boolean;
  showIcons?: boolean;
  compact?: boolean;
  className?: string;
}

const FrameworkSelector: React.FC<FrameworkSelectorProps> = ({
  currentFramework,
  frameworks,
  onFrameworkChange,
  disabled = false,
  showIcons = true,
  compact = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const handleFrameworkSelect = (framework: Framework) => {
    onFrameworkChange(framework);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={toggleDropdown}
        disabled={disabled}
        className={`flex items-center justify-between w-full px-3 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:border-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${
          compact ? "text-sm" : "text-base"
        } ${isOpen ? "ring-2 ring-black border-black" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select framework"
      >
        <div className="flex items-center space-x-2">
          {showIcons && (
            <div
              className={`${compact ? "w-4 h-4" : "w-5 h-5"} flex-shrink-0`}
              style={{ color: currentFramework.color }}
              dangerouslySetInnerHTML={{ __html: currentFramework.icon }}
            />
          )}
          <span className="font-medium truncate">
            {compact ? currentFramework.name : currentFramework.displayName}
          </span>
        </div>

        {/* Dropdown Arrow */}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className="py-1" role="listbox">
            {frameworks.map((framework) => (
              <button
                key={framework.id}
                type="button"
                onClick={() => handleFrameworkSelect(framework)}
                className={`w-full px-3 py-2 text-left flex items-center space-x-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-150 ${
                  compact ? "text-sm" : "text-base"
                } ${
                  currentFramework.id === framework.id
                    ? "bg-gray-50 font-medium"
                    : ""
                }`}
                role="option"
                aria-selected={currentFramework.id === framework.id}
              >
                {showIcons && (
                  <div
                    className={`${
                      compact ? "w-4 h-4" : "w-5 h-5"
                    } flex-shrink-0`}
                    style={{ color: framework.color }}
                    dangerouslySetInnerHTML={{ __html: framework.icon }}
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">
                    {compact ? framework.name : framework.displayName}
                  </div>
                  {!compact && framework.description && (
                    <div className="text-xs text-gray-500 truncate">
                      {framework.description}
                    </div>
                  )}
                </div>

                {/* Current selection indicator */}
                {currentFramework.id === framework.id && (
                  <svg
                    className="w-4 h-4 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FrameworkSelector;
