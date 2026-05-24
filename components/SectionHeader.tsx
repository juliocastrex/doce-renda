import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function SectionHeader({ title, backHref = '/home' }: { title: string; backHref?: string }) {
  return (
    <header className="sticky top-0 z-10 bg-cream/95 backdrop-blur border-b border-caramel/40">
      <div className="container-app flex items-center gap-2 py-4">
        <Link
          href={backHref}
          aria-label="Voltar"
          className="-ml-2 flex h-11 w-11 items-center justify-center rounded-full text-cocoa active:bg-caramel/30"
        >
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-[18px] font-medium text-espresso">{title}</h1>
      </div>
    </header>
  );
}
