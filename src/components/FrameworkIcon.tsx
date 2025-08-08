import React from "react";
import { Framework } from "../types/framework";

interface FrameworkIconProps {
  framework: Framework;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
}

const FrameworkIcon: React.FC<FrameworkIconProps> = ({
  framework,
  size = "md",
  showName = false,
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div
      className={`flex items-center ${
        showName ? "space-x-2" : ""
      } ${className}`}
    >
      <div
        className={`${sizeClasses[size]} flex-shrink-0`}
        style={{ color: framework.color }}
        dangerouslySetInnerHTML={{ __html: framework.icon }}
        title={framework.displayName}
      />
      {showName && (
        <span className={`font-medium ${textSizeClasses[size]} truncate`}>
          {framework.name}
        </span>
      )}
    </div>
  );
};

export default FrameworkIcon;
