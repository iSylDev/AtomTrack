
import { NavLinkProp } from "@/types/nav-links";
import {CircleUserRound, Bolt } from 'lucide-react'

export const profileCardData: NavLinkProp[] = [
  {
    title: "View Profile",
    to: "/dashboard/settings",
    icon: CircleUserRound 
  },
  {
    title: 'Settings',
    to: '/dashboard/settings',
    icon: Bolt
  }
];
