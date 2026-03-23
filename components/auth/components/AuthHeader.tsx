import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { BadgeQuestionMark } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function AuthHeader() {


  return (
    <header className="flex justify-between items-center bg-background">
      <div className="flex items-center -ml-8">
        <Image src={'/images/logo.png'} alt="" height={120} width={120} />
        <h3 className="text-xl font-bold -ml-10">AtomTracker</h3>
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