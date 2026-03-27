'use client'

import Image from "next/image";
import UserAvatar from "../shared/UserAvatar";
import { Card, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { ChangeEvent, useState } from "react";


export default function IdentityCard() {
  const [imageUrl, setImageUrl] = useState('/images/pfp.png')

  function handleChangePfp(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]

    if (file) {
      const previewUrl = URL.createObjectURL(file)
      setImageUrl(previewUrl)

      return () => URL.revokeObjectURL(previewUrl)
    }
  }



  return (
    <Card>
      <CardHeader>
        <Label
          className="w-28 h-28 object-cover hover:cursor-pointer rounded-full overflow-hidden shadow-lg border-3 border-card-foreground/50" >
          <Image
            src={imageUrl}
            height={120}
            width={120}
            alt='User Profile' />
          <Input
            onChange={handleChangePfp}
            type="file"
            hidden
            accept="image*" />
        </Label>
      </CardHeader>
    </Card>
  )
}