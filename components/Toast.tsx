'use client';

import { useEffect, useState } from 'react';

let _push: ((msg: string) => void) | null = null;

export function showToast(msg: string) {
  _push?.(msg);
}

export default function ToastHost() {
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    _push = (m: string) => {
      setMsg(m);
      window.clearTimeout((window as any).__toastT);
      (window as any).__toastT = window.setTimeout(() => setMsg(null), 2000);
    };
    return () => { _push = null; };
  }, []);

  if (!msg) return null;
  return (
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-none px-4">
      <div className="bg-espresso text-white text-sm px-4 py-3 rounded-lg shadow-soft">
        {msg}
      </div>
    </div>
  );
}
