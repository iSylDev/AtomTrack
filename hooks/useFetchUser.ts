"use client";


import { createClientInBroswer } from "@/utils/supabase/client";
import { useState } from "react";


const useFetchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const supabase = createClientInBroswer();

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      setError("");
      //  Get the current logged in user
      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !authUser) setError("No authenticated user found!");

      //  Get the user profile from the users table
      const { data: userData, error: userTableError } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", authUser?.id)
        .single();

      if (!userData || userTableError) setError("Error fetching user profile");

      console.log(userData);
      //  Update the user in the redux store
      setIsLoading(false);
      return { success: true };
    } catch (err: any) {
      setIsLoading(false);
      setError("Error fetching user profile");
      return {success: false};
    }
  };

  return { fetchUser, isLoading, error };
};

export default useFetchUser;
