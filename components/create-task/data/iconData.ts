import {
    Star, Heart, House, BriefcaseBusiness, CheckCircle2,
    Dumbbell, BicepsFlexed, AlarmClock, ChefHat, Utensils,
    Wallet, Percent, Handbag, ShoppingCart, Coffee,
    Palette, Music, Camera, MessageCircle, GraduationCap,
    Sun, Moon, TreePine, Laptop, Smartphone
} from 'lucide-react';

export const CUSTOM_CATEGORY_ICON_CONFIG = {
    Star, Heart, House, BriefcaseBusiness, CheckCircle2,
    Dumbbell, BicepsFlexed, AlarmClock, ChefHat, Utensils,
    Wallet, Percent, Handbag, ShoppingCart, Coffee,
    Palette, Music, Camera, MessageCircle, GraduationCap,
    Sun, Moon, TreePine, Laptop, Smartphone
} as const;

export type IconName = keyof typeof CUSTOM_CATEGORY_ICON_CONFIG;

export const iconList = Object.keys(CUSTOM_CATEGORY_ICON_CONFIG).map((key) => ({
    icon: key as IconName
}));