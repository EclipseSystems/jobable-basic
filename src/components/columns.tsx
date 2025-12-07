import { type ColumnDef } from '@tanstack/react-table';
import { Phone, User } from 'lucide-react';
import { Link } from 'react-router';

export const apptColumns: ColumnDef<{
  id: number
  name: string
  date: string
  startTime: string
  endTime: string
  method: string
  result: string
}>[] = [
    { accessorKey: 'id', header: 'ID' },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => {
        return <div><Link to={{ pathname: './details' }}>{row.getValue('name')}</Link></div>
      }
    },
    { accessorKey: 'date', header: 'Date' },
    { accessorKey: 'startTime', header: 'Start time' },
    { accessorKey: 'endTime', header: 'End time' },
    { 
      accessorKey: 'method',
      header: 'Method',
      cell: ({ row }) => {
        const iconSize = 14
        return (
          <div className={'flex items-center gap-2'}>
            {row.getValue('method') === 'Phone' ? <Phone size={iconSize}/> : <User size={iconSize}/>}
            {row.getValue('method')}
          </div>
        )
      }
    },
    { accessorKey: 'result', header: 'Result' }
  ]

export const clientColumns: ColumnDef<{
  id: number
  name: string
  gender: string
  DOB: string
}>[] = [
    { accessorKey: 'id', header: 'ID' },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: ({ row }) => {
        return <div><Link to={{ pathname: './details' }}>{row.getValue('name')}</Link></div>
      }
    },
    { accessorKey: 'gender', header: 'Gender'},
    { accessorKey: 'DOB', header: 'Date of birth'}
  ]

export const contactColumns: ColumnDef<{
  id: number
  name: string
  organisation: string
}>[] = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'organisation', header: 'Organisation' }
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
    {
      accessorKey: 'name',
      header: 'Full name',
      cell: ({ row }) => {
        return <div><Link to={{ pathname: './details' }}>{row.getValue('name')}</Link></div>
      }
    },
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
  state: string
  postcode: string
  mContact: string
}>[] = [
    { accessorKey: 'id', header: 'ID' },
    { accessorKey: 'abn', header: 'ABN' },
    { accessorKey: 'name', header: 'Business name' },
    { accessorKey: 'city', header: 'City' },
    { accessorKey: 'state', header: 'State' },
    { accessorKey: 'postcode', header: 'Postcode' },
    { accessorKey: 'mContact', header: 'Contact name' },
  ]