'use client';

import { useState } from 'react';
import { ChevronDown, Copy } from 'lucide-react';
import type { CategoriaScript, Script } from '@/lib/content/scripts';
import { showToast } from '@/components/Toast';
import { cn } from '@/lib/utils';

interface Props {
  categorias: { id: CategoriaScript; nome: string; descricao: string }[];
  scripts: Script[];
}

export default function Categorias({ categorias, scripts }: Props) {
  const [abertos, setAbertos] = useState<Record<string, boolean>>({ divulgacao: true });

  async function copiar(texto: string) {
    try {
      await navigator.clipboard.writeText(texto);
      showToast('Mensagem copiada');
    } catch {
      showToast('Não consegui copiar');
    }
  }

  return (
    <section className="container-app mt-5 space-y-3">
      {categorias.map((cat) => {
        const aberto = !!abertos[cat.id];
        const itens = scripts.filter((s) => s.categoria === cat.id);
        return (
          <div key={cat.id} className="card !p-0 overflow-hidden">
            <button
              type="button"
              onClick={() => setAbertos((a) => ({ ...a, [cat.id]: !aberto }))}
              className="w-full flex items-center justify-between gap-3 px-4 py-4 text-left active:bg-cream/50"
            >
              <div>
                <p className="text-[15px] font-medium text-espresso">{cat.nome}</p>
                <p className="text-[13px] text-cocoa mt-0.5">{cat.descricao}</p>
              </div>
              <ChevronDown
                size={20}
                className={cn('text-amberDark shrink-0 transition-transform', aberto && 'rotate-180')}
              />
            </button>

            {aberto && (
              <div className="border-t border-caramel/40 px-4 py-4 space-y-4 bg-cream/40">
                {itens.map((s, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-[14px] font-medium text-espresso">{s.titulo}</p>
                    <div className="rounded-lg bg-white border border-caramel/50 p-3 text-[14px] text-cocoa leading-relaxed whitespace-pre-wrap">
                      {s.mensagem}
                    </div>
                    <button
                      type="button"
                      onClick={() => copiar(s.mensagem)}
                      className="inline-flex items-center gap-2 text-[14px] font-medium text-amber active:opacity-70"
                    >
                      <Copy size={16} /> Copiar mensagem
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
