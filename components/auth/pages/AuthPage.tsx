import AuthForm from "../components/AuthForm";
import Logo from "@/components/shared/logo";

export default function AuthPage() {
    return (
        <div className="w-full flex flex-col justify-center items-center gap-2">
            <Logo />
            <AuthForm />
        </div>
    );
}