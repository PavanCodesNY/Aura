// Shared type definitions
export interface Message {
  id: number;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface ComponentTemplate {
  code: string;
  preview: string;
  type: string;
}

export interface AIPersonality {
  greetings: string[];
  componentResponses: {
    [key: string]: string[];
  };
  clarifications: string[];
  encouragement: string[];
}

export interface ComponentTemplates {
  [key: string]: ComponentTemplate;
}

export interface AIResponse {
  response: string;
  componentType: string | null;
}

export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
}

export interface MinimalInputProps extends ComponentProps {
  placeholder?: string;
}

export interface LoadingSpinnerProps extends ComponentProps {
  size?: "sm" | "md" | "lg";
}

export interface ToggleSwitchProps extends ComponentProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}
