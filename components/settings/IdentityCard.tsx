'use client'


import { Card, CardHeader } from "../ui/card";
import PfpEditor from "./PfpEditor";





export default function IdentityCard() {



  return (
    <Card >
      <div className="flex flex-col items-center">
        <PfpEditor />
        <div className="flex flex-col text-center mt-3">
          <h3 className="text-[18px] text-foreground">Alex Thompson</h3>
          <p>Beta User</p>
        </div>
      </div>
    </Card>
  )
}