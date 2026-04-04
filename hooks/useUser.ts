"use client";

import { createClientInBroswer } from "@/utils/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

const useUser = () => {
  const supabase = createClientInBroswer();

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !authUser) throw new Error("Not authenticated");

      const { data: userData, error: userTableError } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", authUser.id)
        .single();

      if (authError || !authUser) throw new Error("Not authenticated");

      return userData;
    },
    retry: 2,
  });
  return { user: data, isLoading, error, refetch };
};
export { useUser };

// const useFetchUser = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const supabase = createClientInBroswer();

//   const fetchUser = async () => {
//     try {
//       setIsLoading(true);
//       setError("");
//       //  Get the current logged in user
//       const {
//         data: { user: authUser },
//         error: authError,
//       } = await supabase.auth.getUser();

//       if (authError || !authUser) setError("No authenticated user found!");

//       //  Get the user profile from the users table
//       const { data: userData, error: userTableError } = await supabase
//         .from("users")
//         .select("*")
//         .eq("user_id", authUser?.id)
//         .single();

//       if (!userData || userTableError) setError("Error fetching user profile");

//       console.log(userData);
//       //  Update the user in the redux store
//       setIsLoading(false);
//       return { success: true };
//     } catch (err: any) {
//       setIsLoading(false);
//       setError("Error fetching user profile");
//       return {success: false};
//     }
//   };

//   return { fetchUser, isLoading, error };
// };
