import React from "react";

interface ResizeHandleProps {
  isResizing: boolean;
  onResizeStart: () => void;
  resizeRef: React.RefObject<HTMLDivElement>;
}

const ResizeHandle: React.FC<ResizeHandleProps> = ({
  isResizing,
  onResizeStart,
  resizeRef,
}) => {
  return (
    <div
      ref={resizeRef}
      className={`w-px bg-gray-200 hover:bg-black cursor-col-resize transition-all duration-300 relative group ${
        isResizing ? "bg-black w-0.5 shadow-sm" : ""
      }`}
      onMouseDown={onResizeStart}
      title="Drag to resize panels"
    >
      {/* Visual indicator */}
      <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 flex flex-col justify-center space-y-1 opacity-0 group-hover:opacity-60 transition-all duration-300">
        <div className="w-0.5 h-3 bg-black rounded-full"></div>
        <div className="w-0.5 h-3 bg-black rounded-full"></div>
        <div className="w-0.5 h-3 bg-black rounded-full"></div>
      </div>
      {/* Hover area */}
      <div className="absolute inset-y-0 -left-2 -right-2"></div>
    </div>
  );
};

export default ResizeHandle;
