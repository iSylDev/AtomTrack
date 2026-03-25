import UserAvatar from "../shared/UserAvatar";
import { Card } from "../ui/card";


export default function ProfileCard() {

  return (
    <Card className="bg-sidebar/10 px-3 flex-row items-center gap-4" >
      <UserAvatar />
      <div>
        <h3 className="text-foreground text-sm">Krypto Lily</h3>
        <p className="text-xs">Beta User</p>
      </div>
    </Card>
  )
}