import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { Navbar } from "./navbar";
import { cn } from "../../lib/utils";
import { Outlet } from "react-router";
import { ModeToggle } from "../mode-toggle";

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
          <div className="flex">
            <ModeToggle/>
          </div>
        </Navbar>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
