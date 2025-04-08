import {
  LayoutDashboard,
  Dumbbell,
  NotebookPen,
  TableOfContents,
} from "lucide-react";

import { type NavItem } from "@/types/nav/item";

export const MainItems: NavItem[] = [
  {
    title: "Home",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Routines",
    url: "/routines",
    icon: NotebookPen,
  },
  {
    title: "Tracker",
    url: "/workouts",
    icon: Dumbbell,
  },
  {
    title: "Exercises",
    url: "/exercises",
    icon: TableOfContents,
  },
];
