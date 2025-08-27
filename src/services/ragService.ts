import { HfInference } from "@huggingface/inference";
import { FrameworkId } from "../types/framework";

// RAG Document interface
interface RAGDocument {
  id: string;
  content: string;
  category: "component" | "framework" | "tailwind" | "pattern";
  tags: string[];
  framework?: FrameworkId;
  embedding?: number[] | null;
}

// RAG Search Result interface
interface RAGSearchResult {
  document: RAGDocument;
  similarity: number;
}

// RAG Context interface
export interface RAGContext {
  relevantExamples: string[];
  frameworkPatterns: string[];
  tailwindPatterns: string[];
  usedRAG: boolean;
}

// RAG Service class for retrieval augmented generation
export class RAGService {
  private hf: HfInference | null = null;
  private documents: RAGDocument[] = [];
  private initialized = false;
  private readonly model = "sentence-transformers/all-MiniLM-L6-v2";

  constructor() {
    // Initialize with HuggingFace token if available
    const token =
      (import.meta as any).env?.VITE_HUGGINGFACE_TOKEN ||
      (import.meta as any).env?.REACT_APP_HUGGINGFACE_TOKEN;

    if (token) {
      this.hf = new HfInference(token);
    } else {
      console.warn(
        "HuggingFace token not found. RAG will use fallback similarity."
      );
    }
  }

  // Initialize the RAG service with embedded documentation
  async initialize(): Promise<void> {
    if (this.initialized) return;

    // Load component documentation
    this.loadComponentDocuments();
    this.loadFrameworkPatterns();
    this.loadTailwindPatterns();

    // Generate embeddings for all documents
    if (this.hf) {
      try {
        await this.generateEmbeddings();
        console.log("✅ RAG Service initialized with HuggingFace embeddings");
      } catch (error) {
        console.warn(
          "⚠️ HuggingFace embeddings failed, using fallback similarity:",
          error
        );
      }
    } else {
      console.log("📝 RAG Service initialized with fallback similarity");
    }

    this.initialized = true;
  }

  // Search for relevant context based on user description and framework
  async search(
    query: string,
    framework: FrameworkId,
    limit = 5
  ): Promise<RAGSearchResult[]> {
    if (!this.initialized) {
      await this.initialize();
    }

    const queryEmbedding = await this.getEmbedding(query);
    const results: RAGSearchResult[] = [];

    for (const doc of this.documents) {
      // Skip framework-specific docs that don't match
      if (doc.framework && doc.framework !== framework) continue;

      let similarity = 0;

      if (queryEmbedding && doc.embedding) {
        // Use cosine similarity with embeddings
        similarity = this.cosineSimilarity(queryEmbedding, doc.embedding);
      } else {
        // Fallback to simple keyword matching
        similarity = this.keywordSimilarity(query, doc.content, doc.tags);
      }

      if (similarity > 0.1) {
        results.push({ document: doc, similarity });
      }
    }

    // Sort by similarity and return top results
    return results.sort((a, b) => b.similarity - a.similarity).slice(0, limit);
  }

  // Get relevant context for AI generation
  async getContext(
    description: string,
    framework: FrameworkId
  ): Promise<RAGContext> {
    const searchResults = await this.search(description, framework);

    const context: RAGContext = {
      relevantExamples: [],
      frameworkPatterns: [],
      tailwindPatterns: [],
      usedRAG: searchResults.length > 0,
    };

    for (const result of searchResults) {
      const { document } = result;

      switch (document.category) {
        case "component":
          context.relevantExamples.push(document.content);
          break;
        case "framework":
          context.frameworkPatterns.push(document.content);
          break;
        case "tailwind":
          context.tailwindPatterns.push(document.content);
          break;
        case "pattern":
          if (document.framework === framework) {
            context.frameworkPatterns.push(document.content);
          } else {
            context.relevantExamples.push(document.content);
          }
          break;
      }
    }

    return context;
  }

  // Load component documentation
  private loadComponentDocuments(): void {
    const components: RAGDocument[] = [
      {
        id: "button-magnetic",
        content: `Magnetic Button: Interactive button that follows cursor movement
        - Uses useRef and useEffect for DOM manipulation
        - Calculates mouse position relative to button center
        - Applies transform with deltaX/deltaY for smooth following
        - Resets position on mouse leave
        - Uses transition-all duration-300 for smooth animations`,
        category: "component",
        tags: ["button", "interactive", "magnetic", "cursor", "hover"],
      },
      {
        id: "card-glowing",
        content: `Glowing Card: Card with mouse-tracking glow effect
        - Uses CSS custom properties (--mouse-x, --mouse-y)
        - Radial gradient that follows mouse position
        - Layered background effects with opacity transitions
        - Relative positioning with z-index for proper layering`,
        category: "component",
        tags: ["card", "glow", "hover", "mouse", "gradient"],
      },
      {
        id: "input-minimal",
        content: `Minimal Input: Clean input field with focus animations
        - Controlled component with useState
        - Border-bottom styling instead of full border
        - Animated underline that expands on focus
        - Placeholder text with proper contrast`,
        category: "component",
        tags: ["input", "form", "minimal", "animation", "focus"],
      },
      {
        id: "modal-overlay",
        content: `Modal Component: Accessible modal dialog
        - Portal rendering outside main DOM tree
        - Backdrop click to close functionality
        - Focus trap for accessibility
        - Escape key handling
        - Body scroll lock when open
        - Animation transitions for smooth appearance`,
        category: "component",
        tags: ["modal", "dialog", "overlay", "accessibility", "portal"],
      },
      {
        id: "navbar-responsive",
        content: `Navigation Bar: Responsive navigation component
        - Mobile hamburger menu with smooth transitions
        - Logo and brand positioning
        - Active link highlighting
        - Dropdown menu functionality
        - Sticky/fixed positioning with scroll detection`,
        category: "component",
        tags: ["navbar", "navigation", "responsive", "hamburger", "menu"],
      },
      {
        id: "button-primary",
        content: `Primary Button: Standard clickable button component
        - Solid background with hover effects
        - Loading state with spinner animation
        - Disabled state styling
        - Size variants (sm, md, lg)
        - Color variants (primary, secondary, danger)
        - Ripple effect on click`,
        category: "component",
        tags: ["button", "primary", "loading", "variants", "interactive"],
      },
      {
        id: "form-input",
        content: `Form Input: Standard form input field
        - Label positioning above/inline/floating
        - Error state with validation messages
        - Helper text below input
        - Icon support (left/right)
        - Different types: text, email, password, number
        - Controlled component pattern`,
        category: "component",
        tags: ["input", "form", "validation", "label", "controlled"],
      },
      {
        id: "card-basic",
        content: `Card Component: Container for content grouping
        - Rounded corners with shadow
        - Header, body, footer sections
        - Image support with aspect ratio control
        - Hover animations and effects
        - Clickable variant for navigation
        - Padding and spacing variants`,
        category: "component",
        tags: ["card", "container", "content", "shadow", "hover"],
      },
      {
        id: "toggle-switch",
        content: `Toggle Switch: Binary state control component
        - Smooth sliding animation
        - Keyboard accessibility (Space/Enter)
        - Different sizes and colors
        - Disabled state styling
        - Label integration
        - Value controlled by parent component`,
        category: "component",
        tags: ["toggle", "switch", "binary", "animation", "accessibility"],
      },
      {
        id: "dropdown-menu",
        content: `Dropdown Menu: Expandable menu component
        - Click/hover trigger options
        - Positioning relative to trigger
        - Click outside to close
        - Keyboard navigation (Arrow keys, Esc)
        - Multiple levels/submenus
        - Custom trigger and content slots`,
        category: "component",
        tags: ["dropdown", "menu", "expandable", "positioning", "keyboard"],
      },
      {
        id: "alert-notification",
        content: `Alert/Notification: Message display component
        - Success, warning, error, info variants
        - Dismissible with close button
        - Icon support for each variant
        - Auto-dismiss with timer
        - Toast positioning (top/bottom/corner)
        - Slide/fade in/out animations`,
        category: "component",
        tags: ["alert", "notification", "toast", "message", "variants"],
      },
      {
        id: "loading-spinner",
        content: `Loading Spinner: Activity indicator component
        - Multiple animation styles (spin, pulse, dots)
        - Size and color customization
        - Overlay mode for full-screen loading
        - Text label support
        - Accessibility with proper aria-labels
        - CSS keyframes for smooth animations`,
        category: "component",
        tags: ["loading", "spinner", "activity", "animation", "indicator"],
      },

      {
        id: "header-hero",
        content: `Header/Hero Section: Landing page header
        - Large typography with gradient text
        - Call-to-action buttons
        - Background images or gradients
        - Responsive text sizing
        - Animation on scroll/load`,
        category: "component",
        tags: ["header", "hero", "landing", "typography", "cta"],
      },
    ];

    this.documents.push(...components);
  }

  // Load framework-specific patterns
  private loadFrameworkPatterns(): void {
    const patterns: RAGDocument[] = [
      {
        id: "react-hooks",
        content: `React Hooks Patterns:
        - useState for component state: const [state, setState] = useState(initialValue)
        - useEffect for side effects: useEffect(() => { /* effect */ }, [dependencies])
        - useRef for DOM references: const ref = useRef<HTMLElement>(null)
        - Custom hooks for reusable logic
        - Cleanup functions in useEffect return
        - Dependency arrays for optimization`,
        category: "framework",
        framework: "react",
        tags: ["hooks", "state", "effects", "refs"],
      },
      {
        id: "vue-composition",
        content: `Vue 3 Composition API Patterns:
        - ref() for reactive state: const count = ref(0)
        - onMounted() for lifecycle: onMounted(() => { /* setup */ })
        - computed() for derived state: const doubled = computed(() => count.value * 2)
        - Template refs: const el = ref()
        - Event handling: @click="handler"
        - v-model for two-way binding`,
        category: "framework",
        framework: "vue",
        tags: ["composition-api", "reactivity", "lifecycle", "templates"],
      },
      {
        id: "svelte-syntax",
        content: `Svelte Patterns:
        - Reactive declarations: $: doubled = count * 2
        - Event handling: on:click={handler}
        - Binding: bind:value={name}
        - onMount for lifecycle: onMount(() => { /* setup */ })
        - Stores for global state: writable(), readable()
        - Transitions: transition:fade`,
        category: "framework",
        framework: "svelte",
        tags: ["reactivity", "binding", "lifecycle", "stores"],
      },
      {
        id: "angular-component",
        content: `Angular Component Patterns:
        - @Component decorator with template and styles
        - Property binding: [property]="value"
        - Event binding: (click)="handler($event)"
        - ngOnInit for initialization
        - Dependency injection in constructor
        - Template reference variables: #ref`,
        category: "framework",
        framework: "angular",
        tags: ["components", "decorators", "binding", "lifecycle"],
      },
      {
        id: "vanilla-js",
        content: `Vanilla JavaScript Patterns:
        - Class-based components: class Component { constructor() {} }
        - Event listeners: element.addEventListener('event', handler)
        - DOM manipulation: document.createElement, appendChild
        - Modern ES6+ features: arrow functions, destructuring
        - Template literals for HTML strings
        - Module pattern for organization`,
        category: "framework",
        framework: "vanilla",
        tags: ["classes", "dom", "events", "es6", "modules"],
      },
    ];

    this.documents.push(...patterns);
  }

  // Load Tailwind CSS patterns
  private loadTailwindPatterns(): void {
    const tailwindPatterns: RAGDocument[] = [
      {
        id: "responsive-design",
        content: `Tailwind Responsive Design:
        - Mobile first: base styles, then sm:, md:, lg:, xl: breakpoints
        - Grid layouts: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        - Flexbox: flex flex-col md:flex-row items-center justify-between
        - Typography: text-sm md:text-base lg:text-lg
        - Spacing: p-4 md:p-6 lg:p-8`,
        category: "tailwind",
        tags: ["responsive", "breakpoints", "grid", "flex", "spacing"],
      },
      {
        id: "colors-gradients",
        content: `Tailwind Colors and Gradients:
        - Solid colors: bg-blue-500, text-gray-900
        - Gradients: bg-gradient-to-r from-blue-500 to-purple-600
        - Opacity: bg-black/20, text-white/80
        - Hover states: hover:bg-blue-600, hover:text-white
        - Dark mode: dark:bg-gray-900, dark:text-white`,
        category: "tailwind",
        tags: ["colors", "gradients", "opacity", "hover", "dark-mode"],
      },
      {
        id: "animations-transitions",
        content: `Tailwind Animations and Transitions:
        - Transitions: transition-all duration-300 ease-in-out
        - Transforms: transform hover:scale-105, rotate-45
        - Animations: animate-spin, animate-bounce, animate-pulse
        - Custom animations: animate-[wiggle_1s_ease-in-out_infinite]
        - Motion: motion-safe:animate-bounce for accessibility`,
        category: "tailwind",
        tags: ["animations", "transitions", "transforms", "motion"],
      },
      {
        id: "layout-positioning",
        content: `Tailwind Layout and Positioning:
        - Flexbox: flex items-center justify-center, flex-col
        - Grid: grid grid-cols-12, col-span-4
        - Positioning: relative, absolute, fixed, sticky
        - Z-index: z-10, z-50 for layering
        - Overflow: overflow-hidden, overflow-y-auto`,
        category: "tailwind",
        tags: ["layout", "flex", "grid", "positioning", "z-index"],
      },
    ];

    this.documents.push(...tailwindPatterns);
  }

  // Generate embeddings for all documents
  private async generateEmbeddings(): Promise<void> {
    if (!this.hf) return;

    for (const doc of this.documents) {
      try {
        doc.embedding = await this.getEmbedding(doc.content);
        // Small delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error) {
        console.warn(
          `Failed to generate embedding for document ${doc.id}:`,
          error
        );
      }
    }
  }

  // Get embedding for text using HuggingFace
  private async getEmbedding(text: string): Promise<number[] | null> {
    if (!this.hf) {
      console.log("📝 HuggingFace not available, using keyword similarity");
      return null;
    }

    try {
      const result = await this.hf.featureExtraction({
        model: this.model,
        inputs: text,
      });

      // Handle different response formats
      if (Array.isArray(result)) {
        return result as number[];
      }

      return null;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.warn(
        "⚠️ Embedding generation failed, falling back to keyword similarity:",
        errorMessage
      );
      // Disable HuggingFace after first failure to avoid repeated errors
      this.hf = null;
      return null;
    }
  }

  // Calculate cosine similarity between two vectors
  private cosineSimilarity(a: number[], b: number[]): number {
    if (a.length !== b.length) return 0;

    let dotProduct = 0;
    let normA = 0;
    let normB = 0;

    for (let i = 0; i < a.length; i++) {
      dotProduct += a[i] * b[i];
      normA += a[i] * a[i];
      normB += b[i] * b[i];
    }

    const magnitude = Math.sqrt(normA) * Math.sqrt(normB);
    return magnitude === 0 ? 0 : dotProduct / magnitude;
  }

  // Enhanced keyword similarity when embeddings aren't available
  private keywordSimilarity(
    query: string,
    content: string,
    tags: string[]
  ): number {
    const queryWords = query
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length > 2);
    const contentWords = content.toLowerCase().split(/\s+/);
    const allWords = [...contentWords, ...tags.map((tag) => tag.toLowerCase())];

    let totalScore = 0;
    let matchCount = 0;

    for (const queryWord of queryWords) {
      let bestMatch = 0;

      for (const targetWord of allWords) {
        // Exact match gets highest score
        if (targetWord === queryWord) {
          bestMatch = Math.max(bestMatch, 1.0);
        }
        // Partial matches
        else if (
          targetWord.includes(queryWord) ||
          queryWord.includes(targetWord)
        ) {
          bestMatch = Math.max(bestMatch, 0.7);
        }
        // Common component keywords get higher weight
        else if (
          this.isComponentKeyword(queryWord) &&
          this.isComponentKeyword(targetWord)
        ) {
          bestMatch = Math.max(bestMatch, 0.5);
        }
      }

      if (bestMatch > 0) {
        totalScore += bestMatch;
        matchCount++;
      }
    }

    // Weight by both coverage and match quality
    const coverage = matchCount / Math.max(queryWords.length, 1);
    const quality = totalScore / Math.max(matchCount, 1);

    return coverage * quality;
  }

  // Check if a word is a common component-related keyword
  private isComponentKeyword(word: string): boolean {
    const componentKeywords = [
      "button",
      "card",
      "input",
      "form",
      "modal",
      "dialog",
      "menu",
      "navbar",
      "navigation",
      "header",
      "footer",
      "sidebar",
      "toggle",
      "switch",
      "spinner",
      "loading",
      "dropdown",
      "tab",
      "accordion",
      "carousel",
      "slider",
      "tooltip",
      "popover",
      "badge",
      "alert",
      "hover",
      "click",
      "animation",
      "responsive",
      "mobile",
      "desktop",
    ];

    return componentKeywords.includes(word.toLowerCase());
  }
}

// Export singleton instance
export const ragService = new RAGService();
