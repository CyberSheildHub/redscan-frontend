import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/tailwind.css";

// Optional global hacker vibe CSS tweaks
import "./styles/global.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b0f12] text-slate-200 font-mono">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

