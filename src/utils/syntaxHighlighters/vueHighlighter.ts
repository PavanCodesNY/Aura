// Vue 3 syntax highlighter

import { BaseSyntaxHighlighter } from "./baseSyntaxHighlighter";

export class VueSyntaxHighlighter extends BaseSyntaxHighlighter {
  public supportedLanguages = ["vue", "typescript", "javascript"];

  private vueKeywords = [
    "ref",
    "reactive",
    "computed",
    "watch",
    "watchEffect",
    "onMounted",
    "onUnmounted",
    "onUpdated",
    "onBeforeMount",
    "onBeforeUnmount",
    "onBeforeUpdate",
    "defineComponent",
    "defineProps",
    "defineEmits",
    "defineExpose",
    "withDefaults",
    "toRef",
    "toRefs",
    "unref",
    "isRef",
  ];

  private vueDirectives = [
    "v-if",
    "v-else",
    "v-else-if",
    "v-for",
    "v-show",
    "v-bind",
    "v-on",
    "v-model",
    "v-slot",
    "v-pre",
    "v-once",
    "v-memo",
    "v-cloak",
    "v-html",
    "v-text",
  ];

  private typescriptKeywords = [
    "interface",
    "type",
    "enum",
    "namespace",
    "module",
    "declare",
    "abstract",
    "implements",
    "extends",
    "public",
    "private",
    "protected",
    "readonly",
    "static",
    "async",
    "await",
    "keyof",
    "typeof",
    "as",
  ];

  private jsKeywords = [
    "const",
    "let",
    "var",
    "function",
    "return",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "default",
    "break",
    "continue",
    "try",
    "catch",
    "finally",
    "throw",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "import",
    "export",
    "from",
    "default",
    "null",
    "undefined",
    "true",
    "false",
  ];

  highlight(code: string): string {
    let highlighted = this.escapeHtml(code);

    // Check if this is a Vue SFC (Single File Component)
    if (this.isVueSFC(code)) {
      highlighted = this.highlightVueSFC(highlighted);
    } else {
      // Regular Vue script highlighting
      highlighted = this.highlightVueScript(highlighted);
    }

    return highlighted;
  }

  private isVueSFC(code: string): boolean {
    return (
      code.includes("<template>") ||
      code.includes("<script>") ||
      code.includes("<style>")
    );
  }

  private highlightVueSFC(code: string): string {
    let highlighted = code;

    // Highlight SFC blocks
    highlighted = highlighted
      .replace(
        /<(template|script|style)([^>]*)>/g,
        (match, tag, attrs) =>
          `<${this.wrapWithSpan(tag, "vue-sfc-tag")}${attrs}>`
      )
      .replace(
        /<\/(template|script|style)>/g,
        (match, tag) => `</${this.wrapWithSpan(tag, "vue-sfc-tag")}>`
      );

    // Highlight Vue directives in template
    highlighted = this.highlightVueDirectives(highlighted);

    // Highlight Vue composition API
    highlighted = this.highlightKeywords(highlighted, this.vueKeywords);

    // Highlight TypeScript keywords
    highlighted = this.highlightKeywords(highlighted, this.typescriptKeywords);

    // Highlight JavaScript keywords
    highlighted = this.highlightKeywords(highlighted, this.jsKeywords);

    // Highlight strings
    highlighted = this.highlightStrings(highlighted);

    // Highlight comments
    highlighted = this.highlightComments(highlighted);

    // Highlight numbers
    highlighted = this.highlightNumbers(highlighted);

    return highlighted;
  }

  private highlightVueScript(code: string): string {
    let highlighted = code;

    // Highlight Vue composition API
    highlighted = this.highlightKeywords(highlighted, this.vueKeywords);

    // Highlight TypeScript keywords
    highlighted = this.highlightKeywords(highlighted, this.typescriptKeywords);

    // Highlight JavaScript keywords
    highlighted = this.highlightKeywords(highlighted, this.jsKeywords);

    // Highlight strings
    highlighted = this.highlightStrings(highlighted);

    // Highlight comments
    highlighted = this.highlightComments(highlighted);

    // Highlight numbers
    highlighted = this.highlightNumbers(highlighted);

    return highlighted;
  }

  private highlightVueDirectives(code: string): string {
    let highlighted = code;

    this.vueDirectives.forEach((directive) => {
      const regex = new RegExp(`\\b${directive}\\b`, "g");
      highlighted = highlighted.replace(
        regex,
        this.wrapWithSpan(directive, "vue-directive")
      );
    });

    // Highlight shorthand directives
    highlighted = highlighted
      .replace(
        /:([a-zA-Z-]+)/g,
        (match, prop) => `:${this.wrapWithSpan(prop, "vue-directive")}`
      )
      .replace(
        /@([a-zA-Z-]+)/g,
        (match, event) => `@${this.wrapWithSpan(event, "vue-directive")}`
      );

    return highlighted;
  }
}
