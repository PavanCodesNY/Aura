 Project Overview

  - Name: AI UI Component Generator (codename "Aura")
  - Type: React-based web application for generating UI components using AI
  - Purpose: Allows users to describe components in natural language and get generated code with live preview

  Tech Stack & Architecture

  - Framework: React 18 with TypeScript
  - Build Tool: Vite 4.4.5 with HMR
  - Styling: Tailwind CSS 3.3.3 + PostCSS
  - Icons: Lucide React
  - AI Integration: OpenRouter API (Claude 3.5 Sonnet) with fallback mode

  Key Architectural Patterns

  - Multi-framework support: Can generate components for React, Vue, Svelte, Angular, and Vanilla JS
  - Modular service architecture: Separate services for AI, framework management, template processing
  - Template engine system: Extensible template system with processors for each framework
  - Syntax highlighting: Framework-specific highlighters for code display

  Project Structure

  src/
  ├── components/          # UI components including generators and viewers
  ├── data/               # Static data (templates, personalities, frameworks)
  ├── services/           # Business logic (AI, framework management, templates)
  ├── types/              # TypeScript definitions
  └── utils/              # Utilities (syntax highlighters)

  Core Features

  - Dual AI modes: Real AI (OpenRouter API) + fallback pattern matching
  - Live preview: Real-time component rendering with interactive examples
  - Code export: Generated code can be copied in multiple framework formats
  - Resizable interface: Split-pane layout with adjustable sidebar
  - Keyboard shortcuts: Framework switching (⌘1-5), code viewer toggle (⌘K)

  Key Services & APIs

  - aiService.ts: Handles OpenRouter API calls and fallback responses
  - frameworkManager.ts: Manages framework switching and state
  - templateEngine.ts: Processes and converts between framework templates
  - Multi-framework template processors for each supported framework

  Configuration Files

  - Vite: Standard React setup, runs on port 3000
  - Tailwind: Extended with custom animations (bounce, spin, pulse)
  - TypeScript: Strict mode enabled for both app and build configs

  State Management

  - React hooks-based state management
  - Local storage for API keys and settings persistence
  - No external state management library (Redux/Zustand)

  Important Dependencies

  - React 18.2.0 + React DOM
  - Lucide React for icons
  - TypeScript 5.9.2
  - Vite build system with React plugin
