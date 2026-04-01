'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2, Mail, User } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from 'react-hook-form'
import { loginSchema, type LoginSchema } from "@/schemas/AuthSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { authAction } from "@/actions/auth-actions/authAction";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";



export default function AuthForm() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
    },
  })

  async function submitFunc(data: LoginSchema) {
    setIsLoading(true);

    try {
      //  Send otp to the user;
      const result = await authAction(data);

      if (result.success) {
        toast.success(result.message);
        router.push(`/auth/verify-otp?email=${encodeURIComponent(data.email)}`) // Send them to the verification page
      } else {
        toast.error(result.message || 'Something went wrong. Please try again');
        setIsLoading(false);
      }
    }
    catch (error: any) {
      toast.error('An unexpected error occured');
      setIsLoading(false);
    }
  }


  return (
    <div className="w-full">
      <Card className="w-full max-w-md mx-auto px-2 pb-7 lg:mt-7">
        <CardHeader className="mb-5">
          <CardTitle className='text-2xl font-bold text-foreground'>Continue to Dashboard</CardTitle>
          <CardDescription className='text-sm'>Step into the ecosystem of atomic tracking.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(submitFunc)}>
            <div className="grid gap-5">
              <div className="grid gap-3">
                {/* <Label htmlFor="email">Email</Label> */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 stroke-card-foreground/50" size={17} />
                  <Input id="email" type="email" placeholder="Email" className="pl-10 py-5 placeholder:text-card-foreground/30 rounded-sm placeholder:text-sm" {...register('email')} />
                </div>
                {errors.email && <p className="text-destructive text-xs italic -mt-2">{errors.email.message}!</p>}
              </div>
            </div>
            <Button className="w-full mt-4 py-5 rounded-md md:mt-5" >
              {
                !isLoading && (<p>Continue</p>)
              }{
                isLoading && (<Loader2 className="animate-spin" />)
              }
            </Button>
          </form>

          <div>
            <div className="flex justify-center items-center mt-4 gap-3">
              <Separator className="w-full" />
              <p className="text-center ">Or</p>
              <Separator />
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <Button className="w-full py-5 text-sm" variant='outline'>
                <Image src='/images/auth-icons/google-icon.png' alt="Google logo" width={17} height={15} />
                <p>Continue with Google</p>
              </Button>
              <Button className="w-full py-5 text-sm" variant={'outline'}>
                <Image src='/images/auth-icons/github-icon.png' alt="Google logo" width={25} height={25} />
                <p>Continue with Discord</p>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}