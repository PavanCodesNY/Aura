import { Framework, FrameworkId } from "../types/framework";
import { ReactSyntaxHighlighter } from "../utils/syntaxHighlighters/reactHighlighter";
import { VueSyntaxHighlighter } from "../utils/syntaxHighlighters/vueHighlighter";
import { SvelteSyntaxHighlighter } from "../utils/syntaxHighlighters/svelteHighlighter";
import { AngularSyntaxHighlighter } from "../utils/syntaxHighlighters/angularHighlighter";
import { VanillaSyntaxHighlighter } from "../utils/syntaxHighlighters/vanillaHighlighter";
import { ReactTemplateProcessor } from "../services/templateProcessors/reactProcessor";
import { VueTemplateProcessor } from "../services/templateProcessors/vueProcessor";
import { SvelteTemplateProcessor } from "../services/templateProcessors/svelteProcessor";
import { AngularTemplateProcessor } from "../services/templateProcessors/angularProcessor";
import { VanillaTemplateProcessor } from "../services/templateProcessors/vanillaProcessor";

// Framework configurations
export const frameworks: Record<FrameworkId, Framework> = {
  react: {
    id: "react",
    name: "React",
    displayName: "React + TypeScript",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95z"/>
    </svg>`,
    extension: "tsx",
    language: "typescript",
    version: "18.x",
    description:
      "A JavaScript library for building user interfaces with TypeScript support",
    color: "#61DAFB",
    highlighter: new ReactSyntaxHighlighter(),
    templateProcessor: new ReactTemplateProcessor(),
  },

  vue: {
    id: "vue",
    name: "Vue",
    displayName: "Vue 3 + TypeScript",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M2,3L12,22L22,3H18.5L12,14.5L5.5,3H2Z" />
    </svg>`,
    extension: "vue",
    language: "typescript",
    version: "3.x",
    description:
      "The Progressive JavaScript Framework with Composition API and TypeScript",
    color: "#4FC08D",
    highlighter: new VueSyntaxHighlighter(),
    templateProcessor: new VueTemplateProcessor(),
  },

  svelte: {
    id: "svelte",
    name: "Svelte",
    displayName: "Svelte + TypeScript",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.354 21.125a2.847 2.847 0 0 0 4.539-.827 2.848 2.848 0 0 0-.981-3.896l-1.077-.781a.282.282 0 0 1-.095-.37.282.282 0 0 1 .37-.095l1.077.781a3.413 3.413 0 0 1 1.176 4.666 3.413 3.413 0 0 1-5.447.992 3.413 3.413 0 0 1-.992-5.447l3.237-4.462a.282.282 0 0 1 .465.325l-3.237 4.462a2.847 2.847 0 0 0 .827 4.539z"/>
      <path d="M13.646 2.875a2.847 2.847 0 0 0-4.539.827 2.848 2.848 0 0 0 .981 3.896l1.077.781a.282.282 0 0 1 .095.37.282.282 0 0 1-.37.095l-1.077-.781a3.413 3.413 0 0 1-1.176-4.666 3.413 3.413 0 0 1 5.447-.992 3.413 3.413 0 0 1 .992 5.447l-3.237 4.462a.282.282 0 0 1-.465-.325l3.237-4.462a2.847 2.847 0 0 0-.827-4.539z"/>
    </svg>`,
    extension: "svelte",
    language: "typescript",
    version: "4.x",
    description:
      "Cybernetically enhanced web apps with compile-time optimizations",
    color: "#FF3E00",
    highlighter: new SvelteSyntaxHighlighter(),
    templateProcessor: new SvelteTemplateProcessor(),
  },

  angular: {
    id: "angular",
    name: "Angular",
    displayName: "Angular + TypeScript",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16.74 9-3.45 9-9V7l-10-5z"/>
      <path d="M12 4.5L7.5 16h2.25L11 13h2l1.25 3H16.5L12 4.5z" fill="white"/>
      <path d="M10.5 10.5L12 7.5l1.5 3h-3z" fill="white"/>
    </svg>`,
    extension: "ts",
    language: "typescript",
    version: "17.x",
    description: "Platform for building mobile and desktop web applications",
    color: "#DD0031",
    highlighter: new AngularSyntaxHighlighter(),
    templateProcessor: new AngularTemplateProcessor(),
  },

  vanilla: {
    id: "vanilla",
    name: "Vanilla",
    displayName: "Vanilla JavaScript",
    icon: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z"/>
    </svg>`,
    extension: "js",
    language: "javascript",
    version: "ES2022",
    description:
      "Pure JavaScript with modern ES6+ features and DOM manipulation",
    color: "#F7DF1E",
    highlighter: new VanillaSyntaxHighlighter(),
    templateProcessor: new VanillaTemplateProcessor(),
  },
};

// Default framework (React)
export const DEFAULT_FRAMEWORK: Framework = frameworks.react;

// Framework metadata for UI display
export const frameworkMetadata = {
  react: {
    color: "#61DAFB",
    bgColor: "#282C34",
    popularity: 95,
    learningCurve: "Medium",
    ecosystem: "Extensive",
  },
  vue: {
    color: "#4FC08D",
    bgColor: "#2C3E50",
    popularity: 85,
    learningCurve: "Easy",
    ecosystem: "Growing",
  },
  svelte: {
    color: "#FF3E00",
    bgColor: "#F03E2F",
    popularity: 75,
    learningCurve: "Easy",
    ecosystem: "Emerging",
  },
  angular: {
    color: "#DD0031",
    bgColor: "#C3002F",
    popularity: 80,
    learningCurve: "Hard",
    ecosystem: "Enterprise",
  },
  vanilla: {
    color: "#F7DF1E",
    bgColor: "#323330",
    popularity: 100,
    learningCurve: "Medium",
    ecosystem: "Native",
  },
};

// Framework keyboard shortcuts mapping
export const frameworkShortcuts: Record<string, FrameworkId> = {
  "1": "react",
  "2": "vue",
  "3": "svelte",
  "4": "angular",
  "5": "vanilla",
};

// Get framework by ID with error handling
export function getFramework(id: FrameworkId): Framework {
  const framework = frameworks[id];
  if (!framework) {
    throw new Error(`Framework with id "${id}" not found`);
  }
  return framework;
}

// Get all available frameworks as array
export function getAllFrameworks(): Framework[] {
  return Object.values(frameworks);
}

// Get framework by keyboard shortcut
export function getFrameworkByShortcut(key: string): Framework | null {
  const frameworkId = frameworkShortcuts[key];
  return frameworkId ? frameworks[frameworkId] : null;
}

// Validate framework ID
export function isValidFrameworkId(id: string): id is FrameworkId {
  return id in frameworks;
}

// Get framework display order for UI
export const frameworkDisplayOrder: FrameworkId[] = [
  "react",
  "vue",
  "svelte",
  "angular",
  "vanilla",
];
