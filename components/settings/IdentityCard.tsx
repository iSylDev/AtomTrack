'use client'


import UserInfoForm from "../forms/UserInforForm";
import { Card } from "../ui/card";
import PfpEditor from "./PfpEditor";





export default function IdentityCard() {

  return (
    <Card >
      <div className="flex flex-col md:flex-row md:gap-12 items-center px-6">
        <div>
          <PfpEditor />
          <div className="flex flex-col text-center mt-3 md:hidden md:mt-0">
            <h3 className="text-[18px] text-foreground">Alex Thompson</h3>
            <p>Beta User</p>
          </div>
        </div>

        <div className="w-full">
          <div className="hidden md:flex flex-col mb-5">
            <h3 className="text-[27px] text-foreground -mb-1">Alex Thompson</h3>
            <p className="text-base">Beta User</p>
          </div>
          <UserInfoForm />
        </div>
      </div>
    </Card>
  )
}