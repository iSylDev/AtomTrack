import {icons} from "lucide-react";

type categoryProps = {
    imageUrl: string;
    name: string;
    icon: keyof typeof icons;
    iconColor: string;
}

export const category: categoryProps[] = [
    {
        imageUrl: '/imageUrls/create-task/fitness.png',
        name: 'Fitness',
        icon: 'Dumbbell',
        iconColor: 'stroke-blue-300'
    },
    {
        imageUrl: '/imageUrls/create-task/stuudy.png',
        name: 'Study',
        icon: 'BookOpen',
        iconColor: 'stroke-gray-300'
    },
    {
        imageUrl: '/imageUrls/create-task/health.png',
        name: 'Health',
        icon: 'HeartPulse',
        iconColor: 'stroke-red-400'
    },
    {
        imageUrl: '/imageUrls/create-task/faith.png',
        name: 'Faith',
        icon: 'HouseHeart',
        iconColor: 'stroke-yellow-300'
    },
    {
        imageUrl: '/imageUrls/create-task/work.png',
        name: 'Work',
        icon: 'BriefcaseBusiness',
        iconColor: 'stroke-blue-400'
    },
    {
        imageUrl: '/imageUrls/create-task/social.png',
        name: 'Social',
        icon: 'MessageCircleDashed',
        iconColor: 'stroke-green-300'
    },
    {
        imageUrl: '/imageUrls/create-task/finance.png',
        name: 'Finance',
        icon: 'WalletMinimal',
        iconColor: 'stroke-orange-400'
    },
    {
        imageUrl: '/imageUrls/create-task/custom.png',
        name: 'Custom',
        icon: 'ListPlus',
        iconColor: 'stroke-chart-1'
    }
]