import SectionHeader from '@/components/SectionHeader';
import Calculadora from './Calculadora';
import ToastHost from '@/components/Toast';

export default function CalcularPage() {
  return (
    <div className="min-h-screen bg-cream pb-12">
      <SectionHeader title="Quero calcular meu lucro" />
      <Calculadora />
      <ToastHost />
    </div>
  );
}
