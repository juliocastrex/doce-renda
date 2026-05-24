import { notFound } from 'next/navigation';
import { FileText } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { colecoes, getColecao } from '@/lib/content/colecoes';
import VideoList from './VideoList';

export function generateStaticParams() {
  return colecoes.map((c) => ({ slug: c.slug }));
}

export default function ColecaoPage({ params }: { params: { slug: string } }) {
  const c = getColecao(params.slug);
  if (!c) notFound();

  return (
    <div className="min-h-screen bg-cream pb-12">
      <SectionHeader title={c.nome} backHref="/aprender" />

      <section className="container-app pt-5">
        <p className="text-[15px] text-cocoa leading-relaxed">{c.descricao}</p>
      </section>

      <section className="container-app mt-5">
        <a
          href={c.pdfPath}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <FileText size={20} className="mr-2" />
          Abrir ebook completo (PDF)
        </a>
        <p className="mt-2 text-center text-[12px] text-amberDark">
          {c.totalReceitas} receitas no PDF
        </p>
      </section>

      {c.videos.length > 0 && (
        <section className="container-app mt-8">
          <h2 className="text-[18px] font-medium text-espresso mb-3">Vídeos da coleção</h2>
          <VideoList videos={c.videos} />
        </section>
      )}
    </div>
  );
}
