// Vanilla JavaScript template processor

import { BaseTemplateProcessor } from "./baseTemplateProcessor";
import { FrameworkTemplate } from "../../types/framework";

export class VanillaTemplateProcessor extends BaseTemplateProcessor {
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

    // Check for basic JavaScript structure
    const hasFunction =
      template.code.includes("function") ||
      template.code.includes("=>") ||
      template.code.includes("class");

    const hasDOMInteraction =
      template.code.includes("document") ||
      template.code.includes("getElementById") ||
      template.code.includes("querySelector") ||
      template.code.includes("createElement");

    return (
      this.validateSyntax(template.code) && (hasFunction || hasDOMInteraction)
    );
  }

  getRequiredImports(template: FrameworkTemplate): string[] {
    const imports = this.extractImports(template.code);
    const requiredImports: string[] = [];

    // Vanilla JS typically doesn't have many external dependencies
    // but we can check for common patterns

    // Check for modern JS features that might need polyfills
    if (template.code.includes("fetch(")) {
      requiredImports.push("fetch polyfill (if supporting older browsers)");
    }

    if (template.code.includes("Promise")) {
      requiredImports.push("Promise polyfill (if supporting older browsers)");
    }

    if (template.code.includes("async") || template.code.includes("await")) {
      requiredImports.push(
        "async/await polyfill (if supporting older browsers)"
      );
    }

    // Check for Web APIs
    if (template.code.includes("WebSocket")) {
      requiredImports.push("WebSocket API");
    }

    if (template.code.includes("Worker")) {
      requiredImports.push("Web Workers API");
    }

    if (
      template.code.includes("localStorage") ||
      template.code.includes("sessionStorage")
    ) {
      requiredImports.push("Web Storage API");
    }

    return Array.from(new Set([...imports, ...requiredImports]));
  }

  private updateComponentName(code: string, newName: string): string {
    // Update function names
    code = code.replace(/function\s+\w+/g, `function ${newName}`);

    // Update class names
    code = code.replace(/class\s+\w+/g, `class ${newName}`);

    // Update const/let variable names for components
    code = code.replace(/(const|let)\s+\w+\s*=/g, `$1 ${newName} =`);

    return code;
  }

  // Vanilla JS-specific processing methods
  processDOM(code: string, selectors: Record<string, string>): string {
    let processed = code;

    Object.entries(selectors).forEach(([oldSelector, newSelector]) => {
      // Update querySelector calls
      processed = processed.replace(
        new RegExp(`querySelector\\(['"]${oldSelector}['"]\\)`, "g"),
        `querySelector('${newSelector}')`
      );

      // Update getElementById calls
      processed = processed.replace(
        new RegExp(`getElementById\\(['"]${oldSelector}['"]\\)`, "g"),
        `getElementById('${newSelector}')`
      );
    });

    return processed;
  }

  addEventListeners(code: string, events: Record<string, string>): string {
    let processed = code;

    Object.entries(events).forEach(([element, eventType]) => {
      if (!processed.includes(`addEventListener('${eventType}'`)) {
        // Find a good place to add the event listener
        const functionMatch = processed.match(
          /(function\s+\w+[^{]*{)([\s\S]*)(}$)/
        );
        if (functionMatch) {
          const [, funcStart, funcBody, funcEnd] = functionMatch;
          const eventListener = `\n  ${element}.addEventListener('${eventType}', function(event) {\n    // Handle ${eventType} event\n  });`;
          processed = `${funcStart}${funcBody}${eventListener}\n${funcEnd}`;
        }
      }
    });

    return processed;
  }

  processCSS(
    code: string,
    styles: Record<string, Record<string, string>>
  ): string {
    let processed = code;

    Object.entries(styles).forEach(([selector, properties]) => {
      const styleString = Object.entries(properties)
        .map(([prop, value]) => `${prop}: ${value}`)
        .join("; ");

      // Add inline styles
      if (!processed.includes(`style = "${styleString}"`)) {
        processed = processed.replace(
          new RegExp(`(${selector}[^>]*)(>)`, "g"),
          `$1 style="${styleString}"$2`
        );
      }
    });

    return processed;
  }

  addModulePattern(code: string, moduleName: string): string {
    // Wrap code in module pattern
    return `
(function(window) {
  'use strict';
  
  ${code}
  
  // Export module
  window.${moduleName} = ${moduleName};
  
})(window);
`.trim();
  }

  addES6Modules(code: string, exports: string[]): string {
    let processed = code;

    // Add export statements
    exports.forEach((exportName) => {
      if (!processed.includes(`export`) && processed.includes(exportName)) {
        processed += `\n\nexport { ${exportName} };`;
      }
    });

    return processed;
  }

  optimizeForPerformance(code: string): string {
    let optimized = code;

    // Add requestAnimationFrame for animations
    if (optimized.includes("setInterval") && optimized.includes("animation")) {
      optimized = optimized.replace(
        /setInterval\(([^,]+),\s*\d+\)/g,
        "requestAnimationFrame($1)"
      );
    }

    // Use event delegation for multiple similar elements
    if (
      optimized.includes("addEventListener") &&
      optimized.includes("querySelectorAll")
    ) {
      // This is a simplified optimization - real implementation would be more complex
      optimized = `// Consider using event delegation for better performance\n${optimized}`;
    }

    return optimized;
  }
}
