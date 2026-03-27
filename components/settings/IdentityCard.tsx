'use client'

import Image from "next/image";
import UserAvatar from "../shared/UserAvatar";
import { Card, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";


export default function IdentityCard() {
  const [imageUrl, setImageUrl] = useState('/images/pfp.png')



  return (
    <Card>
      <CardHeader>
        <Label className="w-fit hover:cursor-pointer rounded-full overflow-hidden shadow-lg border-3 border-card-foreground/50" >
          <Image src={imageUrl} height={120} width={120} alt='User Profile' />
          <Input type="file" hidden />
        </Label>
      </CardHeader>
    </Card>
  )
}