import { EllipsisVertical } from "lucide-react";
import UserAvatar from "../../shared/UserAvatar";
import { Button } from "../../ui/button";
import { Card } from "../../ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";


export default function ProfileCard() {

  return (
    <Popover>
      <Card className="bg-sidebar-ring/10 px-3 flex-row items-center gap-4" >
        <UserAvatar />
        <div>
          <h3 className="text-foreground text-sm">Krypto Lily</h3>
          <p className="text-xs">Beta User</p>
        </div>
        <PopoverTrigger>
          <Button className="" variant={'ghost'}>
            <EllipsisVertical size={17} />
          </Button>
        </PopoverTrigger>
      </Card>

      <PopoverContent>
        <div>
          <div>
            <div className="border-primary border-3 p-1 w-fit rounded-full "><UserAvatar className="w-15 h-15" /></div>
            <h3 className="text-foreground text-lg">Alex Rivera</h3>
            <p className="uppercase tracking-widest">Beta User</p>
          </div>
        </div>
      </PopoverContent>
    </Popover>

  )
}