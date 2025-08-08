// Base syntax highlighter with common functionality

import { SyntaxHighlighter, SyntaxTheme } from "../../types/framework";

export abstract class BaseSyntaxHighlighter implements SyntaxHighlighter {
  public theme: SyntaxTheme = "dark";
  public abstract supportedLanguages: string[];

  constructor(theme: SyntaxTheme = "dark") {
    this.theme = theme;
  }

  abstract highlight(code: string): string;

  // Common utility methods
  protected escapeHtml(text: string): string {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  protected wrapWithSpan(content: string, className: string): string {
    return `<span class="${className}">${content}</span>`;
  }

  protected highlightKeywords(code: string, keywords: string[]): string {
    let highlighted = code;
    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "g");
      highlighted = highlighted.replace(
        regex,
        this.wrapWithSpan(keyword, "keyword")
      );
    });
    return highlighted;
  }

  protected highlightStrings(code: string): string {
    // Highlight single and double quoted strings
    return code
      .replace(/"([^"\\]|\\.)*"/g, (match) =>
        this.wrapWithSpan(match, "string")
      )
      .replace(/'([^'\\]|\\.)*'/g, (match) =>
        this.wrapWithSpan(match, "string")
      )
      .replace(/`([^`\\]|\\.)*`/g, (match) =>
        this.wrapWithSpan(match, "template-string")
      );
  }

  protected highlightComments(code: string): string {
    return code
      .replace(/\/\/.*$/gm, (match) => this.wrapWithSpan(match, "comment"))
      .replace(/\/\*[\s\S]*?\*\//g, (match) =>
        this.wrapWithSpan(match, "comment")
      );
  }

  protected highlightNumbers(code: string): string {
    return code.replace(/\b\d+(\.\d+)?\b/g, (match) =>
      this.wrapWithSpan(match, "number")
    );
  }
}
