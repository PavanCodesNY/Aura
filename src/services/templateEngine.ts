import {
  FrameworkId,
  FrameworkTemplate,
  MultiFrameworkTemplate,
  TemplateError,
} from "../types/framework";
import { frameworkManager } from "./frameworkManager";
import { multiFrameworkTemplates } from "../data/multiFrameworkTemplates";

interface TemplateCache {
  [key: string]: FrameworkTemplate;
}

class TemplateEngine {
  private cache: TemplateCache = {};
  private readonly CACHE_PREFIX = "template_";

  // Get template for specific component and framework
  getTemplate(
    componentId: string,
    frameworkId?: FrameworkId
  ): FrameworkTemplate {
    const targetFramework =
      frameworkId || frameworkManager.getCurrentFramework().id;
    const cacheKey = this.getCacheKey(componentId, targetFramework);

    try {
      // Check cache first
      if (this.cache[cacheKey]) {
        return this.cache[cacheKey];
      }

      // Load template from component templates
      const multiFrameworkTemplate =
        this.loadMultiFrameworkTemplate(componentId);

      if (!multiFrameworkTemplate) {
        throw new TemplateError(
          `Component template not found: ${componentId}`,
          componentId,
          targetFramework
        );
      }

      const frameworkTemplate =
        multiFrameworkTemplate.frameworks[targetFramework];

      if (!frameworkTemplate) {
        throw new TemplateError(
          `Framework template not found: ${componentId} for ${targetFramework}`,
          componentId,
          targetFramework
        );
      }

      // Validate template
      if (!this.validateTemplate(frameworkTemplate)) {
        throw new TemplateError(
          `Invalid template structure: ${componentId} for ${targetFramework}`,
          componentId,
          targetFramework
        );
      }

      // Cache the template
      this.cache[cacheKey] = frameworkTemplate;

      return frameworkTemplate;
    } catch (error) {
      console.error("TemplateEngine: Failed to get template", error);

      // Try to return a fallback template
      const fallbackTemplate = this.getFallbackTemplate(
        componentId,
        targetFramework
      );
      if (fallbackTemplate) {
        console.warn(
          `TemplateEngine: Using fallback template for ${componentId}`
        );
        return fallbackTemplate;
      }

      throw error;
    }
  }

  // Get all available templates for a framework
  getFrameworkTemplates(
    frameworkId: FrameworkId
  ): Record<string, FrameworkTemplate> {
    const templates: Record<string, FrameworkTemplate> = {};

    try {
      const componentIds = this.getAvailableComponentIds();

      for (const componentId of componentIds) {
        try {
          templates[componentId] = this.getTemplate(componentId, frameworkId);
        } catch (error) {
          console.warn(
            `TemplateEngine: Failed to load template ${componentId} for ${frameworkId}`,
            error
          );
        }
      }
    } catch (error) {
      console.error("TemplateEngine: Failed to get framework templates", error);
    }

    return templates;
  }

  // Process template with context (for future extensibility)
  processTemplate(
    template: FrameworkTemplate,
    context?: Record<string, any>
  ): string {
    try {
      let processedCode = template.code;

      // Apply context substitutions if provided
      if (context) {
        for (const [key, value] of Object.entries(context)) {
          const placeholder = `{{${key}}}`;
          processedCode = processedCode.replace(
            new RegExp(placeholder, "g"),
            String(value)
          );
        }
      }

      return processedCode;
    } catch (error) {
      console.error("TemplateEngine: Failed to process template", error);
      return template.code; // Return original code as fallback
    }
  }

  // Validate template structure
  validateTemplate(template: FrameworkTemplate): boolean {
    try {
      // Check required fields
      if (!template.code || typeof template.code !== "string") {
        return false;
      }

      if (!template.extension || typeof template.extension !== "string") {
        return false;
      }

      if (!template.language || typeof template.language !== "string") {
        return false;
      }

      // Check code is not empty
      if (template.code.trim().length === 0) {
        return false;
      }

      // Validate arrays if present
      if (template.dependencies && !Array.isArray(template.dependencies)) {
        return false;
      }

      if (template.imports && !Array.isArray(template.imports)) {
        return false;
      }

      if (template.exports && !Array.isArray(template.exports)) {
        return false;
      }

      return true;
    } catch (error) {
      console.error("TemplateEngine: Template validation error", error);
      return false;
    }
  }

  // Clear template cache
  clearCache(): void {
    this.cache = {};
  }

  // Clear specific template from cache
  clearTemplateCache(componentId: string, frameworkId?: FrameworkId): void {
    if (frameworkId) {
      const cacheKey = this.getCacheKey(componentId, frameworkId);
      delete this.cache[cacheKey];
    } else {
      // Clear all framework versions of this component
      const keysToDelete = Object.keys(this.cache).filter((key) =>
        key.startsWith(`${this.CACHE_PREFIX}${componentId}_`)
      );
      keysToDelete.forEach((key) => delete this.cache[key]);
    }
  }

  // Get cache statistics
  getCacheStats(): { size: number; keys: string[] } {
    return {
      size: Object.keys(this.cache).length,
      keys: Object.keys(this.cache),
    };
  }

  // Private methods
  private getCacheKey(componentId: string, frameworkId: FrameworkId): string {
    return `${this.CACHE_PREFIX}${componentId}_${frameworkId}`;
  }

  private loadMultiFrameworkTemplate(
    componentId: string
  ): MultiFrameworkTemplate | null {
    try {
      const template = multiFrameworkTemplates[componentId];
      return template || null;
    } catch (error) {
      console.error(
        "TemplateEngine: Failed to load multi-framework template",
        error
      );
      return null;
    }
  }

  private getFallbackTemplate(
    componentId: string,
    frameworkId: FrameworkId
  ): FrameworkTemplate | null {
    try {
      // Create a basic fallback template
      const fallbackCode = this.generateFallbackCode(componentId, frameworkId);

      return {
        code: fallbackCode,
        extension: this.getFrameworkExtension(frameworkId),
        language: frameworkId === "vanilla" ? "javascript" : "typescript",
      };
    } catch (error) {
      console.error(
        "TemplateEngine: Failed to create fallback template",
        error
      );
      return null;
    }
  }

  private generateFallbackCode(
    componentId: string,
    frameworkId: FrameworkId
  ): string {
    const componentName = this.capitalizeFirst(componentId.replace(/-/g, ""));

    switch (frameworkId) {
      case "react":
        return `import React from 'react';\n\nconst ${componentName}: React.FC = () => {\n  return <div>Component not available</div>;\n};\n\nexport default ${componentName};`;

      case "vue":
        return `<template>\n  <div>Component not available</div>\n</template>\n\n<script setup lang="ts">\n// ${componentName} component\n</script>`;

      case "svelte":
        return `<script lang="ts">\n  // ${componentName} component\n</script>\n\n<div>Component not available</div>`;

      case "angular":
        return `import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-${componentId}',\n  template: '<div>Component not available</div>'\n})\nexport class ${componentName}Component {}`;

      case "vanilla":
        return `class ${componentName} {\n  constructor(element) {\n    this.element = element;\n    this.render();\n  }\n\n  render() {\n    this.element.innerHTML = 'Component not available';\n  }\n}`;

      default:
        return "// Component not available";
    }
  }

  private getFrameworkExtension(frameworkId: FrameworkId): string {
    const extensions: Record<FrameworkId, string> = {
      react: "tsx",
      vue: "vue",
      svelte: "svelte",
      angular: "ts",
      vanilla: "js",
    };
    return extensions[frameworkId];
  }

  private capitalizeFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private getAvailableComponentIds(): string[] {
    return Object.keys(multiFrameworkTemplates);
  }
}

// Create singleton instance
export const templateEngine = new TemplateEngine();

// Export class for testing
export { TemplateEngine };
