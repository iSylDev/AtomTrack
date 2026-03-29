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
import * as React from "react"
import { Button } from "@/components/ui/button"


export default function UserInfoForm() {

  return <form action="" className="w-full mt-6 flex flex-col gap-5">
    <Label className="flex flex-col gap-2 items-start w-full">
      <p>Email Address</p>
      <Input id="email" type="email" placeholder="lily@gmail.com" className="pl-4 py-5 placeholder:text-card-foreground/30 rounded-sm placeholder:text-sm" />
    </Label>
    <Label className="flex flex-col gap-2 items-start w-full">
      <p>Timezone</p>
      <Input id="email" type="email" placeholder="lily@gmail.com" className="pl-4 py-5 placeholder:text-card-foreground/30 rounded-sm placeholder:text-sm" />
    </Label>
  </form>
}


export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
