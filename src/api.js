// Same origin calls: Nginx proxies /v1/* to FastAPI.
const API_BASE = ""; // empty = same domain

export async function startPairing(orgId) {
  const res = await fetch(`${API_BASE}/v1/pairing/start`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ org_id: orgId })
  });
  if (!res.ok) throw new Error(`pairing failed: ${res.status}`);
  return res.json(); // { pairing_code, expires_at }
}

// WebSocket stream for live events/alerts
export function openStream(onMessage){
  const proto = window.location.protocol === "https:" ? "wss" : "ws";
  const ws = new WebSocket(`${proto}://${window.location.host}/v1/stream`);
  ws.onmessage = (e) => {
    try { onMessage(JSON.parse(e.data)); } catch {}
  };
  return ws;
}

