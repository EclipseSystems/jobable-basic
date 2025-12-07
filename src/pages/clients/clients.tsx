import { DataTable } from "@/components/data-table";
import { clientColumns } from "@/components/columns";
import { PageTitle } from "@/components/pageTitle";

const clientData = [
  { "id": 1, "name": "Cathleen Beament", 'gender': 'Female', 'DOB': '23/06/1987' },
  { "id": 2, "name": "Merill Muckley", 'gender': 'Male', 'DOB': '23/10/1999' },
  { "id": 3, "name": "Fairlie Renyard", 'gender': 'Female', 'DOB': '28/03/1976' },
  { "id": 4, "name": "Madge Dell 'Orto", 'gender': 'Female', 'DOB': '02/02/1983' },
  { "id": 5, "name": "Tailor Loges", 'gender': 'Female', 'DOB': '18/09/1981' },
  { "id": 6, "name": "Miner Coulton", 'gender': 'Male', 'DOB': '24/06/1980' },
  { "id": 7, "name": "Alexis Otham", 'gender': 'Female', 'DOB': '07/08/1999' },
  { "id": 8, "name": "Issie Darree", 'gender': 'Female', 'DOB': '11/04/1987' },
  { "id": 9, "name": "Mic Leighfield", 'gender': 'Male', 'DOB': '20/03/1988' },
  { "id": 10, "name": "Bernhard McCormack", 'gender': 'Male', 'DOB': '30/10/1973' }
]

export interface clientPost {
  id: number
  name: string
}

export default function Clients() {
  return (
    <>
      <PageTitle title={'Clients'} padding={false} />
      <DataTable columns={clientColumns} data={clientData} />
    </>
  );
}