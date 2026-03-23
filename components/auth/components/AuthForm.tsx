'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader, Loader2, Mail, User } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from 'react-hook-form'
import { loginSchema, signupSchema, type LoginSchema, type SignupSchema } from "@/schemas/AuthSchema";
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

  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || 'sign-up'
  const isLogin = mode === 'sign-in'
  console.log(mode);

  const currentSchema = isLogin ? loginSchema : signupSchema

  const { register, handleSubmit, formState: { errors } } = useForm<LoginSchema | SignupSchema>({
    resolver: zodResolver(currentSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  })

  async function submitFunc(data: LoginSchema | SignupSchema) {
    setIsLoading(true);

    try {
      const result = await authAction({ mode, data })

      if (result.success) {
        toast.success(result.message)
        router.push(`/auth/verify-otp?email=${encodeURIComponent(data.email)}`)
      } else {
        toast.error(result.message || 'Something went wrong. Please try again')
        setIsLoading(false)
      }
    }
    catch (error: any) {
      toast.error('An unexpected error occured')
      setIsLoading(false)
    }
  }


  return (
    <Card className="w-full max-w-md relative px-2 pt-5 pb-7 lg:mt-7">
      <CardHeader className="mb-5">
        <CardTitle className='text-2xl font-bold text-foreground'>{isLogin ? 'Welcome Back' : 'Create your Account'}</CardTitle>
        <CardDescription className='text-sm'>{isLogin ? 'Sign in to continue to your account.' : 'Join the ecosystem of high-performance tracking.'}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(submitFunc)}>
          <div className="grid gap-5">
            {
              !isLogin && (
                <div className="grid gap-3">
                  <Label htmlFor="username">Username</Label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 stroke-card-foreground/50" size={17} />
                    <Input id="username" type="text" placeholder="TrackerLily" className="pl-10 py-5 placeholder:text-card-foreground/30 rounded-sm placeholder:text-sm" {...register('username')} />
                  </div>
                  {errors && 'username' in errors && errors.username && <p className="text-destructive text-sm -mt-2">{errors.username.message}</p>}
                </div>
              )
            }
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 stroke-card-foreground/50" size={17} />
                <Input id="email" type="email" placeholder="Lily@tracker.com" className="pl-10 py-5 placeholder:text-card-foreground/30 rounded-sm placeholder:text-sm" {...register('email')} />
              </div>
              {errors.email && <p className="text-destructive text-sm -mt-2">{errors.email.message}</p>}
            </div>
          </div>
          <Button className="w-full mt-5 py-5 rounded-md md:mt-6" >
            {
              !isLoading && (<p>{!isLogin ? 'Get Started' : 'Continue'}</p>)
            }{
              isLoading && (<Loader2 className="animate-spin" />)
            }
          </Button>
        </form>

        <p className="text-center mt-7 text-sm ">{isLogin ? 'New to AtomTrack?' : 'Already have an account?'}
          <Link href={isLogin ? `/auth?mode` : `/auth?mode=sign-in`} className="text-primary font-semibold hover:underline transition-all duration-300 ease-in-out pl-1">{!isLogin ? 'Sign in' : 'Sign up'}</Link>
        </p>

        <div>
          <div className="flex justify-center items-center mt-4 gap-3">
            <Separator className="w-full" />
            <p className="text-center ">Or</p>
            <Separator />
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <Button className="w-full py-5" variant='outline'>
              <Image src='/images/auth-icons/google-icon.png' alt="Google logo" width={18} height={18} />
              {isLogin ? 'Continue with Google' : 'Sign in with Google'}
            </Button>
            <Button className="w-full py-5" variant={'outline'}>
              <Image src='/images/auth-icons/github-icon.png' alt="Google logo" width={28} height={28} />
              {isLogin ? 'Continue with Github' : 'Sign in with Github'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}