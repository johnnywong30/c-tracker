"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LightModeMenuItem } from "@/components/ui/atoms/theme/light";
import { DarkModeMenuItem } from "@/components/ui/atoms/theme/dark";
import { SystemModeMenuItem } from "@/components/ui/atoms/theme/system";

export default function ModeToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="size-8">
          <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="ml-2">
        <LightModeMenuItem />
        <DarkModeMenuItem />
        <SystemModeMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
