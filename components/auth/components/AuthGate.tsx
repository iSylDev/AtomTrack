"use client";

import { ReactNode, useState } from "react";
import { useEffect } from "react";
import { createUser } from "@/actions/auth-actions/createUserAction";
import LoadingScreen from "@/components/shared/LoadingScreen";
import ErrorScreen from "@/components/shared/ErrorScreen";
import { useUser } from "@/hooks/useUser";
import { useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

export default function AuthGate({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const { user, error: fetchUserError, isLoading: isFetchingUser } = useUser();

  const [isMounted, setIsMounted] = useState(false);

    // Check if user jjust signed in
    const isFromAuthPage = searchParams.get('new') === 'true';

    const { mutate: sync, isPending: isSyncing, error: createUserError } = useMutation({
      mutationFn: createUser
    });

    // run the createUser fn if user just signed in
    useEffect(() =>{
      setIsMounted(true)
      if (isFromAuthPage){
        sync();
      }
    }, [isFromAuthPage, sync]);

    if (!isMounted) return <LoadingScreen />


    const showLoading = isSyncing || isFetchingUser;
    const showError = createUserError || fetchUserError || (!isFetchingUser && !isSyncing && !user)


    if (showLoading) return <LoadingScreen />
    if (showError) return <ErrorScreen />

    return <>{children}</>
}
