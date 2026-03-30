'use client'

import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react'
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  linkTo: string,
  title: string,
  icon?: keyof typeof Icons;
  subLinks?: { title: string; to: string; }[]
}


export default function NavLinkComponent({ linkTo, title, icon, subLinks }: props) {
  const pathname = usePathname()
  const Icon = icon ? (Icons[icon] as Icons.LucideIcon) : null;

  const isActive = pathname.includes(linkTo)

  return (
    <div className="text-[14px]">
      <Link href={linkTo} className={cn('flex gap-2 items-center py-2 px-3 rounded-lg',
        isActive ? 'bg-chart-1/20 text-chart-1' : 'text-card-foreground hover:text-chart-1 transition-all ease-in-out duration-300 hover:bg-chart-1/10')} >
        {Icon && (<Icon className="w-[20px]" />)}
        <p>{title}</p>
      </Link>

      <div className="border-l ml-5">
        {
          subLinks && (
            subLinks.map(link => (
              <Link href={link.to} key={link.title} className={cn("mx-2  mt-1 mb-1 text-sm  flex gap-2 items-center py-2 px-3 rounded-lg",
                pathname.includes(link.to) ? 'bg-chart-2/20 text-chart-2' : 'text-card-foreground hover:text-chart-2 transition-all ease-in-out duration-300 hover:bg-chart-2/10'
              )}>
                <p>{link.title}</p>
              </Link>
            ))
          )
        }
      </div>
    </div>
  )
}