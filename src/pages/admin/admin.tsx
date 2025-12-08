import { PageTitle } from "@/components/pageTitle"

import { Billing } from "./tabs/billing"
import { Branding } from "./tabs/branding"
import { Storage } from "./tabs/storage"
import { Templates } from "./tabs/templates"
import { UserManagement } from "./tabs/users"
import { Workflows } from "./tabs/workflows"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Box, DollarSign, Flag, LayoutTemplate, Lock, Users, Workflow } from "lucide-react"
import { Security } from "./tabs/security"

const tabs = [
  { name: 'Branding', value: 'branding', element: Branding, icon: Flag},
  { name: 'Users', value: 'users', element: UserManagement, icon: Users },
  { name: 'Billing', value: 'billing', element: Billing, icon: DollarSign },
  { name: 'Storage', value: 'storage', element: Storage, icon: Box },  
  { name: 'Security', value: 'security', element: Security, icon: Lock },
  { name: 'Templates', value: 'templates', element: Templates, icon: LayoutTemplate },
  { name: 'Workflows', value: 'workflows', element: Workflows, icon: Workflow }
]

export default function Admin() {
  return (
    <>
      <PageTitle title={'Admin portal'} padding={true} />
      <Tabs
        defaultValue={tabs[0].value}
        orientation="vertical"
        className="w-full flex flex-row items-start justify-center gap-2"
      >
        <TabsList className="grid grid-cols-1 h-auto w-fit p-0 divide-y border shrink-0">
          {tabs.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className="rounded-none first:rounded-t-md last:rounded-b-md bg-background h-10 w-50 p-0 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <item.icon /> {item.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full h-full border rounded-lg p-6">
          {tabs.map((item) => (
            <TabsContent value={item.value}>
              <item.element />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </>
  )
}