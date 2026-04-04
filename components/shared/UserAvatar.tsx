import { useSelector } from "react-redux"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar"


export default function UserAvatar({ className, size }: { className?: string, size?: 'sm' | 'lg'  }) {


  return (
    <Avatar className={className} size={size}>
      <AvatarImage src={'images/'}  />
      {/* <AvatarBadge /> */}
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}