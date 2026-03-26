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
    to: "/",
    icon: LayoutPanelLeft,
  },
  {
    title: "Today's Tasks",
    to: "/",
    icon: CalendarArrowDown,
  },
  {
    title: "Reports",
    to: "/",
    icon: FileChartColumnIncreasing,
    subLinks: [
      {
        title: "Weekly",
        to: "/",
      },
      {
        title: "Monthly",
        to: "/",
      },
    ],
  },
  {
    title: "Goal Shop",
    to: "/",
    icon: Store,
  },
  {
    title: "Settings",
    to: "/",
    icon: Settings,
  },
];
