import {
  Cookie, Cake, CakeSlice, Candy, IceCream, CupSoda,
  Calculator, MessageCircle, Gift,
  FileSpreadsheet, Store, Instagram, Package, Tag, Mic,
  type LucideIcon,
} from 'lucide-react';

const map: Record<string, LucideIcon> = {
  Cookie, Cake, CakeSlice, Candy, IceCream, CupSoda,
  Calculator, MessageCircle, Gift,
  FileSpreadsheet, Store, Instagram, Package, Tag, Mic,
};

export default function Icon({ name, size = 24, className }: { name: string; size?: number; className?: string }) {
  const Cmp = map[name] ?? Cookie;
  return <Cmp size={size} className={className} strokeWidth={1.75} />;
}
