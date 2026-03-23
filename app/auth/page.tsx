

import AuthForm from "@/components/auth/components/AuthForm";
import AuthHeader from "@/components/auth/components/AuthHeader";
import Logo from "@/components/shared/logo";

export default function AuthPage() {
  return (
    <div>
      <AuthHeader />
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <AuthForm />
      </div>
    </div>
  );
}