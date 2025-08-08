// Angular TypeScript syntax highlighter

import { BaseSyntaxHighlighter } from "./baseSyntaxHighlighter";

export class AngularSyntaxHighlighter extends BaseSyntaxHighlighter {
  public supportedLanguages = ["typescript", "html"];

  private angularKeywords = [
    "Component",
    "Injectable",
    "Directive",
    "Pipe",
    "NgModule",
    "Input",
    "Output",
    "ViewChild",
    "ViewChildren",
    "ContentChild",
    "ContentChildren",
    "HostBinding",
    "HostListener",
    "OnInit",
    "OnDestroy",
    "OnChanges",
    "DoCheck",
    "AfterContentInit",
    "AfterContentChecked",
    "AfterViewInit",
    "AfterViewChecked",
    "EventEmitter",
  ];

  private angularDirectives = [
    "*ngFor",
    "*ngIf",
    "ngClass",
    "ngStyle",
    "ngModel",
    "ngSubmit",
    "ngClick",
    "routerLink",
    "routerOutlet",
    "ngContainer",
    "ngTemplate",
    "ngContent",
  ];

  private decorators = [
    "@Component",
    "@Injectable",
    "@Directive",
    "@Pipe",
    "@NgModule",
    "@Input",
    "@Output",
    "@ViewChild",
    "@ViewChildren",
    "@ContentChild",
    "@ContentChildren",
    "@HostBinding",
    "@HostListener",
    "@Inject",
    "@Optional",
    "@Self",
    "@SkipSelf",
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

    // Highlight Angular decorators
    highlighted = this.highlightDecorators(highlighted);

    // Highlight Angular directives (for template code)
    highlighted = this.highlightAngularDirectives(highlighted);

    // Highlight Angular keywords
    highlighted = this.highlightKeywords(highlighted, this.angularKeywords);

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

    // Highlight Angular template syntax
    highlighted = this.highlightTemplateSyntax(highlighted);

    return highlighted;
  }

  private highlightDecorators(code: string): string {
    let highlighted = code;

    this.decorators.forEach((decorator) => {
      const regex = new RegExp(`\\${decorator}\\b`, "g");
      highlighted = highlighted.replace(
        regex,
        this.wrapWithSpan(decorator, "angular-decorator")
      );
    });

    return highlighted;
  }

  private highlightAngularDirectives(code: string): string {
    let highlighted = code;

    this.angularDirectives.forEach((directive) => {
      const regex = new RegExp(`\\b${directive}\\b`, "g");
      highlighted = highlighted.replace(
        regex,
        this.wrapWithSpan(directive, "angular-directive")
      );
    });

    return highlighted;
  }

  private highlightTemplateSyntax(code: string): string {
    return (
      code
        // Highlight interpolation {{ }}
        .replace(
          /{{([^}]+)}}/g,
          (match, content) =>
            `{{${this.wrapWithSpan(content, "angular-interpolation")}}}`
        )
        // Highlight property binding [property]
        .replace(
          /\[([a-zA-Z-]+)\]/g,
          (match, property) =>
            `[${this.wrapWithSpan(property, "angular-property-binding")}]`
        )
        // Highlight event binding (event)
        .replace(
          /\(([a-zA-Z-]+)\)/g,
          (match, event) =>
            `(${this.wrapWithSpan(event, "angular-event-binding")})`
        )
        // Highlight two-way binding [(ngModel)]
        .replace(
          /\[\(([a-zA-Z-]+)\)\]/g,
          (match, model) =>
            `[(${this.wrapWithSpan(model, "angular-two-way-binding")})]`
        )
        // Highlight template reference variables #ref
        .replace(
          /#([a-zA-Z0-9_-]+)/g,
          (match, ref) => `#${this.wrapWithSpan(ref, "angular-template-ref")}`
        )
    );
  }
}
