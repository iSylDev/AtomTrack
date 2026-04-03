'use client'

import { EllipsisVertical, LogOut } from "lucide-react";
import UserAvatar from "../../shared/UserAvatar";
import { Button, buttonVariants } from "../../ui/button";
import { Card } from "../../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { profileCardData } from "./profileCardData";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLogout } from "@/hooks/auth/useLogout";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import formatToTitle from "@/helpers/formatToTitle";


export default function ProfileCard() {
  const isMobile = useIsMobile();
  const { logout } = useLogout();
  const user = useSelector((state: RootState) => state.userSlice.user)

  if (!isMobile) {
    return (
      <Popover>
        <Card className="bg-sidebar-ring/10 px-3 flex-row items-center gap-4 justify-between " >
          <div className="flex gap-3 items-center">
            <UserAvatar size="lg" />
            <div>
              <h3 className="text-foreground text-sm">{formatToTitle(user?.username) || 'Guest User'}</h3>
              <p className="text-xs">Beta User</p>
            </div>
          </div>
          <PopoverTrigger asChild>
            <EllipsisVertical size={17} className="hover:bg-sidebar-ring/20 transition-all duration-300 hover:cursor-pointer h-6 w-6 p-1 rounded-sm" />
          </PopoverTrigger>
        </Card>

        <PopoverContent className="">
          <div className="flex flex-col items-center px-1 pb-1 pt-2">
            <div className="text-center flex flex-col items-center">
              <UserAvatar className="w-16 h-16 border-2 border-primary mb-2" />
              <h3 className="text-foreground text-[16px]">{formatToTitle(user?.username) || 'Guest User'}</h3>
              <p className="uppercase tracking-wider text-xs">Beta User</p>
            </div>

            <div className="w-full mt-2 flex flex-col">
              {
                profileCardData.map(data => (
                  <Link key={data.title} href={data.to} className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'w-full flex justify-start')} >
                    {(() => {
                      const Icon = data.icon;
                      return <Icon className="mr-1 h-4 w-4" />;
                    })()}
                    {data.title}
                  </Link>
                ))
              }
              <Separator className="mb-3 mt-1" />
              <Button variant={'destructive'} size={'lg'} className="w-full flex justify-start py-3">
                <LogOut className="mr-1 h-4 w-4" />
                <p>Logout</p>
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <div className="flex flex-col items-center px-3 mb-3 lg:px-1 pb-1 pt-2">
      <div className="w-full text-center flex gap-3 items-center justify-start lg:flex-col lg:items-center ">
        <UserAvatar className="w-14 h-14 border-2 border-primary mb-2" />
        <div className="text-left lg:text-center">
          <h3 className="text-foreground text-[16px] mb-1 lg:mb-0">{formatToTitle(user?.username) || 'Guest User'}</h3>
          <p className="uppercase tracking-wider text-xs text-card-foreground">Beta User</p>
        </div>
      </div>

      <div className="w-full mt-2 flex flex-col">
        {
          profileCardData.map(data => (
            <Link key={data.title} href={data.to} className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), 'w-full flex justify-start')} >
              {(() => {
                const Icon = data.icon;
                return <Icon className="mr-1 h-4 w-4" />;
              })()}
              {data.title}
            </Link>
          ))
        }
        <Separator className="mb-3 mt-1" />
        <Button
          onClick={logout}
          variant={'destructive'} size={'lg'} className="w-full flex justify-start py-3">
          <LogOut className="mr-1 h-4 w-4" />
          <p>Logout</p>
        </Button>
      </div>
    </div>
  )
}