import { Link, useLocation } from "react-router";
import { type ReactNode } from "react";

import { ChevronRight } from "lucide-react";

import type { NavCollapsible, NavGroup, NavItem, NavLink } from "./types";

import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "../ui/sidebar";

const NavBadge = ({ children }: { children: ReactNode }) => (
  <Badge className='rounded-full px-1 py-0 text-xs'>{children}</Badge>
)

const SidebarMenuCollapsedDropdown = ({item,href}: {item: NavCollapsible, href: string}) => {
  return (
    <SidebarMenuItem>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={checkIsActive(href, item)}
          >
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            {item.badge && <NavBadge>{item.badge}</NavBadge>}
            <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent side='right' align='start' sideOffset={4}>
          <DropdownMenuLabel>
            {item.title} {item.badge ? `(${item.badge})` : ''}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {item.children.map(sub => (
            <DropdownMenuItem key={`${sub.title}-${sub.path}`} asChild>
              <Link
                to={sub.path}
                className={`${checkIsActive(href, sub) ? 'bg-secondary' : ''}`}
              >
                {sub.icon && <sub.icon />}
                <span className='max-w-52 text-wrap'>{sub.title}</span>
                {sub.badge && (
                  <span className='ml-auto text-xs'>{sub.badge}</span>
                )}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  )
}

const SidebarMenuLink = ({ item, href }: { item: NavLink; href: string }) => {
  const { setOpenMobile } = useSidebar()
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        asChild
        isActive={checkIsActive(href, item)}
        tooltip={item.title}
      >
        <Link to={item.path} onClick={() => setOpenMobile(false)}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
          {item.badge && <NavBadge>{item.badge}</NavBadge>}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

export function NavGroup({ title, children }: NavGroup) {
  const { pathname } = useLocation()
  const { state } = useSidebar()
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {children.map(item => {
          const key = `${item.title}-${item.path}`
          if (!item.children)
            return <SidebarMenuLink key={key} item={item} href={pathname} />
          if (state === 'collapsed')
            return (
              <SidebarMenuCollapsedDropdown
                key={key}
                item={item}
                href={pathname}
              />
            )
          })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

function checkIsActive(href: string, item: NavItem, mainNav = false) {
  return (
    href === item.path || // /endpint?search=param
    href.split('?')[0] === item.path || // endpoint
    !!item?.children?.filter(i => i.path === href).length || // if child nav is active
    (mainNav && href.split('/')[1] !== '')
  )
}