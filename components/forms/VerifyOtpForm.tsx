'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { VerfiyOtpSchema, verifiyOtpSchema } from "@/schemas/VerifyOtpSchema";
import { verifyOtpAction } from "@/actions/auth-actions/verifyOtpAction";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import createUser from "@/actions/auth-actions/createUserAction";


export default function VerifyOtpForm() {
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const email = searchParams.get('email') || ''

  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<VerfiyOtpSchema>({
    resolver: zodResolver(verifiyOtpSchema),
    defaultValues: {
      token: '',
    }
  })

  async function submitFunc(data: any) {
    if (!email) {
      toast.error('Email not found. Please try signing in again.');
      return
    }

    setIsLoading(true);
    // Call the action to verify the user's email
    try {
      const result = await verifyOtpAction({
        email,
        token: data.token
      })

      // Upsert User profile
      if (result?.success) {
        console.log(result);
        // Grab user data from the create user action
        const userData = await createUser();

        // If upsert is successful, push the user to the dashbaord
        if (userData?.success) {
          toast.success('Account verified successfully!')
          router.push(`/dashboard`)
        }
      } else {
        toast.error(result?.message || 'Invalid Code')
      }
    } catch (error) {
      toast.error('An error occured');
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(submitFunc)} className="flex flex-col" >
      {
        errors.token && (
          <p className="text-destructive text-xs text-left mr-auto mb-2 italic">{errors.token.message}</p>
        )
      }
      <Input
        aria-invalid={!!errors.token}
        {...register('token')}
        className="text-center text-lg tracking-[0.75em] py-5 w-full text-bold lg:py-6" type="text" inputMode="numeric" pattern="\d{8}" maxLength={8} placeholder="********" />

      <Button
        disabled={isLoading}
        className="w-full mt-3 py-5 rounded-md md:mt-3 flex items-center justify-center" >
        <p className="uppercase font-bold text-xs"></p>
        <ArrowRight size={15} />
      </Button>
    </form>
  );
}