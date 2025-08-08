// Multi-framework component templates

import {
  MultiFrameworkTemplate,
  ComponentTemplateMap,
} from "../types/framework";

export const multiFrameworkTemplates: ComponentTemplateMap = {
  "magnetic-button": {
    id: "magnetic-button",
    name: "Magnetic Button",
    description:
      "Interactive button that follows your cursor with magnetic effect",
    preview: "magnetic button",
    type: "button",
    category: "button",
    frameworks: {
      react: {
        code: `import React, { useRef, useEffect } from 'react';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ children, className = "" }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;
      
      button.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
    };
    
    const handleMouseLeave = () => {
      button.style.transform = 'translate(0px, 0px)';
    };
    
    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return (
    <button
      type="button"
      ref={buttonRef}
      className={\`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg \${className}\`}
      title="Interactive magnetic button that follows your cursor"
    >
      {children}
    </button>
  );
};

export default MagneticButton;`,
        extension: "tsx",
        language: "typescript",
        dependencies: ["react", "@types/react"],
        imports: ["react"],
        exports: ["MagneticButton"],
      },
      vue: {
        code: `<template>
  <button
    ref="buttonRef"
    type="button"
    :class="buttonClasses"
    title="Interactive magnetic button that follows your cursor"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

interface Props {
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
});

const buttonRef = ref<HTMLButtonElement>();

const buttonClasses = computed(() => 
  \`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg \${props.className}\`
);

const handleMouseMove = (e: MouseEvent) => {
  const button = buttonRef.value;
  if (!button) return;
  
  const rect = button.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  const deltaX = (e.clientX - centerX) * 0.15;
  const deltaY = (e.clientY - centerY) * 0.15;
  
  button.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
};

const handleMouseLeave = () => {
  const button = buttonRef.value;
  if (button) {
    button.style.transform = 'translate(0px, 0px)';
  }
};
</script>`,
        extension: "vue",
        language: "typescript",
        dependencies: ["vue"],
        imports: ["vue"],
        exports: ["default"],
      },
      svelte: {
        code: `<script lang="ts">
  export let className: string = '';
  
  let buttonRef: HTMLButtonElement;
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!buttonRef) return;
    
    const rect = buttonRef.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    
    buttonRef.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
  };
  
  const handleMouseLeave = () => {
    if (buttonRef) {
      buttonRef.style.transform = 'translate(0px, 0px)';
    }
  };
</script>

<button
  bind:this={buttonRef}
  type="button"
  class="px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg {className}"
  title="Interactive magnetic button that follows your cursor"
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <slot />
</button>`,
        extension: "svelte",
        language: "typescript",
        dependencies: ["svelte"],
        imports: [],
        exports: ["default"],
      },
      angular: {
        code: `import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-magnetic-button',
  template: \`
    <button
      #buttonRef
      type="button"
      [class]="buttonClasses"
      title="Interactive magnetic button that follows your cursor"
      (mousemove)="handleMouseMove($event)"
      (mouseleave)="handleMouseLeave()"
    >
      <ng-content></ng-content>
    </button>
  \`,
  styles: []
})
export class MagneticButtonComponent implements AfterViewInit, OnDestroy {
  @Input() className: string = '';
  @ViewChild('buttonRef') buttonRef!: ElementRef<HTMLButtonElement>;

  get buttonClasses(): string {
    return \`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg \${this.className}\`;
  }

  ngAfterViewInit(): void {
    // Component is ready
  }

  ngOnDestroy(): void {
    // Cleanup if needed
  }

  handleMouseMove(e: MouseEvent): void {
    const button = this.buttonRef.nativeElement;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;

    button.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
  }

  handleMouseLeave(): void {
    const button = this.buttonRef.nativeElement;
    if (button) {
      button.style.transform = 'translate(0px, 0px)';
    }
  }
}`,
        extension: "ts",
        language: "typescript",
        dependencies: ["@angular/core"],
        imports: ["@angular/core"],
        exports: ["MagneticButtonComponent"],
      },
      vanilla: {
        code: `class MagneticButton {
  constructor(element, options = {}) {
    this.element = element;
    this.className = options.className || '';
    this.init();
  }

  init() {
    // Set up the button
    this.element.type = 'button';
    this.element.className = \`px-8 py-4 bg-black text-white font-medium rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg \${this.className}\`;
    this.element.title = 'Interactive magnetic button that follows your cursor';

    // Bind event listeners
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    this.element.addEventListener('mousemove', this.handleMouseMove);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
  }

  handleMouseMove(e) {
    const rect = this.element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;

    this.element.style.transform = \`translate(\${deltaX}px, \${deltaY}px)\`;
  }

  handleMouseLeave() {
    this.element.style.transform = 'translate(0px, 0px)';
  }

  destroy() {
    this.element.removeEventListener('mousemove', this.handleMouseMove);
    this.element.removeEventListener('mouseleave', this.handleMouseLeave);
  }
}

// Usage: new MagneticButton(document.getElementById('my-button'));
export { MagneticButton };`,
        extension: "js",
        language: "javascript",
        dependencies: [],
        imports: [],
        exports: ["MagneticButton"],
      },
    },
    metadata: {
      difficulty: "intermediate",
      tags: ["interactive", "animation", "mouse-tracking"],
      lastUpdated: "2024-01-15",
    },
  },

  "glowing-card": {
    id: "glowing-card",
    name: "Glowing Card",
    description: "Card component with mouse-tracking glow effect",
    preview: "glowing card",
    type: "card",
    category: "card",
    frameworks: {
      react: {
        code: `import React, { useRef, useEffect } from 'react';

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlowingCard: React.FC<GlowingCardProps> = ({ children, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', x + 'px');
      card.style.setProperty('--mouse-y', y + 'px');
    };
    
    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div
      ref={cardRef}
      className={\`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer [background:radial-gradient(400px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(0,0,0,0.04),transparent_40%)] \${className}\`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlowingCard;`,
        extension: "tsx",
        language: "typescript",
        dependencies: ["react", "@types/react"],
        imports: ["react"],
        exports: ["GlowingCard"],
      },
      vue: {
        code: `<template>
  <div
    ref="cardRef"
    :class="cardClasses"
    :style="cardStyle"
    @mousemove="handleMouseMove"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
    <div class="relative z-10">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: ''
});

const cardRef = ref<HTMLDivElement>();
const mouseX = ref(50);
const mouseY = ref(50);

const cardClasses = computed(() => 
  \`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer \${props.className}\`
);

const cardStyle = computed(() => ({
  background: \`radial-gradient(400px circle at \${mouseX.value}% \${mouseY.value}%, rgba(0,0,0,0.04), transparent 40%)\`
}));

const handleMouseMove = (e: MouseEvent) => {
  const card = cardRef.value;
  if (!card) return;
  
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  mouseX.value = x;
  mouseY.value = y;
};
</script>`,
        extension: "vue",
        language: "typescript",
        dependencies: ["vue"],
        imports: ["vue"],
        exports: ["default"],
      },
      svelte: {
        code: `<script lang="ts">
  export let className: string = '';
  
  let cardRef: HTMLDivElement;
  let mouseX = 50;
  let mouseY = 50;
  
  $: cardClasses = \`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer \${className}\`;
  $: cardStyle = \`background: radial-gradient(400px circle at \${mouseX}% \${mouseY}%, rgba(0,0,0,0.04), transparent 40%)\`;
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef) return;
    
    const rect = cardRef.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    mouseX = x;
    mouseY = y;
  };
</script>

<div
  bind:this={cardRef}
  class={cardClasses}
  style={cardStyle}
  on:mousemove={handleMouseMove}
>
  <div class="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
  <div class="relative z-10">
    <slot />
  </div>
</div>`,
        extension: "svelte",
        language: "typescript",
        dependencies: ["svelte"],
        imports: [],
        exports: ["default"],
      },
      angular: {
        code: `import { Component, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-glowing-card',
  template: \`
    <div
      #cardRef
      [class]="cardClasses"
      [style]="cardStyle"
      (mousemove)="handleMouseMove($event)"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      <div class="relative z-10">
        <ng-content></ng-content>
      </div>
    </div>
  \`,
  styles: []
})
export class GlowingCardComponent implements AfterViewInit {
  @Input() className: string = '';
  @ViewChild('cardRef') cardRef!: ElementRef<HTMLDivElement>;

  mouseX = 50;
  mouseY = 50;

  get cardClasses(): string {
    return \`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer \${this.className}\`;
  }

  get cardStyle(): { [key: string]: string } {
    return {
      background: \`radial-gradient(400px circle at \${this.mouseX}% \${this.mouseY}%, rgba(0,0,0,0.04), transparent 40%)\`
    };
  }

  ngAfterViewInit(): void {
    // Component is ready
  }

  handleMouseMove(e: MouseEvent): void {
    const card = this.cardRef.nativeElement;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    this.mouseX = x;
    this.mouseY = y;
  }
}`,
        extension: "ts",
        language: "typescript",
        dependencies: ["@angular/core"],
        imports: ["@angular/core"],
        exports: ["GlowingCardComponent"],
      },
      vanilla: {
        code: `class GlowingCard {
  constructor(element, options = {}) {
    this.element = element;
    this.className = options.className || '';
    this.mouseX = 50;
    this.mouseY = 50;
    this.init();
  }

  init() {
    // Set up the card structure
    this.element.className = \`relative p-6 bg-white border border-gray-200 rounded-xl transition-all duration-500 hover:shadow-xl group cursor-pointer \${this.className}\`;
    
    // Create inner elements
    const overlay = document.createElement('div');
    overlay.className = 'absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500';
    
    const content = document.createElement('div');
    content.className = 'relative z-10';
    
    // Move existing content to content wrapper
    while (this.element.firstChild) {
      content.appendChild(this.element.firstChild);
    }
    
    this.element.appendChild(overlay);
    this.element.appendChild(content);

    // Bind event listeners
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.element.addEventListener('mousemove', this.handleMouseMove);
    
    this.updateBackground();
  }

  handleMouseMove(e) {
    const rect = this.element.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    this.mouseX = x;
    this.mouseY = y;
    this.updateBackground();
  }

  updateBackground() {
    this.element.style.background = \`radial-gradient(400px circle at \${this.mouseX}% \${this.mouseY}%, rgba(0,0,0,0.04), transparent 40%)\`;
  }

  destroy() {
    this.element.removeEventListener('mousemove', this.handleMouseMove);
  }
}

// Usage: new GlowingCard(document.getElementById('my-card'));
export { GlowingCard };`,
        extension: "js",
        language: "javascript",
        dependencies: [],
        imports: [],
        exports: ["GlowingCard"],
      },
    },
    metadata: {
      difficulty: "intermediate",
      tags: ["interactive", "animation", "mouse-tracking", "glow"],
      lastUpdated: "2024-01-15",
    },
  },

  "minimal-input": {
    id: "minimal-input",
    name: "Minimal Input",
    description: "Clean input field with focus animations",
    preview: "minimal input",
    type: "input",
    category: "input",
    frameworks: {
      react: {
        code: `import React, { useState } from 'react';

interface MinimalInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const MinimalInput: React.FC<MinimalInputProps> = ({ 
  placeholder = "Enter text...", 
  className = "",
  value: controlledValue,
  onChange
}) => {
  const [internalValue, setInternalValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);
  
  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const handleChange = (newValue: string) => {
    if (onChange) {
      onChange(newValue);
    } else {
      setInternalValue(newValue);
    }
  };
  
  return (
    <div className={\`relative \${className}\`}>
      <input
        type="text"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg"
        placeholder={placeholder}
      />
      <div className={\`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${focused || value ? 'w-full' : 'w-0'}\`} />
    </div>
  );
};

export default MinimalInput;`,
        extension: "tsx",
        language: "typescript",
        dependencies: ["react", "@types/react"],
        imports: ["react"],
        exports: ["MinimalInput"],
      },
      vue: {
        code: `<template>
  <div :class="containerClasses">
    <input
      v-model="inputValue"
      type="text"
      :placeholder="placeholder"
      class="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg"
      @focus="focused = true"
      @blur="focused = false"
    />
    <div :class="underlineClasses" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

interface Props {
  placeholder?: string;
  className?: string;
  modelValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Enter text...',
  className: '',
  modelValue: ''
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
}>();

const focused = ref(false);
const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

const containerClasses = computed(() => 
  \`relative \${props.className}\`
);

const underlineClasses = computed(() => 
  \`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${focused.value || inputValue.value ? 'w-full' : 'w-0'}\`
);
</script>`,
        extension: "vue",
        language: "typescript",
        dependencies: ["vue"],
        imports: ["vue"],
        exports: ["default"],
      },
      svelte: {
        code: `<script lang="ts">
  export let placeholder: string = 'Enter text...';
  export let className: string = '';
  export let value: string = '';
  
  let focused = false;
  
  $: containerClasses = \`relative \${className}\`;
  $: underlineClasses = \`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${focused || value ? 'w-full' : 'w-0'}\`;
</script>

<div class={containerClasses}>
  <input
    bind:value
    type="text"
    {placeholder}
    class="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg"
    on:focus={() => focused = true}
    on:blur={() => focused = false}
  />
  <div class={underlineClasses} />
</div>`,
        extension: "svelte",
        language: "typescript",
        dependencies: ["svelte"],
        imports: [],
        exports: ["default"],
      },
      angular: {
        code: `import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-minimal-input',
  template: \`
    <div [class]="containerClasses">
      <input
        type="text"
        [value]="value"
        [placeholder]="placeholder"
        class="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg"
        (input)="onInput($event)"
        (focus)="onFocus()"
        (blur)="onBlur()"
      />
      <div [class]="underlineClasses"></div>
    </div>
  \`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MinimalInputComponent),
      multi: true
    }
  ]
})
export class MinimalInputComponent implements ControlValueAccessor {
  @Input() placeholder: string = 'Enter text...';
  @Input() className: string = '';
  @Output() valueChange = new EventEmitter<string>();

  value: string = '';
  focused: boolean = false;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  get containerClasses(): string {
    return \`relative \${this.className}\`;
  }

  get underlineClasses(): string {
    return \`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${this.focused || this.value ? 'w-full' : 'w-0'}\`;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  onFocus(): void {
    this.focused = true;
  }

  onBlur(): void {
    this.focused = false;
    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}`,
        extension: "ts",
        language: "typescript",
        dependencies: ["@angular/core", "@angular/forms"],
        imports: ["@angular/core", "@angular/forms"],
        exports: ["MinimalInputComponent"],
      },
      vanilla: {
        code: `class MinimalInput {
  constructor(element, options = {}) {
    this.element = element;
    this.placeholder = options.placeholder || 'Enter text...';
    this.className = options.className || '';
    this.value = '';
    this.focused = false;
    this.onChange = options.onChange || (() => {});
    this.init();
  }

  init() {
    // Create container
    const container = document.createElement('div');
    container.className = \`relative \${this.className}\`;
    
    // Create input
    this.input = document.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = this.placeholder;
    this.input.className = 'w-full px-0 py-4 bg-transparent border-0 border-b-2 border-gray-200 text-black placeholder-gray-400 focus:border-black focus:outline-none transition-all duration-300 text-lg';
    
    // Create underline
    this.underline = document.createElement('div');
    this.updateUnderlineClasses();
    
    // Add event listeners
    this.input.addEventListener('input', this.handleInput.bind(this));
    this.input.addEventListener('focus', this.handleFocus.bind(this));
    this.input.addEventListener('blur', this.handleBlur.bind(this));
    
    // Assemble structure
    container.appendChild(this.input);
    container.appendChild(this.underline);
    
    // Replace original element
    this.element.parentNode.replaceChild(container, this.element);
    this.element = container;
  }

  handleInput(e) {
    this.value = e.target.value;
    this.updateUnderlineClasses();
    this.onChange(this.value);
  }

  handleFocus() {
    this.focused = true;
    this.updateUnderlineClasses();
  }

  handleBlur() {
    this.focused = false;
    this.updateUnderlineClasses();
  }

  updateUnderlineClasses() {
    const hasContent = this.focused || this.value;
    this.underline.className = \`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 \${hasContent ? 'w-full' : 'w-0'}\`;
  }

  setValue(newValue) {
    this.value = newValue;
    this.input.value = newValue;
    this.updateUnderlineClasses();
  }

  getValue() {
    return this.value;
  }

  destroy() {
    this.input.removeEventListener('input', this.handleInput);
    this.input.removeEventListener('focus', this.handleFocus);
    this.input.removeEventListener('blur', this.handleBlur);
  }
}

// Usage: new MinimalInput(document.getElementById('my-input'));
export { MinimalInput };`,
        extension: "js",
        language: "javascript",
        dependencies: [],
        imports: [],
        exports: ["MinimalInput"],
      },
    },
    metadata: {
      difficulty: "beginner",
      tags: ["input", "form", "animation", "focus"],
      lastUpdated: "2024-01-15",
    },
  },

  "toggle-switch": {
    id: "toggle-switch",
    name: "Toggle Switch",
    description: "Smooth toggle switch with state management",
    preview: "toggle switch",
    type: "toggle",
    category: "toggle",
    frameworks: {
      react: {
        code: `import React, { useState } from 'react';

interface ToggleSwitchProps {
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  checked?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ 
  defaultChecked = false, 
  onChange, 
  className = "",
  checked: controlledChecked
}) => {
  const [internalChecked, setInternalChecked] = useState<boolean>(defaultChecked);
  
  const checked = controlledChecked !== undefined ? controlledChecked : internalChecked;
  
  const handleToggle = () => {
    const newChecked = !checked;
    if (controlledChecked === undefined) {
      setInternalChecked(newChecked);
    }
    onChange?.(newChecked);
  };
  
  return (
    <button
      type="button"
      onClick={handleToggle}
      className={\`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${checked ? 'bg-black' : 'bg-gray-300'} \${className}\`}
      aria-label={\`Toggle switch, currently \${checked ? 'on' : 'off'}\`}
      title={\`Toggle switch, currently \${checked ? 'on' : 'off'}\`}
    >
      <div
        className={\`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${checked ? 'translate-x-7' : 'translate-x-0.5'}\`}
      />
    </button>
  );
};

export default ToggleSwitch;`,
        extension: "tsx",
        language: "typescript",
        dependencies: ["react", "@types/react"],
        imports: ["react"],
        exports: ["ToggleSwitch"],
      },
      vue: {
        code: `<template>
  <button
    type="button"
    :class="buttonClasses"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    @click="handleToggle"
  >
    <div :class="knobClasses" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  defaultChecked?: boolean;
  className?: string;
  modelValue?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  defaultChecked: false,
  className: '',
  modelValue: undefined
});

const emit = defineEmits<{
  'update:modelValue': [checked: boolean];
  change: [checked: boolean];
}>();

const checked = computed(() => 
  props.modelValue !== undefined ? props.modelValue : props.defaultChecked
);

const buttonClasses = computed(() => 
  \`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${checked.value ? 'bg-black' : 'bg-gray-300'} \${props.className}\`
);

const knobClasses = computed(() => 
  \`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${checked.value ? 'translate-x-7' : 'translate-x-0.5'}\`
);

const ariaLabel = computed(() => 
  \`Toggle switch, currently \${checked.value ? 'on' : 'off'}\`
);

const handleToggle = () => {
  const newChecked = !checked.value;
  emit('update:modelValue', newChecked);
  emit('change', newChecked);
};
</script>`,
        extension: "vue",
        language: "typescript",
        dependencies: ["vue"],
        imports: ["vue"],
        exports: ["default"],
      },
      svelte: {
        code: `<script lang="ts">
  export let defaultChecked: boolean = false;
  export let className: string = '';
  export let checked: boolean = defaultChecked;
  export let onChange: ((checked: boolean) => void) | undefined = undefined;
  
  $: buttonClasses = \`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${checked ? 'bg-black' : 'bg-gray-300'} \${className}\`;
  $: knobClasses = \`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${checked ? 'translate-x-7' : 'translate-x-0.5'}\`;
  $: ariaLabel = \`Toggle switch, currently \${checked ? 'on' : 'off'}\`;
  
  const handleToggle = () => {
    checked = !checked;
    onChange?.(checked);
  };
</script>

<button
  type="button"
  class={buttonClasses}
  aria-label={ariaLabel}
  title={ariaLabel}
  on:click={handleToggle}
>
  <div class={knobClasses} />
</button>`,
        extension: "svelte",
        language: "typescript",
        dependencies: ["svelte"],
        imports: [],
        exports: ["default"],
      },
      angular: {
        code: `import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle-switch',
  template: \`
    <button
      type="button"
      [class]="buttonClasses"
      [attr.aria-label]="ariaLabel"
      [title]="ariaLabel"
      (click)="handleToggle()"
    >
      <div [class]="knobClasses"></div>
    </button>
  \`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitchComponent),
      multi: true
    }
  ]
})
export class ToggleSwitchComponent implements ControlValueAccessor {
  @Input() defaultChecked: boolean = false;
  @Input() className: string = '';
  @Output() change = new EventEmitter<boolean>();

  checked: boolean = false;

  private onChange = (checked: boolean) => {};
  private onTouched = () => {};

  get buttonClasses(): string {
    return \`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${this.checked ? 'bg-black' : 'bg-gray-300'} \${this.className}\`;
  }

  get knobClasses(): string {
    return \`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${this.checked ? 'translate-x-7' : 'translate-x-0.5'}\`;
  }

  get ariaLabel(): string {
    return \`Toggle switch, currently \${this.checked ? 'on' : 'off'}\`;
  }

  ngOnInit(): void {
    this.checked = this.defaultChecked;
  }

  handleToggle(): void {
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.change.emit(this.checked);
    this.onTouched();
  }

  // ControlValueAccessor implementation
  writeValue(checked: boolean): void {
    this.checked = checked || false;
  }

  registerOnChange(fn: (checked: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}`,
        extension: "ts",
        language: "typescript",
        dependencies: ["@angular/core", "@angular/forms"],
        imports: ["@angular/core", "@angular/forms"],
        exports: ["ToggleSwitchComponent"],
      },
      vanilla: {
        code: `class ToggleSwitch {
  constructor(element, options = {}) {
    this.element = element;
    this.defaultChecked = options.defaultChecked || false;
    this.className = options.className || '';
    this.checked = this.defaultChecked;
    this.onChange = options.onChange || (() => {});
    this.init();
  }

  init() {
    // Create button
    this.button = document.createElement('button');
    this.button.type = 'button';
    this.updateButtonClasses();
    this.updateAriaLabel();
    
    // Create knob
    this.knob = document.createElement('div');
    this.updateKnobClasses();
    
    // Add event listener
    this.button.addEventListener('click', this.handleToggle.bind(this));
    
    // Assemble structure
    this.button.appendChild(this.knob);
    
    // Replace original element
    this.element.parentNode.replaceChild(this.button, this.element);
    this.element = this.button;
  }

  handleToggle() {
    this.checked = !this.checked;
    this.updateButtonClasses();
    this.updateKnobClasses();
    this.updateAriaLabel();
    this.onChange(this.checked);
  }

  updateButtonClasses() {
    this.button.className = \`relative w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-200 \${this.checked ? 'bg-black' : 'bg-gray-300'} \${this.className}\`;
  }

  updateKnobClasses() {
    this.knob.className = \`absolute top-0.5 w-6 h-6 bg-white rounded-full transition-all duration-300 shadow-md \${this.checked ? 'translate-x-7' : 'translate-x-0.5'}\`;
  }

  updateAriaLabel() {
    const label = \`Toggle switch, currently \${this.checked ? 'on' : 'off'}\`;
    this.button.setAttribute('aria-label', label);
    this.button.setAttribute('title', label);
  }

  setChecked(newChecked) {
    this.checked = newChecked;
    this.updateButtonClasses();
    this.updateKnobClasses();
    this.updateAriaLabel();
  }

  isChecked() {
    return this.checked;
  }

  destroy() {
    this.button.removeEventListener('click', this.handleToggle);
  }
}

// Usage: new ToggleSwitch(document.getElementById('my-toggle'));
export { ToggleSwitch };`,
        extension: "js",
        language: "javascript",
        dependencies: [],
        imports: [],
        exports: ["ToggleSwitch"],
      },
    },
    metadata: {
      difficulty: "beginner",
      tags: ["toggle", "switch", "state", "interactive"],
      lastUpdated: "2024-01-15",
    },
  },

  "loading-spinner": {
    id: "loading-spinner",
    name: "Loading Spinner",
    description: "Animated loading spinner with size variants",
    preview: "loading spinner",
    type: "loading",
    category: "loading",
    frameworks: {
      react: {
        code: `import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };
  
  return (
    <div className={\`flex items-center justify-center \${className}\`}>
      <div className={\`\${sizeClasses[size]} relative\`}>
        <div className="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
        <div className="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;`,
        extension: "tsx",
        language: "typescript",
        dependencies: ["react", "@types/react"],
        imports: ["react"],
        exports: ["LoadingSpinner"],
      },
      vue: {
        code: `<template>
  <div :class="containerClasses">
    <div :class="spinnerClasses">
      <div class="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
      <div class="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  className: ''
});

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
};

const containerClasses = computed(() => 
  \`flex items-center justify-center \${props.className}\`
);

const spinnerClasses = computed(() => 
  \`\${sizeClasses[props.size]} relative\`
);
</script>`,
        extension: "vue",
        language: "typescript",
        dependencies: ["vue"],
        imports: ["vue"],
        exports: ["default"],
      },
      svelte: {
        code: `<script lang="ts">
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let className: string = '';
  
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };
  
  $: containerClasses = \`flex items-center justify-center \${className}\`;
  $: spinnerClasses = \`\${sizeClasses[size]} relative\`;
</script>

<div class={containerClasses}>
  <div class={spinnerClasses}>
    <div class="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
    <div class="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
  </div>
</div>`,
        extension: "svelte",
        language: "typescript",
        dependencies: ["svelte"],
        imports: [],
        exports: ["default"],
      },
      angular: {
        code: `import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  template: \`
    <div [class]="containerClasses">
      <div [class]="spinnerClasses">
        <div class="absolute inset-0 border-2 border-gray-200 rounded-full"></div>
        <div class="absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  \`,
  styles: []
})
export class LoadingSpinnerComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() className: string = '';

  private sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  get containerClasses(): string {
    return \`flex items-center justify-center \${this.className}\`;
  }

  get spinnerClasses(): string {
    return \`\${this.sizeClasses[this.size]} relative\`;
  }
}`,
        extension: "ts",
        language: "typescript",
        dependencies: ["@angular/core"],
        imports: ["@angular/core"],
        exports: ["LoadingSpinnerComponent"],
      },
      vanilla: {
        code: `class LoadingSpinner {
  constructor(element, options = {}) {
    this.element = element;
    this.size = options.size || 'md';
    this.className = options.className || '';
    this.init();
  }

  init() {
    const sizeClasses = {
      sm: 'w-4 h-4',
      md: 'w-8 h-8',
      lg: 'w-12 h-12'
    };

    // Create container
    const container = document.createElement('div');
    container.className = \`flex items-center justify-center \${this.className}\`;
    
    // Create spinner wrapper
    const spinnerWrapper = document.createElement('div');
    spinnerWrapper.className = \`\${sizeClasses[this.size]} relative\`;
    
    // Create background circle
    const backgroundCircle = document.createElement('div');
    backgroundCircle.className = 'absolute inset-0 border-2 border-gray-200 rounded-full';
    
    // Create spinning circle
    const spinningCircle = document.createElement('div');
    spinningCircle.className = 'absolute inset-0 border-2 border-black border-t-transparent rounded-full animate-spin';
    
    // Assemble structure
    spinnerWrapper.appendChild(backgroundCircle);
    spinnerWrapper.appendChild(spinningCircle);
    container.appendChild(spinnerWrapper);
    
    // Replace original element
    this.element.parentNode.replaceChild(container, this.element);
    this.element = container;
  }

  setSize(newSize) {
    this.size = newSize;
    // Re-initialize with new size
    this.init();
  }

  destroy() {
    // No event listeners to clean up for this component
  }
}

// Usage: new LoadingSpinner(document.getElementById('my-spinner'));
export { LoadingSpinner };`,
        extension: "js",
        language: "javascript",
        dependencies: [],
        imports: [],
        exports: ["LoadingSpinner"],
      },
    },
    metadata: {
      difficulty: "beginner",
      tags: ["loading", "spinner", "animation"],
      lastUpdated: "2024-01-15",
    },
  },
};

export default multiFrameworkTemplates;
