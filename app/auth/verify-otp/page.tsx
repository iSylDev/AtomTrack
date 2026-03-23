import VerifyOtpForm from "@/components/auth/components/VerifyOtpForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export default function VerifyOtpPage() {
  return (
    <div className="">
      <Card className="flex flex-col items-center w-full max-w-130 mx-auto my-auto">
        <CardHeader className="w-full mx-auto items-center">
          <div className="flex flex-col items-center">
            <div className="bg-primary/20 w-fit p-2 rounded-full">
              <Image src={'/images/auth-icons/shield.png'} alt="Shield Icon" width={20} height={10} />
            </div>

            <div className="text-center">
              <h3 className="text-2xl">Verify your identity</h3>
              <p>We've sent a 6-digit email to smallz@gmail.com. Please enter it below</p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="w-full mt-6">
          <VerifyOtpForm />
          <div className="flex flex-col mt-7">
            <p className="text-center">Didn't receive the code? <Button className="text-chart-1 pl-1" variant={'link'}>Resend</Button> </p>
            <Link href={'/auth?mode'} className={cn(buttonVariants({ variant: 'ghost' }), 'w-fit mx-auto')}>
              <ArrowLeft />
              <p>Back to Login</p>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}