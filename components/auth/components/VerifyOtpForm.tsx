'use client'

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema, signupSchema, SignupSchema } from "@/schemas/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { VerfiyOtpSchema, verifiyOtpSchema } from "@/schemas/VerifyOtpSchema";


export default function VerifyOtpForm() {
  const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<VerfiyOtpSchema>({
    resolver: zodResolver(verifiyOtpSchema),
    defaultValues: {
      token: ''
    }
  })

  function submitFunc(data: any) {
    console.log(data);

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
        className="text-center text-lg tracking-[0.75em] py-5 w-full text-bold lg:py-6" type="text" inputMode="numeric" pattern="\d{6}" maxLength={6} placeholder="******" />

      <Button className="w-full mt-3 py-5 rounded-md md:mt-3 flex items-center justify-center " >
        <p className="uppercase font-bold text-xs">verify & continue</p>
        <ArrowRight />
      </Button>
    </form>
  );
}