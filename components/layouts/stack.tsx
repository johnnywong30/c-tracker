import React from "react";
import { cn } from "@/lib/utils";

const StackLayout = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={cn("grid grid-cols-1 gap-2", className)}>
      {children}
    </div>
  );
};

export default StackLayout;
