# AI UI Component Generator

> An open-source AI-powered tool for generating beautiful, interactive React components with real-time preview and code export.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC.svg)](https://tailwindcss.com/)

## ✨ Features

- 🤖 **AI-Powered Generation** - Create components from natural language descriptions
- 🎨 **Live Preview** - See your components render in real-time
- 📋 **Code Export** - Copy generated React code instantly
- 🔌 **OpenRouter Integration** - Connect to Claude 3.5 Sonnet for advanced AI responses
- 🎯 **Fallback Mode** - Works without API key using smart pattern matching
- 🎭 **Interactive Components** - Magnetic buttons, glowing cards, animated inputs, and more
- 🎨 **Beautiful UI** - Clean, minimal design with smooth animations
- 📱 **Responsive** - Works perfectly on desktop and mobile

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/ai-component-generator.git
   cd ai-component-generator
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎯 Usage

### Basic Usage (No API Key Required)

1. Type a component description like "create a magnetic button"
2. Watch the AI generate and preview your component
3. Copy the generated React code
4. Use it in your projects!

### Advanced Usage (With OpenRouter API)

1. Get an API key from [OpenRouter](https://openrouter.ai)
2. Click the settings icon in the app
3. Enter your API key (format: `sk-or-...`)
4. Enjoy real AI-powered conversations with Claude 3.5 Sonnet

## 🧩 Available Components

| Component           | Description                         | Trigger Words                  |
| ------------------- | ----------------------------------- | ------------------------------ |
| **Magnetic Button** | Cursor-following interactive button | "button", "magnetic", "cursor" |
| **Glowing Card**    | Mouse-tracking glow effects         | "card", "glow", "hover"        |
| **Minimal Input**   | Clean form field with animations    | "input", "field", "form"       |
| **Loading Spinner** | Elegant loading indicator           | "loading", "spinner"           |
| **Toggle Switch**   | Smooth toggle with animations       | "toggle", "switch"             |

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Icons**: Lucide React
- **AI**: OpenRouter API (Claude 3.5 Sonnet)
- **Build**: Vite with HMR

## 📁 Project Structure

```
ai-component-generator/
├── public/
├── src/
│   ├── components/
│   │   └── UIComponentGenerator.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🔧 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Adding New Components

1. Add component template to `componentTemplates` object
2. Add trigger words to `generateAIResponse` function
3. Add preview case to `renderPreview` function
4. Create the preview component at the bottom of the file

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

1. Build the project: `npm run build`
2. Drag & drop the `dist` folder to Netlify

### GitHub Pages

```bash
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Contribution Ideas

- 🎨 New component templates
- 🌍 Framework support (Vue, Angular, Svelte)
- 🎭 More styling options (SCSS, Styled Components)
- 🔧 Better AI prompting
- 📱 Mobile improvements
- 🌐 Internationalization

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenRouter](https://openrouter.ai) for AI API access
- [Tailwind CSS](https://tailwindcss.com) for styling
- [Lucide](https://lucide.dev) for beautiful icons
- [Vite](https://vitejs.dev) for lightning-fast development

## 📞 Support

- 🐛 **Bug Reports**: [Open an issue](https://github.com/yourusername/ai-component-generator/issues)
- 💡 **Feature Requests**: [Start a discussion](https://github.com/yourusername/ai-component-generator/discussions)
- 📧 **Email**: your.email@example.com

## 🌟 Show Your Support

If this project helped you, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code

---

**Made with ❤️ by the open source community**
