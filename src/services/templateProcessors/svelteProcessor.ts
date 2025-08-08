// Svelte template processor

import { BaseTemplateProcessor } from "./baseTemplateProcessor";
import { FrameworkTemplate } from "../../types/framework";

export class SvelteTemplateProcessor extends BaseTemplateProcessor {
  process(template: FrameworkTemplate, context?: any): string {
    let processed = template.code;

    if (context) {
      // Process template variables
      processed = this.processTemplate(processed, context);

      // Add component name if provided (Svelte doesn't have explicit component names)
      if (context.componentName) {
        processed = this.addComponentComment(processed, context.componentName);
      }
    }

    return processed;
  }

  validate(template: FrameworkTemplate): boolean {
    if (!template.code || typeof template.code !== "string") {
      return false;
    }

    // Check for Svelte structure
    const hasScript =
      template.code.includes("<script>") ||
      template.code.includes('<script lang="ts">');
    const hasSvelteFeatures =
      template.code.includes("$:") || // reactive statements
      template.code.includes("on:") || // event handlers
      template.code.includes("bind:") || // bindings
      template.code.includes("{#") || // blocks
      (template.code.includes("import") && template.code.includes("svelte"));

    return (
      this.validateSyntax(template.code) && (hasScript || hasSvelteFeatures)
    );
  }

  getRequiredImports(template: FrameworkTemplate): string[] {
    const imports = this.extractImports(template.code);
    const requiredImports: string[] = [];

    // Check for Svelte lifecycle functions
    const lifecycle = [
      "onMount",
      "onDestroy",
      "beforeUpdate",
      "afterUpdate",
      "tick",
    ];

    lifecycle.forEach((func) => {
      if (
        template.code.includes(func) &&
        !imports.some((imp) => imp.includes(func))
      ) {
        requiredImports.push(`svelte (${func})`);
      }
    });

    // Check for Svelte stores
    if (
      template.code.includes("writable") ||
      template.code.includes("readable") ||
      template.code.includes("derived")
    ) {
      requiredImports.push("svelte/store");
    }

    // Check for createEventDispatcher
    if (template.code.includes("createEventDispatcher")) {
      requiredImports.push("svelte (createEventDispatcher)");
    }

    return Array.from(new Set([...imports, ...requiredImports]));
  }

  private addComponentComment(code: string, componentName: string): string {
    return `<!-- ${componentName} Component -->\n${code}`;
  }

  // Svelte-specific processing methods
  processReactiveStatements(code: string, statements: string[]): string {
    let processed = code;

    statements.forEach((statement) => {
      if (!processed.includes(`$: ${statement}`)) {
        // Add reactive statement to script section
        const scriptMatch = processed.match(
          /(<script[^>]*>)([\s\S]*?)(<\/script>)/
        );
        if (scriptMatch) {
          const [, openTag, content, closeTag] = scriptMatch;
          const newContent = `${content}\n  $: ${statement}`;
          processed = processed.replace(
            scriptMatch[0],
            `${openTag}${newContent}${closeTag}`
          );
        }
      }
    });

    return processed;
  }

  processStores(code: string, stores: Record<string, string>): string {
    let processed = code;

    Object.entries(stores).forEach(([storeName, storeType]) => {
      if (!processed.includes(`${storeName} =`)) {
        // Add store import if needed
        if (!processed.includes("svelte/store")) {
          processed = `import { ${storeType} } from 'svelte/store';\n${processed}`;
        }

        // Add store declaration
        const scriptMatch = processed.match(
          /(<script[^>]*>)([\s\S]*?)(<\/script>)/
        );
        if (scriptMatch) {
          const [, openTag, content, closeTag] = scriptMatch;
          const newContent = `${content}\n  const ${storeName} = ${storeType}();`;
          processed = processed.replace(
            scriptMatch[0],
            `${openTag}${newContent}${closeTag}`
          );
        }
      }
    });

    return processed;
  }

  processBindings(template: string, bindings: Record<string, string>): string {
    let processed = template;

    Object.entries(bindings).forEach(([element, variable]) => {
      const regex = new RegExp(`<${element}([^>]*)>`, "g");
      processed = processed.replace(regex, (match, attrs) => {
        if (!attrs.includes("bind:")) {
          return `<${element}${attrs} bind:value={${variable}}>`;
        }
        return match;
      });
    });

    return processed;
  }

  processTransitions(
    code: string,
    transitions: Record<string, string>
  ): string {
    let processed = code;

    Object.entries(transitions).forEach(([element, transition]) => {
      const regex = new RegExp(`<${element}([^>]*)>`, "g");
      processed = processed.replace(regex, (match, attrs) => {
        if (!attrs.includes("transition:")) {
          return `<${element}${attrs} transition:${transition}>`;
        }
        return match;
      });
    });

    return processed;
  }
}
