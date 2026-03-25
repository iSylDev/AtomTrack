
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
    <div className="t">
      <Link href={linkTo} className="flex gap-2 items-center text-card-foreground hover:text-chart-1 transition-all ease-in-out duration-300 hover:bg-chart-1/10 py-3 px-3 rounded-lg">
        {Icon && (<Icon />)}
        <p>{title}</p>
      </Link>

      <div>
        {
          subLinks && (
            subLinks.map(link => (
              <Link href={linkTo} key={link.title} className="ml-4 mt-1 text-sm  flex gap-2 items-center text-card-foreground hover:text-chart-2 transition-all ease-in-out duration-300 hover:bg-chart-2/10 py-2 px-3 rounded-lg">
                <p>{link.title}</p>
              </Link>
            ))
          )
        }
      </div>
    </div>
  )
}