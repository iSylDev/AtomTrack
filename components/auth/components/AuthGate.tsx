"use client";

import { ReactNode, useState } from "react";
import { useEffect } from "react";
import { createUser } from "@/actions/auth-actions/createUserAction";
import LoadingScreen from "@/components/shared/LoadingScreen";
import ErrorScreen from "@/components/shared/ErrorScreen";

export default function AuthGate({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const setup = async () => {
      setIsLoading(true);
      const results = await createUser();

      if (results.success) {
        setIsLoading(false);
        setError('')
        setIsInitialized(true);
      } {
        setIsLoading(false);
        setError('Error Initializing User');
        setIsInitialized(true)
      }
    };
    setup();
  }, []);

  if (isLoading) {
    return <LoadingScreen />
  }

  if (!isLoading && isInitialized && error === '') {
    return <>
      {children}
    </>
  }

  if (!isLoading && isInitialized && error !== '') {
    return <ErrorScreen />
  }
}
