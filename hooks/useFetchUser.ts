"use client";

import { logIn } from "@/store/slices/userSlice";
import { createClientInBroswer } from "@/utils/supabase/client";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { success } from "zod";

const useFetchUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
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
      dispatch(logIn(userData));
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
