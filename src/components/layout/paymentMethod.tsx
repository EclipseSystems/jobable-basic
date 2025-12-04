import { useState } from "react"

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
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field"
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

import { CreditCard, Landmark } from "lucide-react"

import PayPalButton from "@/assets/PayPal.svg"
import { useTheme } from "@/context/theme-provider"

function PayPalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 850" width="24" height="24" fill={useTheme().theme === 'dark' ? '#ffffff' : '#000000'}>
      <path d="M232 407q-23 0-40 14t-22 38l-35 208H21q-9 0-15-7t-5-16l52-337L96 36q2-12 11-20t21-8h233q55 0 100 16t70 47q18 21 25 38q9 20 9 43v11q-1 6-1 12t-2 14q-1 4-1 7t-1 6q-20 104-84 154t-176 51zm375-189q21 25 26 60t-3 78q-10 52-32 87t-52 58t-69 31t-83 10h-18q-11 0-19 6t-10 18l-2 8l-22 145l-2 6q-2 11-9 18t-19 7H173l45-283q2-11 14-11h68q128 0 205-61t102-177" />
    </svg >
  )
}

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
const years = ['2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041']
const options = [
  { name: 'Card', value: 'card', icon: CreditCard },
  { name: 'Bank transfer', value: 'bank', icon: Landmark },
  { name: 'PayPal', value: 'value', icon: PayPalIcon }
]

export function PaymentMethod() {
  const [payMethod, setPayMethod] = useState('card')
  const handlePayMethod = (event: any) => {
    setPayMethod(event)
  }

  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button className={'cursor-pointer'}>Change payment method</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change payment method</DialogTitle>
          </DialogHeader>

          <RadioGroup
            defaultValue={options[0].value}
            value={payMethod}
            onValueChange={handlePayMethod}
            className={'grid grid-cols-3 gap-4'}
          >
            {options.map((option) => (
              <div>
                <RadioGroupItem value={option.value} id={option.value} className={'peer sr-only'} />
                <Label htmlFor={option.value}
                  className="border-muted hover:bg-muted hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border bg-transparent p-4"
                >
                  <option.icon /> {option.name}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {payMethod === 'bank' ?
            <div className={'space-y-3'}>
              <FieldSet>
                <FieldGroup>
                  <Field><FieldLabel>BSB</FieldLabel>
                    <Input maxLength={7} type={'text'} placeholder={'123-456'} />
                  </Field>
                  <Field><FieldLabel>Account number</FieldLabel>
                    <Input maxLength={9} type={'text'} placeholder={'1234 5678'} />
                  </Field>
                  <Field><FieldLabel>Account name</FieldLabel>
                    <Input type={'text'} placeholder={'John Smith'} />
                  </Field>
                </FieldGroup>
              </FieldSet>
            </div>
            : payMethod === 'card' ?
              <div className={'space-y-3'}>
                <FieldSet>
                  <FieldGroup>
                    <Field><FieldLabel>Cardholder name</FieldLabel>
                      <Input type={'text'} placeholder={'John Smith'} />
                    </Field>
                    <Field><FieldLabel>Credit card number</FieldLabel>
                      <Input
                        type={'text'}
                        placeholder={'1234 5678 9012 3456'}
                        maxLength={19}
                      />
                    </Field>
                    <div className={'grid grid-cols-3 gap-2'}>
                      <div className={'col-span-1 space-y-2'}>
                        <Field><FieldLabel>Month</FieldLabel>
                          <Select>
                            <SelectTrigger className={'w-full'}>
                              <SelectValue placeholder={'MM'} />
                            </SelectTrigger>
                            <SelectContent>
                              {months.map((month) => (
                                <SelectItem value={month}>{month}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>
                      </div>
                      <div className={'col-span-1 space-y-2'}>
                        <Field><FieldLabel>Year</FieldLabel>
                          <Select>
                            <SelectTrigger className={'w-full'}>
                              <SelectValue placeholder={'YY'} />
                            </SelectTrigger>
                            <SelectContent>
                              {years.map((year) => (
                                <SelectItem value={year}>{year}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>
                      </div>
                      <div className={'col-span-1 space-y-2'}>
                        <Field><FieldLabel>CVC</FieldLabel><Input maxLength={3} placeholder={'123'} /></Field>
                      </div>
                    </div>
                  </FieldGroup>
                </FieldSet>
              </div> :
              <div>
                <a target={'_blank'} href={'https://www.paypal.com'}>
                  <Button
                    className={'w-full cursor-pointer bg-amber-400 hover:bg-amber-300 focus-visible:ring-amber-300'}
                  >
                    <img src={PayPalButton} />
                  </Button>
                </a>
              </div>
          }

          <DialogFooter>
            <DialogClose>
              <Button variant={'outline'}>Cancel</Button>
            </DialogClose>
            <Button type={'submit'}>Confirm</Button>
          </DialogFooter>
        </DialogContent >
      </Dialog >
    </>
  )
}
