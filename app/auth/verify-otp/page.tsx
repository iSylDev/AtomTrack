'use client'

import AuthHeader from "@/components/auth/components/AuthHeader";
import VerifyOtpCard from "@/components/auth/components/VerifyOtpCard";
import Image from "next/image";



export default function VerifyOtpPage() {


  return (
    <div className="h-screen relative overflow-x-hidden">
      <AuthHeader />
      <div className="w-full px-5 mt-7 mx-auto flex flex-col justify-center items-center gap-2 lg:mt-16">
        <VerifyOtpCard />
      </div>
    </div>
  );
}