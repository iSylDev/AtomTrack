'use client'

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"


export default function UserInfoForm() {
  

  return <form action="" className="w-full mt-6 flex flex-col gap-5">
    <Label className="flex flex-col gap-2 items-start w-full">
      <p>Email Address</p>
      <Input disabled id="email" type="email" placeholder="lily@gmail.com" className="pl-4 py-5 placeholder:text-card-foreground rounded-sm placeholder:text-sm" />
    </Label>
    <DropdownMenuLabel className="w-full p-0">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button disabled variant="outline" className="w-full py-5">Coordinated Universal Time (UTC) +0</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full">
          <DropdownMenuGroup>
            <DropdownMenuRadioGroup>
              <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </DropdownMenuLabel>
  </form>
}


