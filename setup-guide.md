# AI UI Component Generator - Local Setup Guide

## 🚀 Quick Start

This project is built with **React + Vite + Tailwind CSS**. Follow these steps to run it locally:

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### 1. Project Structure
Create a new folder and set up these files:

```
ai-component-generator/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       └── UIComponentGenerator.jsx
```

### 2. Package.json
```json
{
  "name": "ai-component-generator",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.27",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.5"
  }
}
```

### 3. Vite Config (vite.config.js)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

### 4. Tailwind Config (tailwind.config.js)
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce': 'bounce 1s infinite',
        'spin': 'spin 1s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
```

### 5. PostCSS Config (postcss.config.js)
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 6. HTML Template (index.html)
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AI Component Generator</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 7. Main Entry Point (src/main.jsx)
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 8. App Component (src/App.jsx)
```javascript
import UIComponentGenerator from './components/UIComponentGenerator'

function App() {
  return <UIComponentGenerator />
}

export default App
```

### 9. Global Styles (src/index.css)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

#root {
  height: 100vh;
  width: 100vw;
}
```

### 10. Main Component File (src/components/UIComponentGenerator.jsx)
Copy the entire component code from the artifact above into this file.

## 🛠️ Installation & Running

### Step 1: Install Dependencies
```bash
cd ai-component-generator
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Step 3: Configure OpenRouter API
1. Go to [openrouter.ai](https://openrouter.ai) and create an account
2. Generate an API key
3. In the app, click the settings icon in the top-right
4. Paste your API key (format: `sk-or-...`)
5. The AI will now use real Claude 3.5 Sonnet for responses!

## 📦 Building for Production

```bash
npm run build
npm run preview
```

## 🔑 API Configuration

### OpenRouter API Key Setup:
- **Free tier**: $5 credit to start
- **Model**: Claude 3.5 Sonnet (best for UI/UX tasks)
- **Cost**: ~$0.003 per message (very affordable)
- **Fallback**: Works without API key using pre-built responses

### Environment Variables (Optional):
Create `.env.local`:
```
VITE_OPENROUTER_API_KEY=your_key_here
```

Then modify the component to use:
```javascript
const [apiKey, setApiKey] = useState(import.meta.env.VITE_OPENROUTER_API_KEY || '');
```

## 🎨 Features Included

### Real AI Integration:
- ✅ OpenRouter API integration
- ✅ Claude 3.5 Sonnet model
- ✅ Context-aware conversations
- ✅ Component type detection
- ✅ Fallback mode without API

### Advanced UI:
- ✅ Minimalist chat interface
- ✅ Stunning loading animations
- ✅ Live component preview
- ✅ Code generation & copy
- ✅ Black & white theme
- ✅ Responsive design

### Components Available:
- ✅ Magnetic Button (cursor-following)
- ✅ Glowing Card (mouse-tracking glow)
- ✅ Minimal Input (floating label)
- ✅ Loading Spinner (elegant animation)
- ✅ Toggle Switch (smooth transitions)

## 🚀 Next Steps

### Extend the System:
1. **Add More Components**: Navigation, modals, sliders
2. **Framework Support**: Vue, Angular, Svelte versions  
3. **Styling Options**: SCSS, Styled Components, CSS-in-JS
4. **Advanced AI**: Custom prompting, style preferences
5. **Export Options**: CodePen, GitHub Gist, ZIP download

### Deploy Options:
- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package

## 💡 Usage Tips

### Best Prompts:
- "Create a magnetic button that follows my cursor smoothly"
- "I need a card with a subtle glow effect on hover"
- "Build me a clean input field with animated labels"
- "Make a toggle switch with smooth animations"

### API Cost Optimization:
- Responses are cached in conversation history
- Uses efficient prompt engineering
- Fallback mode for development without costs

---

**Happy coding! 🎉** Your AI-powered component generator is ready to create beautiful UI elements!