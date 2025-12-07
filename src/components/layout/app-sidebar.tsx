import { useState } from 'react'

import { Link } from 'react-router'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Dialog } from '../ui/dialog'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'

import { BarChart, Binoculars, Calendar, Globe, Home, ListChecks, Mail, Megaphone, MessageCircle, Phone, Plus, Settings, User, Users, type LucideIcon } from 'lucide-react'

import DashboardLogo from '@/assets/epic_logo.jpg'
import { DownloadApp } from './downloadApp'
import { NavUser } from './nav-user'
import { NewAppt } from './newAppt'
import { NewLead } from './newLead'

function SidebarMenuLink({ title, path, Icon }: {
  title: string
  path: string
  Icon: LucideIcon
}) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild tooltip={title}>
        <Link to={path}>
          <Icon />{title}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [showNewAppt, setShowNewAppt] = useState(false)
  const [showNewLead, setShowNewLead] = useState(false)

  const currentUser = {
    name: 'Mitchell Nugent',
    email: 'mitchell.nugent@epicassist.org',
    avatar: 'https://avatars.githubusercontent.com/u/124599?v=4'
  }

  return (
    <Sidebar collapsible='icon' side='left' variant='floating' {...props}>
      <SidebarHeader>
        <img className={'p-2'} width='70' src={DashboardLogo} />

        {/* New item menu */}
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger>
            <SidebarMenuButton tooltip={'New item'}>
              <Plus />
              <span>New item</span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setShowNewAppt(true)}><Calendar />New appointment</DropdownMenuItem>
            <DropdownMenuItem><User />New client</DropdownMenuItem>
            <DropdownMenuItem><Megaphone />New contact</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setShowNewLead(true)}><Binoculars />New lead</DropdownMenuItem>
            <DropdownMenuItem><Globe />New organisation</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Dialog open={showNewAppt} onOpenChange={setShowNewAppt}><NewAppt /></Dialog>
        <Dialog open={showNewLead} onOpenChange={setShowNewLead}><NewLead /></Dialog>
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
            <SidebarMenuLink title={'Clients'} path={'./clients'} Icon={Users} />
            <SidebarMenuLink title={'Appointments'} path={'./appointments'} Icon={Calendar} />
            <SidebarMenuLink title={'Leads'} path={'./leads'} Icon={Binoculars} />
            <SidebarMenuLink title={'Contacts'} path={'./contacts'} Icon={Megaphone} />
            <SidebarMenuLink title={'Organisations'} path={'./organisations'} Icon={Globe} />
            <SidebarMenuLink title={'Reports'} path={'./reports'} Icon={BarChart} />
          </SidebarMenu>
        </SidebarGroup>

        {/* Tools */}
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuLink title={'Chat'} path={'./chat'} Icon={MessageCircle} />
            <SidebarMenuLink title={'Call'} path={'./call'} Icon={Phone} />
            <SidebarMenuLink title={'Mail'} path={'./mail'} Icon={Mail} />
            <SidebarMenuLink title={'Forms'} path={'./forms'} Icon={ListChecks} />
          </SidebarMenu>
        </SidebarGroup>

        {/* End links here */}

      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuLink title={'Admin portal'} path={'./admin'} Icon={Settings} />
          <DownloadApp />
        </SidebarMenu>
        <NavUser user={currentUser} />
      </SidebarFooter>
    </Sidebar>
  )
}
