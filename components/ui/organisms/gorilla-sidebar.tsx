"use client";

import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import NavMain from "@/components/ui/molecules/nav/main";
import NavUser from "@/components/ui/molecules/nav/user";

import { type User } from "@/types/auth/user";
import { type NavItem } from "@/types/nav/item";

type GorillaSidebarProps = {
  user: User;
  mainItems: NavItem[];
} & React.ComponentProps<typeof Sidebar>;

export default function GorillaSidebar({ ...props }: GorillaSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <></>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={props.mainItems} groupName="Gorilla Analysis" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={props.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
