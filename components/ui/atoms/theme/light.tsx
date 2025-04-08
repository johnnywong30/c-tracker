"use client";

import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function LightModeMenuItem() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
  );
}

export function LightModeToggle() {
  const { setTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Sun
            onClick={() => setTheme("light")}
            className={cn("cursor-pointer size-4 text-primary")}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Light</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
