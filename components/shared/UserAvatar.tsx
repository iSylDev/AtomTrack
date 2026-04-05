import { useSelector } from "react-redux"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar"
import { useUser } from "@/hooks/useUser"


export default function UserAvatar({ className, size }: { className?: string, size?: 'sm' | 'lg' }) {
  const { user } = useUser()

  return (
    <Avatar className={className} size={size}>
      <AvatarImage src={user?.profile_picture || '/'} />
      {/* <AvatarBadge /> */}
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}