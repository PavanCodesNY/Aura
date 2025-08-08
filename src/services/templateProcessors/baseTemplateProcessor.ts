// Base template processor with common functionality

import { TemplateProcessor, FrameworkTemplate } from "../../types/framework";

export abstract class BaseTemplateProcessor implements TemplateProcessor {
  abstract process(template: FrameworkTemplate, context?: any): string;
  abstract validate(template: FrameworkTemplate): boolean;
  abstract getRequiredImports(template: FrameworkTemplate): string[];

  // Common utility methods
  protected extractImports(code: string): string[] {
    const imports: string[] = [];
    const importRegex =
      /import\s+(?:{[^}]+}|\*\s+as\s+\w+|\w+)?\s*from\s+['"]([^'"]+)['"]/g;
    let match;

    while ((match = importRegex.exec(code)) !== null) {
      imports.push(match[1]);
    }

    return imports;
  }

  protected extractExports(code: string): string[] {
    const exports: string[] = [];
    const exportRegex =
      /export\s+(?:default\s+)?(?:const|let|var|function|class)\s+(\w+)/g;
    let match;

    while ((match = exportRegex.exec(code)) !== null) {
      exports.push(match[1]);
    }

    return exports;
  }

  protected validateSyntax(code: string): boolean {
    try {
      // Basic syntax validation - check for balanced brackets
      const brackets = { "(": 0, "[": 0, "{": 0 };
      const closingBrackets = { ")": "(", "]": "[", "}": "{" };

      for (const char of code) {
        if (char in brackets) {
          brackets[char as keyof typeof brackets]++;
        } else if (char in closingBrackets) {
          const opening = closingBrackets[char as keyof typeof closingBrackets];
          brackets[opening as keyof typeof brackets]--;
          if (brackets[opening as keyof typeof brackets] < 0) {
            return false;
          }
        }
      }

      return Object.values(brackets).every((count) => count === 0);
    } catch {
      return false;
    }
  }

  protected processTemplate(
    template: string,
    variables: Record<string, any>
  ): string {
    let processed = template;

    Object.entries(variables).forEach(([key, value]) => {
      const regex = new RegExp(`{{\\s*${key}\\s*}}`, "g");
      processed = processed.replace(regex, String(value));
    });

    return processed;
  }

  protected minifyCode(code: string): string {
    return code
      .replace(/\/\*[\s\S]*?\*\//g, "") // Remove block comments
      .replace(/\/\/.*$/gm, "") // Remove line comments
      .replace(/\s+/g, " ") // Collapse whitespace
      .trim();
  }

  protected formatCode(code: string): string {
    // Basic code formatting - this is simplified
    let formatted = code;
    let indentLevel = 0;
    const lines = formatted.split("\n");

    const formattedLines = lines.map((line) => {
      const trimmed = line.trim();
      if (!trimmed) return "";

      if (trimmed.includes("}")) indentLevel--;
      const indented = "  ".repeat(Math.max(0, indentLevel)) + trimmed;
      if (trimmed.includes("{")) indentLevel++;

      return indented;
    });

    return formattedLines.join("\n");
  }
}
