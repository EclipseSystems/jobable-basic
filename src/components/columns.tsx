import { type ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router";

export type Clients = {
  id: number
  name: string
}

export const clientColumns: ColumnDef<Clients>[] = [
  {accessorKey: "id", header: "ID"},
  {
    accessorKey: "name",
    header: "Name",
    cell: ({row}) => {
      return (
        <div>
          <Link to={{
            pathname: "./details"
          }}>
            {row.getValue('name')}
          </Link>
        </div>
      )
    }}
]