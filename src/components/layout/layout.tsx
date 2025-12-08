import { useState } from "react";

import { cn } from "../../lib/utils";
import { Link, Outlet, useLocation } from "react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { SidebarProvider } from "../ui/sidebar";

import { AppSidebar } from "./app-sidebar";
import { IssueForm } from "./issue-form";
import { ModeToggle } from "../mode-toggle";
import { Navbar } from "./navbar";
import { Notifications } from "./notifications";
import { TTButton } from "../mods/ttButton";

import { CircleQuestionMark, ListCheck } from "lucide-react";

export default function Layout() {
  let currentPage = useLocation()

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
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentPage.pathname}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex gap-2">
            {/* Theme toggle */}
            <ModeToggle />

            {/* Tasks */}
            <Link to={{ pathname: './tasks' }}>
              <TTButton title='Tasks' Icon={ListCheck} />
            </Link>

            {/* Notifications */}
            <Notifications />

            {/* Help center */}
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger>
                <TTButton title="Help center" Icon={CircleQuestionMark} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align={'start'} className={'w-40'}>
                <DropdownMenuItem>Help guide</DropdownMenuItem>
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
