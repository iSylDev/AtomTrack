import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
        <img src="/images/logo.png" alt="Logo" className="w-20 h-18 animate-pulse" />
        <h3 className="text-sm font-medium text-primary/50">Loading user data...</h3>
    </div>
  );
}