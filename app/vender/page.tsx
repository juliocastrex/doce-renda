import SectionHeader from '@/components/SectionHeader';
import ToastHost from '@/components/Toast';
import Categorias from './Categorias';
import { categorias, scripts } from '@/lib/content/scripts';

export default function VenderPage() {
  return (
    <div className="min-h-screen bg-cream pb-12">
      <SectionHeader title="Quero vender no WhatsApp" />

      <section className="container-app pt-5">
        <p className="text-[15px] text-cocoa leading-relaxed">
          Mensagens prontas pra você copiar e colar no WhatsApp.
        </p>
      </section>

      <Categorias categorias={categorias} scripts={scripts} />
      <ToastHost />
    </div>
  );
}
