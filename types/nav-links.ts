import {LucideIcon} from 'lucide-react'

export type NavLinkProp = {
    title: string;
    to: string;
    icon: string;
    subLinks?: { title: string; to: string }[];
};
