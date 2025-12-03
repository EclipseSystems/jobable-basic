import { AppSidebar } from "./app-sidebar";
import { Navbar } from "./navbar";

import { cn } from "../../lib/utils";

import { SidebarProvider } from "../ui/sidebar";

import { TTButton } from "../ttButton";
import { ModeToggle } from "../mode-toggle";

import { Bell, CircleQuestionMark, ListCheck } from "lucide-react";
import { Link, Outlet } from "react-router";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { IssueForm } from "./issue-form";
import { useState } from "react";
import { Notifications } from "./notifications";

export default function Layout() {
  const [showIssueForm, setShowIssueForm] = useState(false)
  
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
            <Link to={{ pathname: './tasks' }}>
              <TTButton title='Tasks' Icon={ListCheck} />
            </Link>
            <Notifications />

            {/* Help center */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger>
                <TTButton title="Help center" Icon={CircleQuestionMark} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Product roadmap</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setShowIssueForm(true)}>Report an issue</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
          </div>
        </Navbar>
        <main className="p-4">
          <Outlet />
        </main>
      </div>
      <IssueForm formOpen={showIssueForm} formOpenChange={setShowIssueForm} />
    </SidebarProvider>
  );
}
