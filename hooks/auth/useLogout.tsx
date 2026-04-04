'use client'

import { createClientInBroswer } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useLogout = () => {
  const router = useRouter();
  const supabase = createClientInBroswer();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending, error } = useMutation({
    mutationFn: async () => {
      const { error } =  await supabase.auth.signOut();
      if (error) throw new Error(error.message || 'Sorrry, we could not sign you out')
        return { success: true, message: 'Signed out successfully' }
    },
    onSuccess: (data) => {
      queryClient.clear();

      toast.success(data.message)

      router.push('/auth')
      router.refresh();
    },
    onError: (err: Error) => {
      toast.error(err.message || 'Error Signing out')
    }
  });
  return { logout, isPending, error }
}