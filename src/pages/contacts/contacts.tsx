import { contactColumns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { PageTitle } from "@/components/pageTitle"

const contactData = [
  { id: 1, name: 'Isaac Nicol', organisation: 'EPIC Assist', role: 'ICT Systems Analyst' }
]

export default function Contacts() {
  return (
    <>
      <PageTitle title={'Contacts'} padding={false} />
      <DataTable columns={contactColumns} data={contactData} />
    </>
  )
}