import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

import { Combobox } from "../combobox";
import { clients } from "@/config/data";

export function NewAppt() {
  return (
    <DialogContent className={'min-w-180'}>
      <DialogHeader>
        <DialogTitle>Create new appointment</DialogTitle>
      </DialogHeader>
      <div className={'grid grid-cols-3 gap-2'}>
        <div className={'col-span-2 pr-6 border-r'}>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor={'name'}>Client name</FieldLabel>
                <Combobox options={clients} placeholder={'Select a client'} search={'Search clients...'}/>
              </Field>
              <Field><FieldLabel htmlFor={'date'}>Appointment date</FieldLabel><Input type={'date'} /></Field>
              <div className={'grid grid-cols-2 gap-4'}>
                <Field>
                  <FieldLabel htmlFor={'startTime'}>Start time</FieldLabel>
                  <Input type={'time'}/>
                </Field>
                <Field>
                  <FieldLabel htmlFor={'endTime'}>End time</FieldLabel>
                  <Input type={'time'}/>
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor={'method'}>Appointment method</FieldLabel>
                <Select>
                  <SelectTrigger><SelectValue placeholder={'Select a method...'} /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value={'phone'}>Phone</SelectItem>
                    <SelectItem value={'face'}>Face-to-face</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </FieldGroup>
          </FieldSet>
        </div>
        <div className={'col-span-1 pl-2'}>
          <Label className={'pb-4'}>Appointment helper</Label>
          <div className='flex w-full flex-col gap-2'>
            <div className='bg-muted after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full'>
              <div className='font-medium'>Meeting one</div>
              <div className='text-muted-foreground text-xs'>12:30pm to 1:00pm</div>
            </div>
            <div className='bg-muted after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full'>
              <div className='font-medium'>Meeting two</div>
              <div className='text-muted-foreground text-xs'>2:00pm to 2:30pm</div>
            </div>            
          </div>
        </div>
      </div>
      <DialogFooter>
        <DialogClose>
          <Button variant={'secondary'}>Cancel</Button>
        </DialogClose>
        <Button>Create</Button>
      </DialogFooter>
    </DialogContent>
  )
}