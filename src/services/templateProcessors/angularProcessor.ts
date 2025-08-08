// Angular template processor

import { BaseTemplateProcessor } from "./baseTemplateProcessor";
import { FrameworkTemplate } from "../../types/framework";

export class AngularTemplateProcessor extends BaseTemplateProcessor {
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

    // Check for Angular structure
    const hasAngularImports =
      template.code.includes("@angular/core") ||
      template.code.includes("@Component") ||
      template.code.includes("@Injectable") ||
      template.code.includes("@Directive");

    const hasDecorator =
      template.code.includes("@Component") ||
      template.code.includes("@Injectable") ||
      template.code.includes("@Directive") ||
      template.code.includes("@Pipe");

    const hasClass =
      template.code.includes("class") && template.code.includes("export");

    return (
      this.validateSyntax(template.code) &&
      hasAngularImports &&
      hasDecorator &&
      hasClass
    );
  }

  getRequiredImports(template: FrameworkTemplate): string[] {
    const imports = this.extractImports(template.code);
    const requiredImports = ["@angular/core"];

    // Check for common Angular decorators
    const decorators = [
      "Component",
      "Injectable",
      "Directive",
      "Pipe",
      "Input",
      "Output",
      "ViewChild",
      "ViewChildren",
      "ContentChild",
      "ContentChildren",
    ];

    decorators.forEach((decorator) => {
      if (
        template.code.includes(`@${decorator}`) &&
        !imports.some((imp) => imp.includes("@angular/core"))
      ) {
        requiredImports.push(`@angular/core (${decorator})`);
      }
    });

    // Check for lifecycle interfaces
    const lifecycle = [
      "OnInit",
      "OnDestroy",
      "OnChanges",
      "DoCheck",
      "AfterContentInit",
      "AfterContentChecked",
      "AfterViewInit",
      "AfterViewChecked",
    ];

    lifecycle.forEach((lifecycleInterface) => {
      if (template.code.includes(lifecycleInterface)) {
        requiredImports.push(`@angular/core (${lifecycleInterface})`);
      }
    });

    // Check for common Angular modules
    if (
      template.code.includes("FormBuilder") ||
      template.code.includes("FormGroup")
    ) {
      requiredImports.push("@angular/forms");
    }

    if (template.code.includes("HttpClient")) {
      requiredImports.push("@angular/common/http");
    }

    if (
      template.code.includes("Router") ||
      template.code.includes("ActivatedRoute")
    ) {
      requiredImports.push("@angular/router");
    }

    return Array.from(new Set([...imports, ...requiredImports]));
  }

  private updateComponentName(code: string, newName: string): string {
    // Update class name
    code = code.replace(
      /export\s+class\s+\w+Component/g,
      `export class ${newName}Component`
    );

    // Update component selector if present
    code = code.replace(
      /selector:\s*['"][^'"]*['"]/g,
      `selector: 'app-${newName.toLowerCase()}'`
    );

    return code;
  }

  // Angular-specific processing methods
  processComponent(
    code: string,
    config: {
      selector?: string;
      templateUrl?: string;
      template?: string;
      styleUrls?: string[];
      styles?: string[];
    }
  ): string {
    let processed = code;

    const componentMatch = processed.match(/@Component\({([^}]+)}\)/);
    if (componentMatch) {
      let componentConfig = componentMatch[1];

      Object.entries(config).forEach(([key, value]) => {
        if (value !== undefined) {
          const regex = new RegExp(`${key}:\\s*[^,}]+`, "g");
          const replacement = Array.isArray(value)
            ? `${key}: [${value.map((v) => `'${v}'`).join(", ")}]`
            : `${key}: '${value}'`;

          if (componentConfig.includes(`${key}:`)) {
            componentConfig = componentConfig.replace(regex, replacement);
          } else {
            componentConfig += `,\n  ${replacement}`;
          }
        }
      });

      processed = processed.replace(
        componentMatch[0],
        `@Component({${componentConfig}})`
      );
    }

    return processed;
  }

  addLifecycleHooks(code: string, hooks: string[]): string {
    let processed = code;

    hooks.forEach((hook) => {
      if (!processed.includes(`${hook}(`)) {
        // Add import if needed
        if (!processed.includes(hook)) {
          const importMatch = processed.match(
            /import\s+{([^}]+)}\s+from\s+['"]@angular\/core['"]/
          );
          if (importMatch) {
            const currentImports = importMatch[1];
            const updatedImports = `${currentImports}, ${hook}`;
            processed = processed.replace(
              importMatch[0],
              `import { ${updatedImports} } from '@angular/core'`
            );
          }
        }

        // Add interface implementation
        const classMatch = processed.match(
          /export\s+class\s+(\w+)(?:\s+implements\s+([^{]+))?/
        );
        if (classMatch) {
          const [fullMatch, className, currentInterfaces] = classMatch;
          const interfaces = currentInterfaces
            ? `${currentInterfaces}, ${hook}`
            : hook;
          processed = processed.replace(
            fullMatch,
            `export class ${className} implements ${interfaces}`
          );
        }

        // Add method implementation
        const classBodyMatch = processed.match(
          /(export\s+class\s+\w+[^{]*{)([\s\S]*)(}$)/
        );
        if (classBodyMatch) {
          const [, classStart, classBody, classEnd] = classBodyMatch;
          const methodName = hook.replace(/^On/, "").toLowerCase();
          const newMethod = `\n\n  ${methodName}(): void {\n    // TODO: Implement ${hook}\n  }`;
          processed = `${classStart}${classBody}${newMethod}\n${classEnd}`;
        }
      }
    });

    return processed;
  }

  processServices(code: string, services: string[]): string {
    let processed = code;

    services.forEach((service) => {
      if (!processed.includes(service)) {
        // Add to constructor injection
        const constructorMatch = processed.match(/constructor\(([^)]*)\)/);
        if (constructorMatch) {
          const currentParams = constructorMatch[1].trim();
          const serviceParam = `private ${service.toLowerCase()}: ${service}`;
          const newParams = currentParams
            ? `${currentParams}, ${serviceParam}`
            : serviceParam;

          processed = processed.replace(
            constructorMatch[0],
            `constructor(${newParams})`
          );
        } else {
          // Add constructor if it doesn't exist
          const classBodyMatch = processed.match(
            /(export\s+class\s+\w+[^{]*{)([\s\S]*)(}$)/
          );
          if (classBodyMatch) {
            const [, classStart, classBody, classEnd] = classBodyMatch;
            const constructor = `\n\n  constructor(private ${service.toLowerCase()}: ${service}) {}`;
            processed = `${classStart}${classBody}${constructor}\n${classEnd}`;
          }
        }
      }
    });

    return processed;
  }
}
