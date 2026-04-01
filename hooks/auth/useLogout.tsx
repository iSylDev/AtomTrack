'use client'

import { createClientInBroswer } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { useDispatch } from 'react-redux'
import { logOut } from "@/store/slices/userSlice";





export const useLogout = () => {
  const [isError, setIsError] = useState('');
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const supabase = createClientInBroswer();
  const dispatch = useDispatch()

  const handleError = (errorMessage: string) => {
    setIsError(errorMessage);
    toast.error(errorMessage);
  }

  const logout = async () => {
    console.log('logging out');
    
    startTransition(async () => {
      try {
        const { error: LogoutError } = await supabase.auth.signOut();

        if (LogoutError) {
          handleError(LogoutError.message || 'Error Signing Out')
          return;
        }

        dispatch(logOut())
        toast.success('Logged out Successfully')
        // Refresh current route to trigger Proxy
        router.refresh();

        // Push to Auth
        router.push('/auth')
      } catch (err: any) {
        console.error(err || 'Unexpected error during logout')
      }
    })
  }
  return { logout, isPending, isError };
}

