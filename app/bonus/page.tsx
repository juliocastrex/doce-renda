import SectionHeader from '@/components/SectionHeader';
import Icon from '@/components/Icon';
import { bonus } from '@/lib/content/bonus';
import { Download, ExternalLink } from 'lucide-react';

export default function BonusPage() {
  return (
    <div className="min-h-screen bg-cream pb-12">
      <SectionHeader title="Quero mais bônus" />

      <section className="container-app pt-5">
        <p className="text-[15px] text-cocoa leading-relaxed">
          Materiais extras pra você turbinar suas vendas.
        </p>
      </section>

      <section className="container-app mt-5 grid grid-cols-1 gap-3">
        {bonus.map((b) => {
          const ExtIcon = b.tipo === 'link-externo' ? ExternalLink : Download;
          return (
            <div key={b.slug} className="card">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cream">
                  <Icon name={b.icone} size={26} className="text-amber" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-medium text-espresso">{b.nome}</p>
                  <p className="text-[13px] text-cocoa mt-1 leading-relaxed">{b.descricao}</p>
                </div>
              </div>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                download={b.tipo === 'download' ? true : undefined}
                className="btn-primary mt-4"
              >
                <ExtIcon size={18} className="mr-2" />
                {b.cta}
              </a>
            </div>
          );
        })}
      </section>
    </div>
  );
}
