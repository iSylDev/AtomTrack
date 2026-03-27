'use client'


import { Card, CardHeader } from "../ui/card";
import PfpEditor from "./PfpEditor";





export default function IdentityCard() {



  return (
    <Card>
      <CardHeader>
        <PfpEditor />
      </CardHeader>
    </Card>
  )
}