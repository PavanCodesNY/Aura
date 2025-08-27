import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ragService } from "./services/ragService";

// Import RAG test and API debug in development mode
if (import.meta.env.DEV) {
  import("./services/ragTest");
  import("./debug/apiTest");
  import("./debug/openrouterTest");
}

// Initialize RAG service
ragService.initialize().then(() => {
  console.log("🤖 RAG Service initialized successfully");
}).catch((error) => {
  console.warn("⚠️ RAG Service initialization failed:", error);
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
