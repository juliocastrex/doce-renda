'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import type { Video } from '@/lib/content/colecoes';

export default function VideoList({ videos }: { videos: Video[] }) {
  const [open, setOpen] = useState<Video | null>(null);

  return (
    <>
      <ul className="space-y-3">
        {videos.map((v, i) => (
          <li key={i}>
            <button
              type="button"
              onClick={() => setOpen(v)}
              className="card flex items-center gap-3 w-full text-left active:scale-[0.99] transition"
            >
              <div className="relative h-[72px] w-[120px] shrink-0 overflow-hidden rounded-lg bg-cream">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-8 w-8 rounded-full bg-white/90 flex items-center justify-center shadow-soft">
                    <Play size={16} className="text-amber ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-medium text-espresso leading-snug line-clamp-2">{v.titulo}</p>
                {v.duracao && <p className="text-[12px] text-amberDark mt-1">{v.duracao}</p>}
              </div>
            </button>
          </li>
        ))}
      </ul>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-espresso/80 flex items-end sm:items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <div
            className="bg-white rounded-card w-full max-w-[480px] overflow-hidden shadow-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-caramel/40">
              <p className="text-[14px] font-medium text-espresso pr-3 line-clamp-1">{open.titulo}</p>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="Fechar"
                className="h-9 w-9 flex items-center justify-center rounded-full text-cocoa active:bg-caramel/30"
              >
                <X size={20} />
              </button>
            </div>
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${open.youtubeId}?autoplay=1`}
                title={open.titulo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
