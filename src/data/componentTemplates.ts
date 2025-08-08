import { ComponentTemplates } from "../types";

export const componentTemplates: ComponentTemplates = {
  "magnetic button": {
    code: `import React, { useRef, useEffect } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = "" }) => {
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
      
      button.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
    };
    
    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px)';
    };
    
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <button
      type="button"
      ref={buttonRef}
      className={\`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg \${className}\`}
      title="Interactive magnetic button that follows your cursor"
    >
      {children}
    </button>
  );
};

export default MagneticButton;`,
    preview: "magnetic button",
    type: "button",
  },
  "glowing card": {
    code: `import React, { useRef, useEffect } from 'react';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingCard: React.FC<GlowingCardProps> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div
      ref={cardRef}
      className={\`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer [background:radial-gradient(400px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,0,0,0.04),transparent_40%)] \${className}\`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;`,
    preview: "glowing card",
    type: "card",
  },
  "minimal input": {
    code: `import React, { useState } from 'react';

interface MinimalInputProps {
  placeholder?: string;
  className?: string;
}

const MinimalInput: React.FC<MinimalInputProps> = ({ placeholder = "Enter text...", className = "" }) => {
  const [value, setValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  
  return (
    <div className={\`relative \${className}\`}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg"
        placeholder={placeholder}
      />
      <div className={\`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${focused || value ? 'w-full' : 'w-0'}\`} />
    </div>
  );
};

export default MinimalInput;`,
    preview: "minimal input",
    type: "input",
  },
  "loading spinner": {
    code: `import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };
  
  return (
    <div className={\`flex items-center justify-center \${className}\`}>
      <div className={\`\${sizeClasses[size]} relative\`}>
        <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;`,
    preview: "loading spinner",
    type: "loading",
  },
  "toggle switch": {
    code: `import React, { useState } from 'react';

interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ defaultChecked = false, onChange, className = "" }) => {
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
      className={\`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${checked ? 'bg-black' : 'bg-gray-300'} \${className}\`}
      aria-label={\`Toggle switch, currently \${checked ? 'on' : 'off'}\`}
      title={\`Toggle switch, currently \${checked ? 'on' : 'off'}\`}
    >
      <div
        className={\`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${checked ? 'translate-x-7' : 'translate-x-0.5'}\`}
      />
    </button>
  );
};

export default ToggleSwitch;`,
    preview: "toggle switch",
    type: "toggle",
  },
};
