import { NavLinkProp } from "@/types/nav-links";
import {
  LayoutPanelLeft,
  CalendarArrowDown,
  Store,
  Settings,
  FileChartColumnIncreasing,
} from "lucide-react";

export const navLinkData: NavLinkProp[] = [
  {
    title: "Overview",
    to: "/dashboard/overview",
    icon: LayoutPanelLeft,
  },
  {
    title: "Today's Tasks",
    to: "/dashboard/task-today",
    icon: CalendarArrowDown,
  },
  {
    title: "Reports",
    to: "/dashboard/reports",
    icon: FileChartColumnIncreasing,
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
    icon: Store,
  },
];
