// Vanilla JavaScript syntax highlighter

import { BaseSyntaxHighlighter } from "./baseSyntaxHighlighter";

export class VanillaSyntaxHighlighter extends BaseSyntaxHighlighter {
  public supportedLanguages = ["javascript", "js"];

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
    "typeof",
    "instanceof",
    "in",
    "of",
    "delete",
    "void",
    "with",
    "debugger",
  ];

  private es6Keywords = [
    "async",
    "await",
    "yield",
    "Symbol",
    "Promise",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "Proxy",
    "Reflect",
    "ArrayBuffer",
    "DataView",
    "Int8Array",
    "Uint8Array",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt",
    "BigInt64Array",
    "BigUint64Array",
  ];

  private domMethods = [
    "document",
    "window",
    "console",
    "localStorage",
    "sessionStorage",
    "getElementById",
    "getElementsByClassName",
    "getElementsByTagName",
    "querySelector",
    "querySelectorAll",
    "createElement",
    "appendChild",
    "removeChild",
    "insertBefore",
    "replaceChild",
    "addEventListener",
    "removeEventListener",
    "dispatchEvent",
    "preventDefault",
    "stopPropagation",
    "setTimeout",
    "setInterval",
    "clearTimeout",
    "clearInterval",
    "fetch",
    "XMLHttpRequest",
    "FormData",
    "URLSearchParams",
    "URL",
    "Blob",
    "File",
    "FileReader",
    "Worker",
    "ServiceWorker",
    "WebSocket",
    "EventSource",
  ];

  private builtInObjects = [
    "Array",
    "Object",
    "String",
    "Number",
    "Boolean",
    "Date",
    "RegExp",
    "Error",
    "TypeError",
    "ReferenceError",
    "SyntaxError",
    "RangeError",
    "EvalError",
    "URIError",
    "JSON",
    "Math",
    "parseInt",
    "parseFloat",
    "isNaN",
    "isFinite",
    "encodeURI",
    "decodeURI",
    "encodeURIComponent",
    "decodeURIComponent",
    "eval",
  ];

  highlight(code: string): string {
    let highlighted = this.escapeHtml(code);

    // Highlight JavaScript keywords
    highlighted = this.highlightKeywords(highlighted, this.jsKeywords);

    // Highlight ES6+ keywords
    highlighted = this.highlightKeywords(highlighted, this.es6Keywords);

    // Highlight DOM methods and properties
    highlighted = this.highlightKeywords(highlighted, this.domMethods);

    // Highlight built-in objects
    highlighted = this.highlightKeywords(highlighted, this.builtInObjects);

    // Highlight strings
    highlighted = this.highlightStrings(highlighted);

    // Highlight comments
    highlighted = this.highlightComments(highlighted);

    // Highlight numbers
    highlighted = this.highlightNumbers(highlighted);

    // Highlight regular expressions
    highlighted = this.highlightRegex(highlighted);

    // Highlight arrow functions
    highlighted = this.highlightArrowFunctions(highlighted);

    // Highlight destructuring
    highlighted = this.highlightDestructuring(highlighted);

    return highlighted;
  }

  private highlightRegex(code: string): string {
    // Highlight regex literals /pattern/flags
    return code.replace(/\/(?![*/])([^/\n\\]|\\.)+\/[gimuy]*/g, (match) =>
      this.wrapWithSpan(match, "regex")
    );
  }

  private highlightArrowFunctions(code: string): string {
    // Highlight arrow function syntax
    return code.replace(/=>/g, (match) =>
      this.wrapWithSpan(match, "arrow-function")
    );
  }

  private highlightDestructuring(code: string): string {
    // This is a simplified approach - real destructuring is complex
    return code
      .replace(
        /const\s*{([^}]+)}/g,
        (match, content) =>
          `const {${this.wrapWithSpan(content, "destructuring")}}`
      )
      .replace(
        /const\s*\[([^\]]+)\]/g,
        (match, content) =>
          `const [${this.wrapWithSpan(content, "destructuring")}]`
      );
  }
}
