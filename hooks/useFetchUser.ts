import { logIn } from "@/store/slices/userSlice";
import { createClientInBroswer } from "@/utils/supabase/client";
import { useDispatch } from "react-redux";

const useFetchUser = () => {
  const dispatch = useDispatch();
  const supabase = createClientInBroswer();

  const fetchUser = async () => {
    try {
      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !authUser)
        throw new Error("No authenticated user found!");

      const { data: userTableData, error: userTableError } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", authUser.id)
        .single();

      if (!userTableData || userTableError) throw userTableError;

      console.log(userTableData);
      return userTableData;
    } catch (err: any) {
      return null;
    }
  };

  return { fetchUser };
};

export default useFetchUser;
