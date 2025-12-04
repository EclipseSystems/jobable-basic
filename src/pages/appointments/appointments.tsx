import { DataTable } from "@/components/data-table"
import { PageTitle } from "@/components/pageTitle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { apptColumns } from "@/components/columns"

const apptData = [
  { id: 1, name: 'John Smith', date: '2/12/2025', startTime: '1:00 PM', endTime: '2:00 PM', method: 'Phone' },
  { id: 2, name: 'Edward Norton', date: '3/12/2025', startTime: '9:00 AM', endTime: '10:00 AM', method: 'Face-to-face' }
]

const tabs = [
  { name: 'Table', value: 'table' },
  { name: 'Calendar', value: 'calendar' }
]

export default function Appointments() {
  return (
    <>
      <PageTitle title={'Appointments'} padding={true}/>
      <Tabs defaultValue={tabs[0].value} className={'size-full'}>

        <TabsList className={'p-0 mb-2 h-10 w-50 bg-background gap-1'}>
          {tabs.map((tab) => (
            <TabsTrigger
              className={'data-[state=active]:bg-accent data-[state=active]:shadow-none data-[state=active]:text-primary'}
              value={tab.value}
            >
              {tab.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent className={'h-full w-full'} value={'table'}>
          <DataTable columns={apptColumns} data={apptData} />
        </TabsContent>

        <TabsContent className={'h-full w-full'} value={'calendar'}>
        </TabsContent>
      </Tabs>
    </>
  )
}