import React, { useState } from "react";
import { ToggleSwitchProps } from "../../types";

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  defaultChecked = false,
  onChange,
  className = "",
}) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 ${
        checked ? "bg-black" : "bg-gray-300"
      } ${className}`}
      aria-label={`Toggle switch, currently ${checked ? "on" : "off"}`}
      title={`Toggle switch, currently ${checked ? "on" : "off"}`}
    >
      <div
        className={`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md ${
          checked ? "translate-x-7" : "translate-x-0.5"
        }`}
      />
    </button>
  );
};

export default ToggleSwitch;
