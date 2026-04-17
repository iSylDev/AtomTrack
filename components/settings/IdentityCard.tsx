'use client'

import { cn } from "@/lib/utils";
import UserInfoForm from "../forms/UserInforForm";
import { Card } from "../ui/card";
import PfpEditor from "./PfpEditor";
import formatToTitle from "@/helpers/formatToTitle";
import { useUser } from "@/hooks/settings/useUser";

export default function IdentityCard({ position }: { position?: string }) {
  const { user } = useUser();

  return (
    <Card className="lg:col-span-8">
      <div className={cn('flex flex-col lg:flex-row lg:gap-12 items-center px-6 lg:row-end-2', position)}  >
        <div>
          <PfpEditor />
          <div className="flex flex-col text-center mt-3 lg:hidden lg:mt-0">
            <h3 className="text-[18px] text-foreground">{formatToTitle(user?.username) || 'Guest User'}</h3>
            <p>Beta User</p>
          </div>
        </div>

        <div className="w-full">
          <div className="hidden md:flex flex-col mb-5">
            <h3 className="text-[23px] text-foreground -mb-1">{formatToTitle(user?.username) || 'Guest User'}</h3>
          </div>
          <UserInfoForm />
        </div>
      </div>
    </Card>
  )
}