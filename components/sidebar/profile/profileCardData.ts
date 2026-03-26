
import { NavLinkProp } from "@/types/nav-links";
import {CircleUserRound, Bolt } from 'lucide-react'

export const profileCardData: NavLinkProp[] = [
  {
    title: "View Profile",
    to: "/",
    icon: CircleUserRound 
  },
  {
    title: 'Settings',
    to: '/',
    icon: Bolt
  }
];
