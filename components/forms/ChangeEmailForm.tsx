import { useSelector } from "react-redux"
import { Input } from "../ui/input"
import { RootState } from "@/store/store"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

export default function ChangeEmailForm() {
  const user = useSelector((state: RootState) => state.userSlice.user)

  return <form className="flex flex-col mt-5 gap-3">
    <div>
      <Label htmlFor="current-email" className="mb-2">Current Email</Label>
      <Input disabled id="current-email" type="email" placeholder={user?.email} className="pl-4 py-5 placeholder:text-card-foreground rounded-sm placeholder:text-sm" />
    </div>

    <div>
      <Label htmlFor="new-email" className="mb-2">New Email</Label>
      <Input id="new-email" type="email" className="pl-4 py-5 placeholder:text-card-foreground rounded-sm placeholder:text-sm" />
    </div>

    <div className="w-full flex mt-3 justify-end gap-3">
      <Button variant={'outline'} type="button">
        Cancel
      </Button>
      <Button className="" >
        Confirm 
      </Button>
    </div>
  </form>
}