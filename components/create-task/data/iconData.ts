import {
    // Row 1: Essentials
    Star, Heart, House, BriefcaseBusiness, CheckCircle2,
    // Row 2: Health & Wellness
    Dumbbell, BicepsFlexed, AlarmClock, ChefHat, Utensils,
    // Row 3: Lifestyle & Finance
    Wallet, Percent, Handbag, ShoppingCart, Coffee,
    // Row 4: Creativity & Social
    Palette, Music, Camera, MessageCircle, GraduationCap,
    // Row 5: Environment & Tech
    Sun, Moon, TreePine, Laptop, Smartphone
} from 'lucide-react';

export const CUSTOM_CATEGORY_ICON_CONFIG = {
    // Essentials
    Star, Heart, House, BriefcaseBusiness, CheckCircle2,
    // Health
    Dumbbell, BicepsFlexed, AlarmClock, ChefHat, Utensils,
    // Finance/Shopping
    Wallet, Percent, Handbag, ShoppingCart, Coffee,
    // Personal/Education
    Palette, Music, Camera, MessageCircle, GraduationCap,
    // Misc/Tech
    Sun, Moon, TreePine, Laptop, Smartphone
} as const;

export type IconName = keyof typeof CUSTOM_CATEGORY_ICON_CONFIG;

export const iconList = Object.keys(CUSTOM_CATEGORY_ICON_CONFIG).map((key) => ({
    icon: key as IconName
}));