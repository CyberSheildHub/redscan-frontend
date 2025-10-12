import React, { useEffect, useRef, useState } from "react";
import LiveFeed from "../components/LiveFeed";
import { openStream } from "../api";

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const wsRef = useRef(null);

  useEffect(() => {
    wsRef.current = openStream((msg) => {
      setItems((prev) => [msg, ...prev].slice(0, 100));
    });
    return () => {
      try {
        wsRef.current && wsRef.current.close();
      } catch {}
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="ra-card ra-glass p-6">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-2">📡 Live Alerts & Events</h2>
        <p className="text-sm text-slate-400 mb-4">
          Streaming from your endpoints in real time.
        </p>
        <LiveFeed items={items} />
      </div>
    </div>
  );
}

