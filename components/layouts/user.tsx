import { PropsWithChildren } from "react";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { auth0 } from "@/lib/auth0";

import GorillaSidebar from "@/components/ui/organisms/gorilla-sidebar";

import { type User } from "@/types/auth/user";

export default async function UserLayout({ children }: PropsWithChildren) {
  const session = await auth0.getSession();

  const user: User = {
    name: session?.user.name ?? "",
    email: session?.user.email ?? "",
    avatar: session?.user.picture ?? "",
  };

  return (
    <SidebarProvider>
      <GorillaSidebar user={user} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <></>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
