import React, { useRef, useEffect } from "react";
import { ComponentProps } from "../../types";

const MagneticButton: React.FC<ComponentProps> = ({
  children,
  className = "",
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
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
      type="button"
      ref={buttonRef}
      className={`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg ${className}`}
      title="Interactive magnetic button that follows your cursor"
    >
      {children}
    </button>
  );
};

export default MagneticButton;
