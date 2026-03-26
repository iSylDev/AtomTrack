import { EllipsisVertical, LogOut } from "lucide-react";
import UserAvatar from "../../shared/UserAvatar";
import { Button, buttonVariants } from "../../ui/button";
import { Card } from "../../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { profileCardData } from "./profileCardData";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";


export default function ProfileCard() {

  return (
    <Popover>
      <Card className="bg-sidebar-ring/10 px-3 flex-row items-center gap-4" >
        <UserAvatar />
        <div>
          <h3 className="text-foreground text-sm">Krypto Lily</h3>
          <p className="text-xs">Beta User</p>
        </div>
        <PopoverTrigger asChild>
          <EllipsisVertical size={17} className="hover:bg-sidebar-ring/20 transition-all duration-300 hover:cursor-pointer h-6 w-6 p-1 rounded-sm" />
        </PopoverTrigger>
      </Card>

      <PopoverContent >
        <div className="flex flex-col items-center px-2 ">
          <div className="text-center flex flex-col items-center">
            <UserAvatar className="w-14 h-14 border-2 border-primary mb-2" />
            <h3 className="text-foreground text-[16px]">Alex Rivera</h3>
            <p className="uppercase tracking-wider text-xs">Beta User</p>
          </div>

          <div className="w-full mt-3 flex flex-col">
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
            <Separator className="mb-3" />
            <Button variant={'destructive'} size={'lg'} className="w-full flex justify-start py-3">
              <LogOut />
              <p>Logout</p>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>

  )
}