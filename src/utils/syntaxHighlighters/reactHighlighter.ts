// React/TypeScript syntax highlighter

import { BaseSyntaxHighlighter } from "./baseSyntaxHighlighter";

export class ReactSyntaxHighlighter extends BaseSyntaxHighlighter {
  public supportedLanguages = ["typescript", "tsx", "javascript", "jsx"];

  private reactKeywords = [
    "useState",
    "useEffect",
    "useCallback",
    "useMemo",
    "useRef",
    "useContext",
    "useReducer",
    "useLayoutEffect",
    "useImperativeHandle",
    "useDebugValue",
    "React",
    "Component",
    "PureComponent",
    "Fragment",
    "StrictMode",
    "Suspense",
    "lazy",
    "memo",
    "forwardRef",
    "createContext",
    "createRef",
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

    // Highlight JSX tags
    highlighted = this.highlightJSXTags(highlighted);

    // Highlight React hooks and components
    highlighted = this.highlightKeywords(highlighted, this.reactKeywords);

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

    // Highlight JSX props
    highlighted = this.highlightJSXProps(highlighted);

    return highlighted;
  }

  private highlightJSXTags(code: string): string {
    // Highlight opening and closing JSX tags
    return code
      .replace(
        /<\/?([A-Z][a-zA-Z0-9]*)/g,
        (match, tagName) =>
          `<${match.startsWith("</") ? "/" : ""}${this.wrapWithSpan(
            tagName,
            "jsx-component"
          )}`
      )
      .replace(
        /<\/?([a-z][a-zA-Z0-9-]*)/g,
        (match, tagName) =>
          `<${match.startsWith("</") ? "/" : ""}${this.wrapWithSpan(
            tagName,
            "jsx-element"
          )}`
      );
  }

  private highlightJSXProps(code: string): string {
    // Highlight JSX prop names
    return code.replace(
      /\s([a-zA-Z-]+)=/g,
      (match, propName) => ` ${this.wrapWithSpan(propName, "jsx-prop")}=`
    );
  }
}
