'use client'

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";


export default function PfpEditor() {
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
    <Label className="relative w-fit hover:cursor-pointer hover:scale-104 transition-all duration-300">
      <div
        className="w-28 h-28 object-cover rounded-full overflow-hidden shadow-lg border-3 border-card-foreground/50 " >
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
      </div>
      <div className="absolute bottom-0 right-1 bg-primary rounded-full w-7 flex items-center justify-center h-7">
        <Pencil className="w-4 stroke-card" />
      </div>
    </Label>
  )
}