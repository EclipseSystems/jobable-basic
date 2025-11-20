import type { LucideIcon } from "lucide-react"

interface BaseNavItem {
  title: string
  badge?: string
  icon?: LucideIcon
  hide?: boolean
}

type NavCollapsible = BaseNavItem & {
  children: (BaseNavItem & { path: string })[]
  path?: never
}

type NavLink = BaseNavItem & {
  path: string
  children?: never
}

type NavItem = NavCollapsible | NavLink

interface NavGroup {
  title: string
  children: NavItem[]
}

export type { NavCollapsible, NavGroup, NavItem, NavLink} 