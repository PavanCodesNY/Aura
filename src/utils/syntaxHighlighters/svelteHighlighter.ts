// Svelte syntax highlighter

import { BaseSyntaxHighlighter } from "./baseSyntaxHighlighter";

export class SvelteSyntaxHighlighter extends BaseSyntaxHighlighter {
  public supportedLanguages = ["svelte", "typescript", "javascript"];

  private svelteKeywords = [
    "onMount",
    "onDestroy",
    "beforeUpdate",
    "afterUpdate",
    "tick",
    "createEventDispatcher",
    "getContext",
    "setContext",
    "hasContext",
    "getAllContexts",
    "SvelteComponent",
    "SvelteComponentTyped",
  ];

  private svelteDirectives = [
    "bind:",
    "on:",
    "use:",
    "transition:",
    "in:",
    "out:",
    "animate:",
    "class:",
    "style:",
  ];

  private svelteBlocks = [
    "#if",
    "#each",
    "#await",
    "#key",
    ":else",
    ":then",
    ":catch",
    "/if",
    "/each",
    "/await",
    "/key",
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

    // Highlight Svelte reactive statements
    highlighted = this.highlightReactiveStatements(highlighted);

    // Highlight Svelte blocks
    highlighted = this.highlightSvelteBlocks(highlighted);

    // Highlight Svelte directives
    highlighted = this.highlightSvelteDirectives(highlighted);

    // Highlight Svelte keywords
    highlighted = this.highlightKeywords(highlighted, this.svelteKeywords);

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

    // Highlight script and style tags
    highlighted = this.highlightScriptStyleTags(highlighted);

    return highlighted;
  }

  private highlightReactiveStatements(code: string): string {
    // Highlight $: reactive statements
    return code.replace(/^\s*\$:/gm, (match) =>
      this.wrapWithSpan(match.trim(), "svelte-reactive")
    );
  }

  private highlightSvelteBlocks(code: string): string {
    let highlighted = code;

    this.svelteBlocks.forEach((block) => {
      const regex = new RegExp(`{${block}`, "g");
      highlighted = highlighted.replace(
        regex,
        `{${this.wrapWithSpan(block, "svelte-block")}`
      );
    });

    return highlighted;
  }

  private highlightSvelteDirectives(code: string): string {
    let highlighted = code;

    this.svelteDirectives.forEach((directive) => {
      const regex = new RegExp(`\\b${directive}([a-zA-Z0-9_-]+)`, "g");
      highlighted = highlighted.replace(
        regex,
        (match, name) =>
          `${this.wrapWithSpan(directive, "svelte-directive")}${name}`
      );
    });

    // Highlight special Svelte attributes
    highlighted = highlighted
      .replace(/\\bslot\\b/g, this.wrapWithSpan("slot", "svelte-directive"))
      .replace(
        /\\blet:([a-zA-Z0-9_-]+)/g,
        (match, name) =>
          `${this.wrapWithSpan("let:", "svelte-directive")}${name}`
      );

    return highlighted;
  }

  private highlightScriptStyleTags(code: string): string {
    return code
      .replace(
        /<(script|style)([^>]*)>/g,
        (match, tag, attrs) =>
          `<${this.wrapWithSpan(tag, "svelte-tag")}${attrs}>`
      )
      .replace(
        /<\/(script|style)>/g,
        (match, tag) => `</${this.wrapWithSpan(tag, "svelte-tag")}>`
      );
  }
}
