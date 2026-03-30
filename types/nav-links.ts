import * as Icons from 'lucide-react'

export type NavLinkProp = {
  title: string;
  to: string;
  icon: keyof typeof Icons;
  subLinks?: { title: string; to: string }[];
};
