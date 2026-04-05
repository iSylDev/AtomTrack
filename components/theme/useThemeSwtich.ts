import { toggleThemeAction } from "@/actions/settings/toggleThemeAction";
import { UserType } from "@/types/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useThemeSwitch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async (newTheme: string) => {
      // Stop all outogoing queries
      await queryClient.cancelQueries({ queryKey: ["user"] });
      // Take a snapshot of the user data before the change
      const previousUserData = queryClient.getQueryData<UserType>(["user"]);

      // Update the user theme if we have a snapshot
      if (previousUserData) {
        queryClient.setQueryData(["user"], {
          ...previousUserData,
          theme: newTheme,
        });
      }
      return { previousUserData };
    },
    // Update the user settings on supabase
    mutationFn: (newTheme: string) => toggleThemeAction(newTheme),
    onError: (err, __, context) => {
      // Roll back update if changes to supabase fail
      if (context?.previousUserData) {
        queryClient.setQueryData(["user"], context.previousUserData);
      }
    },
    // Refresh the page 
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export { useThemeSwitch };
