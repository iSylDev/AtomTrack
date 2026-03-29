

import AuthForm from "@/components/auth/components/AuthForm";
import AuthHeader from "@/components/auth/components/AuthHeader";
import Logo from "@/components/shared/logo";
import Image from "next/image";

export default function AuthPage() {
  return (
    <div className="h-screen relative overflow-x-hidden">
      {/* <Image src={'/images/auth/auth-gradients/top-gradient.png'} alt="Gradient" height={700} width={700} className="absolute -top-70 -left-50 -z-10" />
      <Image src={'/images/auth/auth-gradients/bottom-gradient.png'} alt="Gradient" height={700} width={700} className="absolute -bottom-70 -right-50 -z-10" /> */}
      <AuthHeader />
      <div className="w-full px-5 mt-7 mx-auto flex flex-col justify-center items-center gap-2 lg:mt-16">
        <AuthForm />
      </div>
    </div>
  );
}