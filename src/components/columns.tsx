import { type ColumnDef } from "@tanstack/react-table";

export type Clients = {
  id: number
  name: string
}

export const clientColumns: ColumnDef<Clients>[] = [
  {accessorKey: "id", header: "ID"},
  {accessorKey: "name", header: "Name"}
]