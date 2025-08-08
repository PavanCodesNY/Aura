import React, { useState } from "react";
import { MinimalInputProps } from "../../types";

const MinimalInput: React.FC<MinimalInputProps> = ({
  placeholder = "Enter text...",
  className = "",
}) => {
  const [value, setValue] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(false);

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

export default MinimalInput;
