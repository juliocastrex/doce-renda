import Link from 'next/link';
import Image from 'next/image';
import { Calculator, MessageCircle, Gift, Cookie } from 'lucide-react';

function saudacao() {
  const h = new Date().getHours();
  if (h < 12) return 'Bom dia, doceira';
  if (h < 18) return 'Boa tarde, doceira';
  return 'Boa noite, doceira';
}

const cards = [
  { href: '/aprender', label: 'Quero aprender receitas', Icon: Cookie },
  { href: '/calcular', label: 'Quero calcular meu lucro', Icon: Calculator },
  { href: '/vender', label: 'Quero vender no WhatsApp', Icon: MessageCircle },
  { href: '/bonus', label: 'Quero mais bônus', Icon: Gift },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream pb-12">
      <header className="container-app py-4">
        <Image
          src="/banner-home.png"
          alt="Doce Renda"
          width={960}
          height={160}
          className="w-full h-auto rounded-card"
          priority
        />
      </header>

      <section className="container-app">
        <div className="card">
          <p className="text-[14px] text-amberDark">{saudacao()}</p>
          <p className="mt-2 text-[16px] text-espresso leading-relaxed">
            Você tem <span className="font-medium">158 receitas</span> prontas pra usar.
            Sua meta esse mês: <span className="font-medium">R$ 2.000</span>.
          </p>
        </div>
      </section>

      <section className="container-app mt-5">
        <div className="grid grid-cols-2 gap-3">
          {cards.map(({ href, label, Icon }) => (
            <Link key={href} href={href} className="card flex flex-col items-start gap-3 active:scale-[0.99] transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cream">
                <Icon size={26} className="text-amber" strokeWidth={1.75} />
              </div>
              <span className="text-[15px] font-medium text-espresso leading-snug">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="container-app mt-12 text-center text-[13px] text-amberDark">
        Feito com carinho pra você 🍫❤️
      </footer>
    </div>
  );
}
