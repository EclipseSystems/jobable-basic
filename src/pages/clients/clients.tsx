import { DataTable } from "@/components/data-table";
import { clientColumns, type Clients } from "@/components/columns";
import { PageTitle } from "@/components/pageTitle";

const clientData: Clients[] = [
  { "id": 1, "name": "Cathleen Beament" },
  { "id": 2, "name": "Merill Muckley" },
  { "id": 3, "name": "Fairlie Renyard" },
  { "id": 4, "name": "Madge Dell 'Orto" },
  { "id": 5, "name": "Tailor Loges" },
  { "id": 6, "name": "Miner Coulton" },
  { "id": 7, "name": "Alexis Otham" },
  { "id": 8, "name": "Issie Darree" },
  { "id": 9, "name": "Mic Leighfield" },
  { "id": 10, "name": "Bernhard McCormack" }
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