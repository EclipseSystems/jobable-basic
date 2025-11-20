import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { NavUser } from "./nav-user";
import { Link } from "react-router";
import { BarChart, Calendar, Home, ListChecks, Mail, MessageCircle, Phone, Plus, Users, type LucideIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";

function SidebarMenuLink({ title, path, Icon }: {
  title: string
  path: string
  Icon: LucideIcon
}) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        tooltip={title}
      >
        <Link to={path}>
          <Icon />{title}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const currentUser = {
    name: 'Mitchell Nugent',
    email: 'mitchell.nugent@epicassist.org',
    avatar: 'https://avatars.githubusercontent.com/u/124599?v=4'
  }

  return (
    <Sidebar collapsible='icon' side='left' variant='floating' {...props}>
      <SidebarHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton tooltip={'New item'}>
              <Plus />
              <span>New item</span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>New client</DropdownMenuItem>
            <DropdownMenuItem>New appointment</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>
      <SidebarContent>

        {/* Add links here */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuLink title='Dashboard' path='./dashboard' Icon={Home} />
          </SidebarMenu>
        </SidebarGroup>

        {/* Record management */}
        <SidebarGroup>
          <SidebarGroupLabel>Record management</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuLink title='Clients' path='./clients' Icon={Users} />
            <SidebarMenuLink title='Appointments' path='./appointments' Icon={Calendar} />
            <SidebarMenuLink title='Reports' path='./reports' Icon={BarChart} />
          </SidebarMenu>
        </SidebarGroup>

        {/* Tools */}
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuLink title='Chat' path='./chat' Icon={MessageCircle} />
            <SidebarMenuLink title='Call' path='./call' Icon={Phone} />
            <SidebarMenuLink title='Mail' path='./mail' Icon={Mail} />
            <SidebarMenuLink title='Forms' path='./forms' Icon={ListChecks} />
          </SidebarMenu>
        </SidebarGroup>

        {/* End links here */}

      </SidebarContent>
      <SidebarFooter>
        <NavUser user={currentUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
