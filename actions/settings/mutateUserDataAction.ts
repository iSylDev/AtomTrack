"use server";

import {createClient} from "@/utils/supabase/server";
import {UserType} from "@/types/user";

export const mutateUserDataAction = async (payload: Partial<UserType>) => {
    // Create client in server
    const supabase = await createClient();

    // Check the user that is currently logged in
    const {
        data: {user},
        error: getUserError,
    } = await supabase.auth.getUser();

    if (!user || getUserError) {
        return {success: false, message: "Unauthorized. Please log in"};
    }

    // Update the user's data on supabase:
    const {error: mutateError} = await supabase
        .from("users")
        .update(payload)
        .eq("user_id", user?.id);

    if (mutateError) {
        return {
            success: false,
            message: mutateError.message || "Failed to Update user settings",
        };
    }

    return {success: true, message: "Changes saved successfully"};
};
