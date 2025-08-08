import React from "react";

const ComponentLoader: React.FC = () => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center space-y-6">
      <div className="relative w-12 h-12 mx-auto">
        {/* Outer ring */}
        <div className="absolute inset-0 border border-gray-200 rounded-2xl"></div>
        {/* Spinning ring */}
        <div className="absolute inset-0 border border-black border-t-transparent rounded-2xl animate-spin"></div>
        {/* Inner dot */}
        <div className="absolute inset-4 bg-black rounded-lg animate-pulse opacity-60"></div>
      </div>
      <div className="space-y-3">
        <p className="text-sm font-medium text-black tracking-tight">
          Crafting Component
        </p>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce"></div>
          <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.15s]"></div>
          <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce [animation-delay:0.3s]"></div>
        </div>
      </div>
    </div>
  </div>
);

export default ComponentLoader;
