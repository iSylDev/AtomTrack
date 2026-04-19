"use server";
import { createClient } from "@/utils/supabase/server"; // Your server-side client helper


// TODO: Connect this server action to the useUser hook

export async function getAuthenticatedUser() {
    const supabase = await createClient();

    const { data: { user: authUser } } = await supabase.auth.getUser();
    if (!authUser) throw new Error("Not Authenticated");

    const { data: userData, error } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", authUser.id)
        .single();

    if (error) throw new Error("Profile not found");
    return userData;
}