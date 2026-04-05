'use client'

import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { uploadAvatarAction } from "@/actions/settings/uploadAvatarAction";
import { useUser } from "@/hooks/useUser";
import useSettingsSaver from "@/hooks/settings/useSettingsSaver";


export default function PfpEditor() {
  const { user } = useUser();
  const { triggerConfirmToast } = useSettingsSaver();

  async function handleChangePfp(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]

    // Pass the file to the settings saver if we have a user and they upload a file
    if (file && user) {
      triggerConfirmToast(user, file)
    }
  }

  return (
    <Label className="relative w-fit hover:cursor-pointer hover:scale-104 transition-all duration-300">
      <div
        className="relative w-28 h-28 object-cover rounded-full overflow-hidden shadow-lg border-3 border-card-foreground/50 " >
        <Image
          src={user?.profile_picture || 'https://kcgmivfbuirkvjkikvzq.supabase.co/storage/v1/object/public/pfps/1773616466907.png'}
          className="object-cover object-center"
          fill
          priority
          alt='User Profile' />
        <Input
          onChange={handleChangePfp}
          type="file"
          accept="image*"
          className="hidden"
        />
      </div>
      <div className="absolute bottom-0 right-1 bg-primary rounded-full w-7 flex items-center justify-center h-7">
        <Pencil className="w-4 stroke-card" />
      </div>
    </Label>
  )
}