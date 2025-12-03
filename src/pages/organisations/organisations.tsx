import { DataTable } from "@/components/data-table";
import { PageTitle } from "@/components/pageTitle"
import { orgColumns } from "@/components/columns";

const orgData = [
  { id: 1, abn: '63 946 234 656', name: 'EPIC Assist', city: 'Nundah' }
]

export default function Organisations() {
  return (
    <>
      <PageTitle title={'Organisations'} padding={false} />
      <DataTable columns={orgColumns} data={orgData} />
    </>
  )
}