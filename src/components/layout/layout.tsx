import { AppSidebar } from "./app-sidebar";
import { Navbar } from "./navbar";

import { cn } from "../../lib/utils";

import { SidebarProvider } from "../ui/sidebar";

import { TTButton } from "../ttButton";
import { ModeToggle } from "../mode-toggle";

import { Bell, CircleQuestionMark, ListCheck } from "lucide-react";
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
            <Link to={{
              pathname: './tasks'
            }}>
              <TTButton title='Tasks' Icon={ListCheck} />
            </Link>
            <TTButton title='Notifications' Icon={Bell} />
            <TTButton title="Help center" Icon={CircleQuestionMark} />
          </div>
        </Navbar>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
