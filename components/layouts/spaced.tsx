import React from "react";
import { cn } from "@/lib/utils";

const SpacedLayout = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn("max-w-7xl mx-auto px-6 sm:px-4 my-4 w-full", className)}
    >
      {children}
    </div>
  );
};

export default SpacedLayout;
