

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Logo from "../shared/logo"
import NavLinkComponent from "./components/NavLinkComp"
import { navLinkData } from "./navLinkData"

export function AppSidebar() {
  return (
    <Sidebar>
      <div className="px-5 pt-4">
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-3 mt-3" />
          <div className="flex flex-col gap-3">
            {
              navLinkData.map(item => (
                <NavLinkComponent
                  key={item.title}
                  title={item.title}
                  linkTo={item.to}
                  icon={item.icon}
                />
              ))
            }
          </div>
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </div>
    </Sidebar>
  )
}