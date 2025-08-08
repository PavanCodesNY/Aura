// Vue template processor

import { BaseTemplateProcessor } from "./baseTemplateProcessor";
import { FrameworkTemplate } from "../../types/framework";

export class VueTemplateProcessor extends BaseTemplateProcessor {
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

    // Check for Vue SFC structure
    const hasTemplate = template.code.includes("<template>");
    const hasScript = template.code.includes("<script");
    const hasVueStructure = hasTemplate && hasScript;

    // Or check for Vue composition API
    const hasVueImports =
      template.code.includes("vue") ||
      template.code.includes("defineComponent");

    return (
      this.validateSyntax(template.code) && (hasVueStructure || hasVueImports)
    );
  }

  getRequiredImports(template: FrameworkTemplate): string[] {
    const imports = this.extractImports(template.code);
    const requiredImports = ["vue"];

    // Check for Composition API functions
    const compositionAPI = [
      "ref",
      "reactive",
      "computed",
      "watch",
      "watchEffect",
      "onMounted",
      "onUnmounted",
      "onUpdated",
    ];

    compositionAPI.forEach((api) => {
      if (
        template.code.includes(api) &&
        !imports.some((imp) => imp.includes(api))
      ) {
        requiredImports.push(`vue (${api})`);
      }
    });

    return Array.from(new Set([...imports, ...requiredImports]));
  }

  private updateComponentName(code: string, newName: string): string {
    // Update component name in defineComponent
    code = code.replace(/name:\s*['"][^'"]*['"]/g, `name: '${newName}'`);

    // Update export default name
    code = code.replace(
      /export\s+default\s+defineComponent\(/g,
      `export default defineComponent(`
    );

    return code;
  }

  // Vue-specific processing methods
  processSFC(code: string): {
    template: string;
    script: string;
    style: string;
  } {
    const templateMatch = code.match(/<template>([\s\S]*?)<\/template>/);
    const scriptMatch = code.match(/<script[^>]*>([\s\S]*?)<\/script>/);
    const styleMatch = code.match(/<style[^>]*>([\s\S]*?)<\/style>/);

    return {
      template: templateMatch ? templateMatch[1].trim() : "",
      script: scriptMatch ? scriptMatch[1].trim() : "",
      style: styleMatch ? styleMatch[1].trim() : "",
    };
  }

  addCompositionAPI(code: string, apis: string[]): string {
    const vueImportRegex = /import\s+(?:{[^}]+}|\w+)\s+from\s+['"]vue['"]/;
    const match = code.match(vueImportRegex);

    if (match) {
      const currentImport = match[0];
      const newAPIs = apis.filter((api) => !currentImport.includes(api));

      if (newAPIs.length > 0) {
        const updatedImport = currentImport.replace(
          /import\s+{([^}]+)}/,
          `import { $1, ${newAPIs.join(", ")} }`
        );
        code = code.replace(currentImport, updatedImport);
      }
    }

    return code;
  }

  processDirectives(
    template: string,
    directives: Record<string, string>
  ): string {
    let processed = template;

    Object.entries(directives).forEach(([directive, value]) => {
      const regex = new RegExp(`v-${directive}="[^"]*"`, "g");
      processed = processed.replace(regex, `v-${directive}="${value}"`);
    });

    return processed;
  }
}
