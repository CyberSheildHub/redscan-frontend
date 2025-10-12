import React from "react";

export default function LiveFeed({ items }) {
  if (!items.length) {
    return (
      <div className="ra-card text-center text-zinc-400">
        🚀 No events yet — pair an agent and start generating activity.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {items.map((it, idx) => {
        const ev = it.event || it;   // fallback if backend pushes raw
        const vd = it.verdict || {};

        const badgeColor =
          vd.severity === "high"
            ? "bg-red-600/40 text-red-300"
            : vd.severity === "medium"
            ? "bg-amber-600/40 text-amber-300"
            : "bg-cyan-600/40 text-cyan-300";

        return (
          <div
            key={idx}
            className="ra-card ra-glass p-4 space-y-3 border border-white/10 rounded-xl"
          >
            <div className="flex justify-between items-center">
              <div className="text-sm text-zinc-300">
                <b className="text-cyan-300">{ev.kind}</b> •{" "}
                <span className="text-zinc-400">{ev.ts}</span>
              </div>
              {vd.severity && (
                <span
                  className={`px-3 py-1 text-xs font-semibold rounded-full ${badgeColor}`}
                >
                  {vd.severity.toUpperCase()}
                </span>
              )}
            </div>

            <pre className="text-xs bg-black/40 p-3 rounded-lg text-emerald-300 overflow-auto max-h-48">
              {JSON.stringify(ev, null, 2)}
            </pre>

            {vd.reason && (
              <p className="text-sm text-zinc-300">
                <b className="text-emerald-400">AI verdict:</b>{" "}
                {vd.reason}{" "}
                <span className="text-zinc-500">
                  (score {vd.score ?? "n/a"})
                </span>
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

