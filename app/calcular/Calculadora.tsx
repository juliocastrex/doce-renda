'use client';

import { useMemo, useState } from 'react';
import { formatBRL } from '@/lib/utils';
import { showToast } from '@/components/Toast';

const META = 2000;

export default function Calculadora() {
  const [preco, setPreco] = useState<number>(15);
  const [custo, setCusto] = useState<number>(4);
  const [qtd, setQtd] = useState<number>(50);

  const lucroPorCaixa = Math.max(preco - custo, 0);
  const lucroMensal = lucroPorCaixa * qtd;

  const caixinhasPraMeta = useMemo(() => {
    if (lucroPorCaixa <= 0) return null;
    return Math.ceil(META / lucroPorCaixa);
  }, [lucroPorCaixa]);

  const progresso = Math.min(Math.round((lucroMensal / META) * 100), 100);

  return (
    <div className="container-app pt-5 space-y-5">
      <div className="card space-y-5">
        <Campo
          label="Quanto você cobra por caixinha de doce?"
          value={preco}
          onChange={setPreco}
          prefix="R$"
        />
        <Campo
          label="Quanto você gasta de ingredientes por caixinha?"
          value={custo}
          onChange={setCusto}
          prefix="R$"
        />
        <Campo
          label="Quantas caixinhas você consegue vender por mês?"
          value={qtd}
          onChange={setQtd}
        />
      </div>

      <div className="rounded-card bg-cream border-2 border-caramel p-5 text-center">
        <p className="text-[13px] text-amberDark uppercase tracking-wide">Seu lucro mensal projetado</p>
        <p className="mt-2 text-[34px] font-medium text-espresso leading-tight">
          {formatBRL(lucroMensal)}
        </p>
        <p className="mt-1 text-[13px] text-cocoa">
          {formatBRL(lucroPorCaixa)} de lucro por caixinha
        </p>
      </div>

      <div className="card">
        <p className="text-[15px] text-espresso leading-relaxed">
          {caixinhasPraMeta
            ? <>Pra alcançar a meta de <span className="font-medium">{formatBRL(META)}</span> por mês, você precisaria vender <span className="font-medium">{caixinhasPraMeta} caixinhas</span> ao preço atual.</>
            : <>Pra ter lucro, seu preço de venda precisa ser maior que o custo dos ingredientes.</>
          }
        </p>
        <div className="mt-4">
          <div className="h-3 w-full rounded-full bg-caramel/30 overflow-hidden">
            <div
              className="h-full bg-amber transition-all"
              style={{ width: `${progresso}%` }}
            />
          </div>
          <p className="mt-2 text-[13px] text-amberDark">{progresso}% da meta</p>
        </div>
      </div>

      <button
        type="button"
        className="btn-secondary"
        onClick={() => showToast('Salvo')}
      >
        Salvar minhas metas
      </button>
    </div>
  );
}

function Campo({
  label, value, onChange, prefix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  prefix?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[14px] text-cocoa mb-2">{label}</span>
      <div className="flex items-center gap-2 rounded-lg border border-caramel/70 bg-white px-3 py-3 focus-within:border-amber">
        {prefix && <span className="text-[16px] text-amberDark">{prefix}</span>}
        <input
          type="number"
          inputMode="decimal"
          min={0}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent text-[18px] font-medium text-espresso outline-none"
        />
      </div>
    </label>
  );
}
