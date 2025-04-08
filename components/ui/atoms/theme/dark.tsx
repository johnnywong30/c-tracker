"use client";

import { Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function DarkModeMenuItem() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
  );
}

export function DarkModeToggle() {
  const { setTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Moon
            onClick={() => setTheme("dark")}
            className={cn("cursor-pointer size-4 text-primary")}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Dark</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
