import { type ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router";

export const apptColumns: ColumnDef<{
  id: number
  name: string
  date: string
  startTime: string
  endTime: string
  method: string
}>[] = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name",
    header: "Name",
    cell: ({row}) => {
      return <div><Link to={{pathname: "./details"}}>{row.getValue('name')}</Link></div>
    }
  },
  { accessorKey: "date", header: "Date" },
  { accessorKey: "startTime", header: "Start time"},
  { accessorKey: "endTime", header: "End time"},
  { accessorKey: 'method', header: "Method"}
]

export const clientColumns: ColumnDef<{
  id: number
  name: string
}>[] = [
  { accessorKey: "id", header: "ID" },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({row}) => {
      return <div><Link to={{pathname: "./details"}}>{row.getValue('name')}</Link></div>
    }}
]

export const contactColumns: ColumnDef<{
  id: number
  name: string
  organisation: string
}>[] = [
  { accessorKey: 'id', header: 'ID'},
  { accessorKey: 'name', header: 'Name'},
  { accessorKey: 'organisation', header: 'Organisation'}
]

export const leadsColumns: ColumnDef<{
  id: number
  name: string
  address: string
  suburb: string
  state: string
  postcode: string
  email: string
  phone: string
}>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Full name' },
  { accessorKey: 'address', header: 'Street address' },
  { accessorKey: 'suburb', header: 'Suburb' },
  { accessorKey: 'state', header: 'State' },
  { accessorKey: 'postcode', header: 'Postcode' },
  { accessorKey: 'email', header: 'Email address' },
  { accessorKey: 'phone', header: 'Mobile number' },
]

export const orgColumns: ColumnDef<{
  id: number
  abn: string
  name: string
  city: string
}>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'abn', header: 'ABN' },
  { accessorKey: 'name', header: 'Business name' },
  { accessorKey: 'city', header: 'City' }
]