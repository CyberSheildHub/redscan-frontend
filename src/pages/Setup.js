import React, { useState } from "react";
import { startPairing } from "../api";

export default function Setup() {
  const [org, setOrg] = useState("org_anon");
  const [code, setCode] = useState("");
  const [expires, setExpires] = useState(null);
  const [err, setErr] = useState("");

  async function handlePair() {
    setErr("");
    try {
      const { pairing_code, expires_at } = await startPairing(org);
      setCode(pairing_code);
      setExpires(new Date(expires_at * 1000).toLocaleTimeString());
    } catch (e) {
      setErr(String(e));
    }
  }

  return (
    <div className="ra-container space-y-6">
      <div className="ra-card ra-glass p-8">
        <h2 className="text-xl font-bold text-emerald-300 mb-2">🔗 Pair your device</h2>
        <p className="text-sm text-zinc-400 mb-6">
          1) Click <b>Generate Code</b> → 2) Download bundle or launcher → 3) Run it
          and start streaming events instantly.
        </p>

        <div className="flex gap-3 flex-wrap mb-4">
          <input
            value={org}
            onChange={(e) => setOrg(e.target.value)}
            placeholder="Organization ID"
            className="flex-1 bg-black/40 border border-white/10 rounded px-4 py-2 text-zinc-200 outline-none"
          />
          <button className="ra-btn ra-btn-primary" onClick={handlePair}>
            🚀 Generate Code
          </button>
        </div>

        {err && <p className="text-red-400 text-sm mb-3">{err}</p>}

        {!code && (
          <div className="mt-4">
            <a className="ra-btn ra-btn-secondary" href="/downloads/pair_and_run.zip">
              ⬇️ Download Windows Bundle (ZIP)
            </a>
          </div>
        )}

        {code && (
          <>
            <h3 className="text-lg font-semibold text-cyan-300 mt-6">Pairing Code</h3>
            <div className="text-2xl font-mono text-emerald-300 bg-black/40 border border-emerald-400 rounded-lg p-4 text-center ra-glow">
              {code}
            </div>
            <p className="text-sm text-zinc-400 mt-2">Expires at: {expires}</p>

            <div className="flex flex-wrap gap-3 mt-5">
              <a
                className="ra-btn ra-btn-primary"
                href={`/v1/downloads/pair_cmd?code=${encodeURIComponent(code)}`}
              >
                ⚙️ Download Launcher (.cmd)
              </a>
              <a className="ra-btn ra-btn-secondary" href="/downloads/pair_and_run.zip">
                ⬇️ Download Bundle ZIP
              </a>
            </div>

            <h4 className="text-sm text-zinc-400 mt-6">Manual (advanced)</h4>
            <pre className="bg-black/50 text-emerald-300 text-xs p-3 rounded-lg overflow-x-auto">
{`set RS_ENDPOINT=${window.location.origin}
set RS_PAIR_CODE=${code}
redscan_agent.exe`}
            </pre>
          </>
        )}
      </div>
    </div>
  );
}

