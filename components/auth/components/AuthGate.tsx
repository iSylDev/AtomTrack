"use client";

import { ReactNode, useState } from "react";
import { useEffect } from "react";
import { createUser } from "@/actions/auth-actions/createUserAction";
import LoadingScreen from "@/components/shared/LoadingScreen";
import ErrorScreen from "@/components/shared/ErrorScreen";
import useFetchUser from "@/hooks/useFetchUser";
import { useSearchParams } from "next/navigation";

export default function AuthGate({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const { fetchUser, error: fetchUserError } = useFetchUser();
  const searchParams = useSearchParams()


  useEffect(() => {
    const initializeAuth = async () => {
      
      try {
        // Determine if the user is coming from the auth page 
        const isFromAuthPage = searchParams.get('new') === 'true'
        setStatus('loading');

        // Create upsert if user is coming from the auth page
        if (isFromAuthPage) {
          const syncResult = await createUser();

          if (!syncResult.success) {
            console.error('Sync Error', syncResult.message);
            setStatus('error');
            return;
          }
        }

        const userInfo = await fetchUser();

        // If we fail to fetch user, show error
        if (userInfo.success === false) {
          console.error('Failed to fetch user');
          setStatus('error')
          return;
        }

        setStatus('success')

      } catch (err: any) {
        console.error('Auth error failed', err);
        setStatus('error')
      }
    }
    initializeAuth();
  }, []);

  if (status === 'loading') return <LoadingScreen />
  if (status === 'error') return <ErrorScreen />

  return <>{children}</>
}
