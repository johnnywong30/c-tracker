"use client";

import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { LightModeToggle } from "@/components/ui/atoms/theme/light";
import { DarkModeToggle } from "@/components/ui/atoms/theme/dark";
import { SystemModeToggle } from "@/components/ui/atoms/theme/system";

export default function ThemeToggle({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-row justify-around w-full", className)}
      {...props}
    >
      <LightModeToggle />
      <DarkModeToggle />
      <SystemModeToggle />
    </div>
  );
}
