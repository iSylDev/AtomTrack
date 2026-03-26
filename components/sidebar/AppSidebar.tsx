

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Image from "next/image"
import Logo from "../shared/logo"
import NavLinkComponent from "./nav-links/components/NavLinkComp"
import { navLinkData } from "./nav-links/navLinkData"
import ProfileCard from "./profile/ProfileCard"

export function AppSidebar() {
  return (
    <Sidebar>
      {/* <div className="px-5 pt-4"> */}
      <div className="mt-4 px-4">
        <SidebarHeader >
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-3 mt-3" />
          <div className="flex flex-col gap-1">
            {
              navLinkData.map(item => (
                <NavLinkComponent
                  key={item.title}
                  title={item.title}
                  linkTo={item.to}
                  icon={item.icon}
                  subLinks={item.subLinks}
                />
              ))
            }
          </div>
          <SidebarGroup />
        </SidebarContent>
      </div>
      <SidebarFooter className="mt-auto px-4">
        <ProfileCard />
      </SidebarFooter>
      {/* </div> */}
    </Sidebar>
  )
}