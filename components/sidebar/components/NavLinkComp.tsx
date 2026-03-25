
import { LucideIcon, Store } from "lucide-react";
import Link from "next/link";


export default function NavLinkComponent({ linkTo, title, icon }: { linkTo: string, title: string, icon?: LucideIcon }) {
  const Icon = icon;

  return (
    <Link href={linkTo} className="flex gap-2 items-center text-card-foreground hover:text-chart-1 transition-all ease-in-out duration-300 hover:bg-chart-1/10 py-3 px-3 rounded-lg">
      {Icon && (<Icon />)}
      <p>{title}</p>
    </Link>
  )
}