import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";


export default function VerifyOtpPage() {
  return (
    <div className="">
      <Card className="flex flex-col items-center w-full">
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
      </Card>
    </div>
  );
}