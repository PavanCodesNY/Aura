import React, { useRef, useEffect } from "react";
import { ComponentProps } from "../../types";

const GlowingCard: React.FC<ComponentProps> = ({
  children,
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
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
      className={`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer [background:radial-gradient(400px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,0,0,0.04),transparent_40%)] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowingCard;
