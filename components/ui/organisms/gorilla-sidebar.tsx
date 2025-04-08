"use client";

import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";

import NavMain from "@/components/ui/molecules/nav/main";
import NavUser from "@/components/ui/molecules/nav/user";
import ThemeGroupToggle from "@/components/ui/molecules/theme/toggle";
import ThemeMenuToggle from "@/components/ui/molecules/theme/menu";

import { MainItems } from "@/constants/nav/items";
import { type User } from "@/types/auth/user";

type GorillaSidebarProps = {
  user: User;
} & React.ComponentProps<typeof Sidebar>;

export default function GorillaSidebar({ ...props }: GorillaSidebarProps) {
  const { state, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>{isMobile && <SidebarTrigger />}</SidebarHeader>
      <SidebarContent>
        <NavMain items={MainItems} groupName="Gorilla Analysis" />
      </SidebarContent>
      <SidebarFooter>
        {state === "expanded" || isMobile ? (
          <ThemeGroupToggle />
        ) : (
          <ThemeMenuToggle />
        )}
        <Separator />
        <NavUser user={props.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
