// React template processor

import { BaseTemplateProcessor } from "./baseTemplateProcessor";
import { FrameworkTemplate } from "../../types/framework";

export class ReactTemplateProcessor extends BaseTemplateProcessor {
  process(template: FrameworkTemplate, context?: any): string {
    let processed = template.code;

    if (context) {
      // Process template variables
      processed = this.processTemplate(processed, context);

      // Add component name if provided
      if (context.componentName) {
        processed = this.updateComponentName(processed, context.componentName);
      }
    }

    return processed;
  }

  validate(template: FrameworkTemplate): boolean {
    if (!template.code || typeof template.code !== "string") {
      return false;
    }

    // Check for basic React structure
    const hasReactImport =
      template.code.includes("import") &&
      (template.code.includes("react") || template.code.includes("React"));
    const hasComponent =
      template.code.includes("function") ||
      template.code.includes("const") ||
      template.code.includes("class");
    const hasJSX = template.code.includes("<") && template.code.includes(">");
    const hasExport = template.code.includes("export");

    return (
      this.validateSyntax(template.code) &&
      (hasReactImport || hasComponent) &&
      hasJSX &&
      hasExport
    );
  }

  getRequiredImports(template: FrameworkTemplate): string[] {
    const imports = this.extractImports(template.code);
    const requiredImports = ["react"];

    // Check for common React hooks and add them if not already imported
    const hooks = ["useState", "useEffect", "useCallback", "useMemo", "useRef"];
    hooks.forEach((hook) => {
      if (
        template.code.includes(hook) &&
        !imports.some((imp) => imp.includes(hook))
      ) {
        requiredImports.push(`react (${hook})`);
      }
    });

    // Check for React types
    if (
      template.language === "typescript" &&
      template.code.includes("React.")
    ) {
      requiredImports.push("@types/react");
    }

    return Array.from(new Set([...imports, ...requiredImports]));
  }

  private updateComponentName(code: string, newName: string): string {
    // Update function component name
    code = code.replace(
      /export\s+(?:default\s+)?function\s+\w+/g,
      `export default function ${newName}`
    );

    // Update const component name
    code = code.replace(
      /export\s+(?:default\s+)?const\s+\w+\s*=/g,
      `export default const ${newName} =`
    );

    // Update class component name
    code = code.replace(
      /export\s+(?:default\s+)?class\s+\w+/g,
      `export default class ${newName}`
    );

    return code;
  }

  // React-specific processing methods
  processProps(code: string, props: Record<string, any>): string {
    let processed = code;

    // Add prop types if TypeScript
    if (code.includes("interface") && Object.keys(props).length > 0) {
      const propTypes = Object.entries(props)
        .map(([key, value]) => `  ${key}: ${typeof value};`)
        .join("\n");

      processed = processed.replace(
        /interface\s+\w+Props\s*{[^}]*}/,
        `interface Props {\n${propTypes}\n}`
      );
    }

    return processed;
  }

  addHooks(code: string, hooks: string[]): string {
    const reactImportRegex = /import\s+(?:{[^}]+}|\w+)\s+from\s+['"]react['"]/;
    const match = code.match(reactImportRegex);

    if (match) {
      const currentImport = match[0];
      const newHooks = hooks.filter((hook) => !currentImport.includes(hook));

      if (newHooks.length > 0) {
        const updatedImport = currentImport.replace(
          /import\s+{([^}]+)}/,
          `import { $1, ${newHooks.join(", ")} }`
        );
        code = code.replace(currentImport, updatedImport);
      }
    }

    return code;
  }
}
