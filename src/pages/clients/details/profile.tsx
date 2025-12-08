import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

import { DatePicker } from "@/components/date-picker"
import { states } from "@/config/selectValues"

const clientData = [
  { field: 'Name', value: 'John Smith' },
  { field: 'Street address', value: '75 Robinson Road' },
  { field: 'Suburb', value: 'Nundah' },
  { field: 'State', value: 'Queensland' },
  { field: 'Postcode', value: '4012' },
  { field: 'Email address', value: 'john.smith7631@gmail.com' },
  { field: 'Mobile number', value: '+61 429457023' },
  { field: 'Date of birth', value: 'March 14th, 1971' },
]

export function Profile() {
  return (
    <div className={'space-y-4'}>
      <Dialog>
        <DialogTrigger><Button>Edit profile</Button></DialogTrigger>
        <DialogContent className={'min-w-250'}>
          <DialogHeader><DialogTitle>Edit profile</DialogTitle></DialogHeader>
          <FieldSet>
            <div className={'grid grid-cols-5 gap-4'}>
              <div className={'col-span-1'}>
              </div>
              <div className={'col-span-2'}>
                <FieldGroup>
                  <Field><FieldLabel>Name</FieldLabel><Input type={'text'} value={clientData[0].value} /></Field>
                  <Field><FieldLabel>Street address</FieldLabel><Input type={'text'} value={clientData[1].value} /></Field>
                  <Field><FieldLabel>Suburb</FieldLabel><Input type={'text'} value={clientData[2].value} /></Field>
                  <Field><FieldLabel>State</FieldLabel>
                    <Select>
                      <SelectTrigger><SelectValue placeholder={'Select a state...'} /></SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem value={state.value}>{state.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
              </div>
              <div className={'col-span-2'}>
                <FieldGroup>
                  <Field><FieldLabel>Postcode</FieldLabel><Input type={'text'} value={clientData[4].value} /></Field>
                  <Field><FieldLabel>Email address</FieldLabel><Input type={'email'} value={clientData[5].value} /></Field>
                  <Field><FieldLabel>Mobile number</FieldLabel><Input type={'tel'} value={clientData[6].value} /></Field>
                  <Field><FieldLabel>Date of birth</FieldLabel><DatePicker /></Field>
                </FieldGroup>
              </div>
            </div>
          </FieldSet>
          <DialogFooter>
            <DialogClose><Button variant="secondary">Cancel</Button></DialogClose>
            <Button type={'submit'}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-4 grid-rows-2 text-sm space-y-4">
        {clientData.map((row) => (
          <div>
            <p>{row.field}</p>
            <p className={'font-bold'}>{row.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}