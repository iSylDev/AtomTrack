import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"


export default function UserAvatar({ className }: { className?: string }) {

  return (
    <Avatar className={className}>
      <AvatarImage src="https://github.com/shadcn.png" className="" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}