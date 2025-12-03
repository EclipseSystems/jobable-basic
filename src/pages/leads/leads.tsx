import { DataTable } from "@/components/data-table";
import { leadsColumns } from "@/components/columns"
import { PageTitle } from "@/components/pageTitle"

const leadsData = [
  { id: 1, name: 'Mitchell Nugent', address: '75 Robinson Road', suburb: 'Nundah', state: 'Queensland', postcode: '4012', email: 'mitchell.nugent@epicassist.org', phone: '+61 458567829' }
]

export default function Leads() {
  return (
    <>
      <PageTitle title={'Leads'} padding={false} />
      <DataTable columns={leadsColumns} data={leadsData} />
    </>
  )
}