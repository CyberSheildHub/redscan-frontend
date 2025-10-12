import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Landing from "./pages/Landing";
import Setup from "./pages/Setup";
import Dashboard from "./pages/Dashboard";

const Nav = () => (
  <header className="bg-dark border-b border-white/10 sticky top-0 z-50">
    <div className="ra-container flex items-center justify-between py-3">
      <NavLink to="/" className="text-emerald-400 font-bold text-xl tracking-wide">
        RedScan
      </NavLink>
      <nav className="flex gap-6 text-slate-300 text-sm">
        <NavLink
          to="/setup"
          className={({ isActive }) =>
            `hover:text-emerald-400 transition ${isActive ? "text-emerald-400" : ""}`
          }
        >
          Setup
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `hover:text-emerald-400 transition ${isActive ? "text-emerald-400" : ""}`
          }
        >
          Dashboard
        </NavLink>
      </nav>
    </div>
  </header>
);

export default function App() {
  return (
    <>
      <Nav />
      <main className="ra-container py-8 space-y-8">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </>
  );
}

