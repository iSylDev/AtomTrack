import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { BadgeQuestionMark } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function AuthHeader() {


  return (
    <header className="flex justify-between items-center bg-background z-50 pr-4 mt-5 mb-12">
      <div className="flex items-center ml-2">
        <Image src={'/images/logo.png'} alt="" height={35} width={35} />
        <h3 className="text-xl font-bold ml-2">AtomTracker</h3>
      </div>
      <div className="shirnk-0 flex items-center gap-3">
        <Button variant={'ghost'} className="p-0">
          <BadgeQuestionMark size={23}/>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  )
}