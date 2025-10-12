import React from "react";

export default function Landing() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="ra-card ra-glass p-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-4">
          Endpoint Defense, Simplified
        </h1>
        <p className="text-slate-300 max-w-2xl mx-auto mb-6">
          Live behavioral monitoring (process, file, network), AI triage, and instant visibility — all in one lightweight agent.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a className="ra-btn ra-btn-primary" href="/downloads/pair_and_run.zip">
            ⬇️ Download Windows Bundle
          </a>
          <a className="ra-btn ra-btn-secondary" href="/setup">
            ⚙️ Get Started
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="ra-card ra-glass p-6">
          <h3 className="text-lg font-semibold text-cyan-300">⚡ Real-time Telemetry</h3>
          <p className="text-sm text-slate-400 mt-2">
            Process starts, file changes, TCP connects — streamed to your dashboard in milliseconds.
          </p>
        </div>
        <div className="ra-card ra-glass p-6">
          <h3 className="text-lg font-semibold text-cyan-300">🤖 AI Triage</h3>
          <p className="text-sm text-slate-400 mt-2">
            Each event is scored for severity with a concise reason, helping you prioritize.
          </p>
        </div>
        <div className="ra-card ra-glass p-6">
          <h3 className="text-lg font-semibold text-cyan-300">🚀 No Friction</h3>
          <p className="text-sm text-slate-400 mt-2">
            Double-click to run. Or deploy silently later as a service/MSI.
          </p>
        </div>
      </div>
    </div>
  );
}

