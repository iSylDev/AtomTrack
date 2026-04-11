"use client";

import {ReactNode} from "react";
import {createUser} from "@/actions/auth-actions/createUserAction";
import LoadingScreen from "@/components/shared/LoadingScreen";
import ErrorScreen from "@/components/shared/ErrorScreen";
import {useUser} from "@/hooks/useUser";
import {useMutation} from "@tanstack/react-query";
import {useHasMounted} from "@/hooks/useHasMounted";

export default function AuthGate({children}: { children: ReactNode }) {
    const {user, error: fetchUserError, isLoading: isFetchingUser} = useUser();
    const isMounted = useHasMounted();

    // Check if user just signed in

    const { isPending: isSyncing, error: createUserError} = useMutation({
        mutationFn: createUser
    });

    // run the createUser fn if user just signed in
    if (!isMounted) return <LoadingScreen/>

    const showLoading = isSyncing || isFetchingUser;
    const showError = createUserError || fetchUserError || (!isFetchingUser && !isSyncing && !user)


    if (showLoading) return <LoadingScreen/>
    if (showError) return <ErrorScreen/>

    return <>{children}</>
}
