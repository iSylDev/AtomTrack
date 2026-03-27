'use client'

import { Menu } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { useSidebar } from "../ui/sidebar";
import UserAvatar from "./UserAvatar";




export default function MobileHeader() {
  const {setOpenMobile, openMobile} = useSidebar()

  return (
    <header className="w-full flex border-b border-primary/20 justify-between py-5 bg-chart-6">
      <Logo />
      <div className="flex items-center gap-4">
        <UserAvatar />
        <Button 
        onClick={() => setOpenMobile(!openMobile)}
        className={cn(buttonVariants({ variant: 'ghost' }), 'bg-transparent text-primary')}>
          <Menu />
        </Button>
      <Separator className="bg-primary" />
      </div>
    </header>
  )
}