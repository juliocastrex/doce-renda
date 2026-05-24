import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import Icon from '@/components/Icon';
import { colecoes } from '@/lib/content/colecoes';

export default function AprenderPage() {
  const totalReceitas = colecoes.reduce((s, c) => s + c.totalReceitas, 0);
  const totalColecoes = colecoes.length;

  return (
    <div className="min-h-screen bg-cream pb-12">
      <SectionHeader title="Quero aprender receitas" />

      <section className="container-app pt-5">
        <div className="card bg-white">
          <p className="text-[13px] text-amberDark uppercase tracking-wide">Sua biblioteca completa</p>
          <p className="mt-1 text-[18px] font-medium text-espresso">
            {totalReceitas} receitas em {totalColecoes} coleções
          </p>
        </div>
      </section>

      <section className="container-app mt-5 space-y-3">
        {colecoes.map((c) => (
          <Link
            key={c.slug}
            href={`/aprender/${c.slug}`}
            className="card flex items-center gap-4 active:scale-[0.99] transition"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cream">
              <Icon name={c.icone} size={26} className="text-amber" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[15px] font-medium text-espresso truncate">{c.nome}</p>
              <p className="text-[13px] text-cocoa mt-0.5">
                {c.totalReceitas} receitas · {c.totalVideos} vídeos
              </p>
            </div>
            <ChevronRight size={20} className="text-amberDark shrink-0" />
          </Link>
        ))}
      </section>
    </div>
  );
}
