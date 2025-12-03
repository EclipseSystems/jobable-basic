import { PageTitle } from "@/components/pageTitle";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Calendar, Clock, FileStack, Notebook, User } from "lucide-react";

import { Activity } from "./activity";
import { Appointments } from "./appointments";
import { Notes } from "./notes";
import { Profile } from "./profile";
import { Files } from "./files";

const tabs = [
  { value: 'Profile', element: <Profile/>, icon: User },
  { value: 'Appointments', element: <Appointments />, icon: Calendar },
  { value: 'Files', element: <Files />, icon: FileStack },
  { value: 'Notes', element: <Notes />, icon: Notebook },
  { value: 'Activity', element: <Activity /> ,icon: Clock }
]

export default function ClientPage() {
  return (
    <>
      <PageTitle title={'Details'} padding={false} />
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
              <item.icon /> {item.value}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="w-full h-full border rounded-lg p-6">
          {tabs.map((item) => (
            <TabsContent value={item.value}>
              <h1 className="text-xl font-bold pb-4">{item.value}</h1>
              {item.element}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </>
  );
}