"use client";

import { UserType } from "@/types/user";
import assert from "@/utils/assertions";
import { createClientInBroswer } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const supabase = createClientInBroswer();

  const { data, isLoading, error, refetch,  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      // Get the currently logged-in user
      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser();

      assert(!authError && authUser, "Not Authenticated");

      // Get the user's data from our supabase table
      const { data: userData, error: userTableError } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", authUser.id)
        .single();

      assert(!userTableError && userData, "Profile not found");

      return userData as UserType;
    },
    retry: 2,
    enabled: typeof window !== "undefined",
  });
  return { user: data, isLoading, error, refetch };
};
export { useUser };
