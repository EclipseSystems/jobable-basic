import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { Ban, Download } from 'lucide-react'
import { PaymentMethod } from '@/components/layout/paymentMethod'

const payDetails = [
  { name: 'Plan', value: 'Standard' },
  { name: 'Method', value: 'Credit card' },
  { name: 'Frequency', value: 'Monthly' },
  { name: 'Next due date', value: 'Monday, 1st December 2025' }
]

const invoices = [
  { invNumber: '5051497244', invDate: '1/10/2025', invMethod: 'Credit card', invAmount: '$999.00' },
  { invNumber: '5124925895', invDate: '1/11/2025', invMethod: 'Credit card', invAmount: '$999.00' },
];

export function Billing() {
  return (
    <>
      <h1 className={'text-xl font-bold pb-4'}>Billing</h1>

      <div className={'text-left space-y-4'}>
        {/* Payment history */}
        <h2 className={'text-md font-bold'}>Payment method</h2>
        <div className={`grid grid-cols-${payDetails.length} w-full text-sm`}>
          {payDetails.map((detail) => (
            <div className={'block col-span-1'}>
              <p className={'font-bold'}>{detail.name}</p>
              <p>{detail.value}</p>
            </div>
          ))}
        </div>
        <Alert variant={'destructive'}>
          <Ban />
          <AlertTitle>Access denied</AlertTitle>
          <AlertDescription>
            You do not have permission to change these settings. Please talk to
            your administrator.
          </AlertDescription>
        </Alert>

        <PaymentMethod />

        <p className={'text-sm'}>
          To cancel your subscription, please contact technical support.
        </p>

        {/* Invoice history */}
        <div className={'text-md font-bold'}>Invoice history</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice #</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow className={'hover:bg-secondary'}>
                <TableCell className={'font-medium'}>
                  {invoice.invNumber}
                </TableCell>
                <TableCell>{invoice.invDate}</TableCell>
                <TableCell>{invoice.invMethod}</TableCell>
                <TableCell>{invoice.invAmount}</TableCell>
                <TableCell className={'text-right'}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button variant={'outline'} size={'icon-sm'}>
                        <Download />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Download invoice</TooltipContent>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}