'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export default function VerifyOtpForm() {
  return (
    <form >
      <Input className="text-center text-lg tracking-[0.75em] py-5" type="text" inputMode="numeric" pattern="\d{6}" maxLength={6} placeholder="******" />
      <Button className="w-full mt-5 py-5 rounded-md md:mt-6 flex items-center" >
        <span>Verify & Continue</span>
        <ArrowRight />
      </Button>
    </form>
  );
}