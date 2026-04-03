import { useSelector } from "react-redux"
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../ui/avatar"
import type { RootState } from "@/store/store"


export default function UserAvatar({ className, size }: { className?: string, size?: 'sm' | 'lg'  }) {
  const profilePicture = useSelector((state: RootState) => state.userSlice.user?.profile_picture)

  return (
    <Avatar className={className} size={size}>
      <AvatarImage src={profilePicture}  />
      {/* <AvatarBadge /> */}
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}