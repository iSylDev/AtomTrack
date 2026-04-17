"use client";

import { mutateUserDataAction } from "@/actions/settings/mutateUserDataAction";
import { toggleThemeAction } from "@/actions/settings/toggleThemeAction";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { useUser } from "./useUser";
import { UserType } from "@/types/user";

export default function useToggleTheme() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate: setTheme, isPending } = useMutation({
    mutationFn: async (newTheme: "light" | "dark") => {
      // update user info in supabase
      const result = await toggleThemeAction(newTheme);
      if (!result.success) throw new Error(result.message);

      return result;
    },

    onMutate: async (newTheme) => {
      queryClient.invalidateQueries({ queryKey: ["users"] });

      const previousUserData = queryClient.getQueryData<UserType>(["user"]);

      if (previousUserData) {
        queryClient.setQueryData(["user"], {
          ...previousUserData,
          theme: newTheme,
        });
      }

      return { previousUserData };
    },
    onError: (err, newTheme, context) => {
      if (context?.previousUserData) {
        queryClient.setQueryData(["user"], context.previousUserData);
      }
      toast.error("Failed to save theme preferences");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onSuccess: () => {
      toast.success("Theme updated sucessfully");
    },
  });

  return {
    theme: user?.theme,
    setTheme,
    isPending,
  };
}
