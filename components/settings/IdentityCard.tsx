'use client'


import UserInfoForm from "../forms/UserInforForm";
import { Card, CardHeader } from "../ui/card";
import PfpEditor from "./PfpEditor";





export default function IdentityCard() {



  return (
    <Card >
      <div className="flex flex-col items-center px-6">
        <PfpEditor />
        <div className="flex flex-col text-center mt-3">
          <h3 className="text-[18px] text-foreground">Alex Thompson</h3>
          <p>Beta User</p>
        </div>

        <UserInfoForm />
      </div>
    </Card>
  )
}