import { useState } from "react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { Ban, Download } from "lucide-react"

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
const years = ['2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041']
const payDetails = [
  { name: 'Plan', value: 'Standard' },
  { name: 'Method', value: 'Credit card' },
  { name: 'Frequency', value: 'Monthly' },
  { name: 'Next due date', value: 'Monday, 1st December 2025' }
]

const invoices = [
  { invNumber: "5051497244", invDate: "1/10/2025", invMethod: "Credit card", invAmount: "$999.00" },
  { invNumber: "5124925895", invDate: "1/11/2025", invMethod: "Credit card", invAmount: "$999.00" },
];

export function Billing() {
  const [payMethod, setPayMethod] = useState('card')
  const handlePayMethod = (event: any) => {
    setPayMethod(event)
  }

  return (
    <>
      <h1 className="text-xl font-bold pb-4">Billing</h1>

      <div className="text-left space-y-4">
        {/* Payment history */}
        <div className="text-md font-bold">Payment method</div>
        <div className={`grid grid-cols-${payDetails.length} w-full text-sm`}>
          {payDetails.map((detail) => (
            <div className={'block col-span-1'}>
              <p className={'font-bold'}>{detail.name}</p>
              <p>{detail.value}</p>
            </div>
          ))}
        </div>
        <Alert variant="destructive">
          <Ban />
          <AlertTitle>Access denied</AlertTitle>
          <AlertDescription>
            You do not have permission to change these settings. Please talk to
            your administrator.
          </AlertDescription>
        </Alert>

        {/* Payment method dialog */}
        <Dialog>
          <DialogTrigger>
            <Button className="cursor-pointer">Change payment method</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Change payment method</DialogTitle>
            </DialogHeader>

            <RadioGroup
              className={'flex'}
              value={payMethod}
              defaultValue={'bank'}
              onValueChange={handlePayMethod}
            >
              <div className="flex gap-2">
                <RadioGroupItem value={'card'} />
                <Label>Credit card</Label>
              </div>
              <div className="flex gap-2">
                <RadioGroupItem value={'bank'} />
                <Label>Bank transfer</Label>
              </div>
            </RadioGroup>

            {payMethod === 'bank' ? (
              <div className="space-y-3">
                <Label>BSB</Label>
                <Input placeholder="123-456" />
                <Label>Account number</Label>
                <Input placeholder="1234 5678" />
                <Label>Account name</Label>
                <Input placeholder="John Smith" />
              </div>
            ) : (
              <div className="space-y-3">
                <Label>Cardholder name</Label>
                <Input placeholder="John Smith" />
                <Label>Credit card number</Label>
                <Input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-1 space-y-2">
                    <Label>Month</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="MM" />
                      </SelectTrigger>
                      <SelectContent>
                        {months.map((month) => (
                          <SelectItem value={month}>{month}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-1 space-y-2">
                    <Label>Year</Label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="YY" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem value={year}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-1 space-y-2">
                    <Label>CVC</Label>
                    <Input maxLength={3} placeholder="123" />
                  </div>
                </div>
              </div>
            )}

            <DialogFooter>
              <DialogClose>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <p className="text-sm">
          To cancel your subscription, please contact technical support.
        </p>

        {/* Invoice history */}
        <div className="text-md font-bold">Invoice history</div>
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
              <TableRow className="hover:bg-secondary">
                <TableCell className="font-medium">
                  {invoice.invNumber}
                </TableCell>
                <TableCell>{invoice.invDate}</TableCell>
                <TableCell>{invoice.invMethod}</TableCell>
                <TableCell>{invoice.invAmount}</TableCell>
                <TableCell className="text-right">
                  <Tooltip>
                    <TooltipTrigger>
                      <Button variant="outline" size="icon-sm">
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