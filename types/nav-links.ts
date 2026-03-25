import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export type NavLinkProp = {
  title: string;
  to: string;
  icon?: LucideIcon;
  subLinks?: { title: string; to: string; icons?: LucideIcon }[];
};
