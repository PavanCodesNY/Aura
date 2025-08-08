// Framework type definitions for multi-framework support

export type FrameworkId = "react" | "vue" | "svelte" | "angular" | "vanilla";

export type FrameworkLanguage = "typescript" | "javascript";

export type SyntaxTheme = "dark" | "light";

export interface FrameworkTemplate {
  code: string;
  extension: string;
  language: FrameworkLanguage;
  dependencies?: string[];
  imports?: string[];
  exports?: string[];
}

export interface MultiFrameworkTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  type: string;
  category: "button" | "input" | "card" | "loading" | "toggle" | "layout";
  frameworks: {
    react: FrameworkTemplate;
    vue: FrameworkTemplate;
    svelte: FrameworkTemplate;
    angular: FrameworkTemplate;
    vanilla: FrameworkTemplate;
  };
  metadata?: {
    difficulty: "beginner" | "intermediate" | "advanced";
    tags: string[];
    lastUpdated: string;
  };
}

export interface SyntaxHighlighter {
  highlight: (code: string) => string;
  supportedLanguages: string[];
  theme: SyntaxTheme;
}

export interface TemplateProcessor {
  process: (template: FrameworkTemplate, context?: any) => string;
  validate: (template: FrameworkTemplate) => boolean;
  getRequiredImports: (template: FrameworkTemplate) => string[];
}

export interface Framework {
  id: FrameworkId;
  name: string;
  displayName: string;
  icon: string;
  extension: string;
  language: FrameworkLanguage;
  color: string;
  highlighter: SyntaxHighlighter;
  templateProcessor: TemplateProcessor;
  version?: string;
  description?: string;
}

export interface FrameworkManagerState {
  currentFramework: Framework;
  availableFrameworks: Framework[];
  isLoading: boolean;
  error?: string;
}

export interface FrameworkSelectorProps {
  currentFramework: Framework;
  frameworks: Framework[];
  onFrameworkChange: (framework: Framework) => void;
  disabled?: boolean;
  className?: string;
}

export interface FrameworkIconProps {
  framework: Framework;
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Framework-specific constants
export const FRAMEWORK_EXTENSIONS: Record<FrameworkId, string> = {
  react: "tsx",
  vue: "vue",
  svelte: "svelte",
  angular: "ts",
  vanilla: "js",
};

export const FRAMEWORK_DISPLAY_NAMES: Record<FrameworkId, string> = {
  react: "React + TypeScript",
  vue: "Vue 3 + TypeScript",
  svelte: "Svelte + TypeScript",
  angular: "Angular + TypeScript",
  vanilla: "Vanilla JavaScript",
};

export const FRAMEWORK_LANGUAGES: Record<FrameworkId, FrameworkLanguage> = {
  react: "typescript",
  vue: "typescript",
  svelte: "typescript",
  angular: "typescript",
  vanilla: "javascript",
};

// Error types for framework operations
export class FrameworkError extends Error {
  constructor(
    message: string,
    public frameworkId?: FrameworkId,
    public operation?: string
  ) {
    super(message);
    this.name = "FrameworkError";
  }
}

export class TemplateError extends Error {
  constructor(
    message: string,
    public templateId?: string,
    public frameworkId?: FrameworkId
  ) {
    super(message);
    this.name = "TemplateError";
  }
}

export class SyntaxHighlightError extends Error {
  constructor(
    message: string,
    public frameworkId?: FrameworkId,
    public code?: string
  ) {
    super(message);
    this.name = "SyntaxHighlightError";
  }
}
// Utility type helpers
export type FrameworkTemplateMap = Record<FrameworkId, FrameworkTemplate>;
export type FrameworkConfigMap = Record<FrameworkId, Framework>;
export type ComponentTemplateMap = Record<string, MultiFrameworkTemplate>;
