

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

export function AppSidebar() {
  return (
    <Sidebar>
      <div className="px-3 pt-3">
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-3" />
            <NavLinkComponent />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </div>
    </Sidebar>
  )
}