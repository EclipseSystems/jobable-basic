import { AppSidebar } from "./app-sidebar";
import { Navbar } from "./navbar";

import { cn } from "../../lib/utils";

import { Button } from "../ui/button";
import { SidebarProvider } from "../ui/sidebar";

import { ModeToggle } from "../mode-toggle";

import { ListCheck } from "lucide-react";
import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div
        id="content"
        className={cn(
          "ml-auto w-full max-w-full",
          "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]",
          "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
          "transition-[width] duration-200 ease-linear",
          "flex h-svh flex-col",
          "group-data-[scroll-locked=1]/body:h-full",
          "group-data-[scroll-locked=1]/body:has-[main.fixed-main]:h-svh"
        )}
      >
        <Navbar>
          <div className="flex gap-2">
            <ModeToggle/>
            <Link to='/tasks'>
            <Button variant="outline" size="icon"><ListCheck/></Button>
            </Link>
          </div>
        </Navbar>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
