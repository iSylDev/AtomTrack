
import { LucideIcon, Store } from "lucide-react";
import Link from "next/link";

type props = {
  linkTo: string,
  title: string,
  icon?: LucideIcon
  subLinks?: { title: string; to: string; }[]
}


export default function NavLinkComponent({ linkTo, title, icon, subLinks }: props) {
  const Icon = icon;

  return (
    <div className="text-[14px]">
      <Link href={linkTo} className="flex gap-2 items-center text-card-foreground hover:text-chart-1 transition-all ease-in-out duration-300 hover:bg-chart-1/10 py-2 px-3 rounded-lg">
        {Icon && (<Icon className="w-[20px]" />)}
        <p>{title}</p>
      </Link>

      <div className="border-l ml-5">
        {
          subLinks && (
            subLinks.map(link => (
              <Link href={link.to} key={link.title} className="mx-2  mb-1 text-sm  flex gap-2 items-center text-card-foreground hover:text-chart-2 transition-all ease-in-out duration-300 hover:bg-chart-2/10 py-2 px-3 rounded-lg">
                <p>{link.title}</p>
              </Link>
            ))
          )
        }
      </div>
    </div>
  )
}