import Link from 'next/link';
import { Cookie } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <div className="container-app flex-1 flex flex-col items-center justify-center text-center py-12">
        <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-white border border-caramel shadow-soft">
          <Cookie size={56} className="text-amber" strokeWidth={1.5} />
        </div>

        <h1 className="text-[28px] font-medium text-espresso leading-tight max-w-[320px]">
          Bem-vinda à sua área de doceira
        </h1>

        <p className="mt-4 text-[16px] text-cocoa max-w-[340px]">
          Tudo que você precisa pra começar a faturar com doces sem usar o fogão está aqui dentro.
        </p>

        <Link href="/home" className="btn-primary mt-10 max-w-[340px]">
          Quero começar agora
        </Link>

        <p className="mt-4 text-[12px] text-amberDark">
          Mais de 158 receitas e ferramentas práticas
        </p>
      </div>
    </div>
  );
}
