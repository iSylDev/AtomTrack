'use client'

import { ServerCrash } from "lucide-react";
import { Button } from "../ui/button";
import { useLogout } from "@/hooks/auth/useLogout";
import { Loader2 } from "lucide-react";

export default function ErrorScreen() {
  const { logout, isPending, isError } = useLogout();

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <ServerCrash className="text-destructive" size={100} />
      <h3 className="text-lg font-medium text-destructive">Error Initializing User</h3>
      <p className="text-sm text-destructive">Please try again later</p>
      <div className="w-[80%] md:w-[20%] flex flex-col gap-2 items-center justify-center">
        <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full">
          <Button className="w-full mt-4 py-5 rounded-md md:mt-5" 
          variant={'outline'}
          onClick={
            () => {
              window.location.reload();
            }
          } >
            <p className="uppercase font-bold text-xs">Try Again</p>
          </Button>
          <Button className="w-full mt-4 py-5 rounded-md md:mt-5" variant={'outline'} >
            <p className="uppercase font-bold text-xs">Contact Support</p>
          </Button>
        </div>
        <Button 
        onClick={() => logout()}
        disabled={isPending}
        className="w-full mt-4 py-5 rounded-md md:mt-5" variant={'destructive'} >
          {isPending ? <Loader2 className="animate-spin" size={20} /> : <p className="uppercase font-bold text-xs">Logout</p>}
        </Button>
      </div>
    </div>
  );
}