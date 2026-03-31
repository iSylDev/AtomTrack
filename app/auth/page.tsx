

import AuthForm from "@/components/forms/AuthForm";
import AuthHeader from "@/components/auth/components/AuthHeader";
import Logo from "@/components/shared/logo";
import Image from "next/image";

export default function AuthPage() {
  return (
    <div className="h-screen relative overflow-x-hidden">
      <AuthHeader />
      <div className="w-full px-5 mt-7 mx-auto flex flex-col justify-center items-center gap-2 lg:mt-16">
        <AuthForm />
      </div>
    </div>
  );
}