import {NavLinkProp} from "@/types/nav-links";

export const navLinkData: NavLinkProp[] = [
    {
        title: "Overview",
        to: "/dashboard/overview",
        icon: 'LayoutPanelLeft',
    },
    {
        title: 'Create Task',
        to: '/dashboard/create-task',
        icon: 'Plus',
    },
    {
        title: "Today's Tasks",
        to: "/dashboard/task-today",
        icon: 'CalendarArrowDown',
    },
    {
        title: "Reports",
        to: "/dashboard/reports",
        icon: 'FileChartColumnIncreasing',
        subLinks: [
            {
                title: "Weekly",
                to: "/dashboard/reports/weekly",
            },
            {
                title: "Monthly",
                to: "/dashboard/reports/monthly",
            },
        ],
    },
    {
        title: "Goal Shop",
        to: "/dashboard/goal-shop",
        icon: 'Store',
    },
];
