import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function NewAppt() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create new appointment</DialogTitle>
      </DialogHeader>
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor={'date'}>Appointment date</FieldLabel>
            <Input type={'date'} />
          </Field>
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
              <SelectTrigger>
                <SelectValue placeholder={'Select a method...'} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={'phone'}>Phone</SelectItem>
                <SelectItem value={'face'}>Face-to-face</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </FieldSet>
      <DialogFooter>
        <DialogClose>
          <Button variant={'outline'}>Cancel</Button>
        </DialogClose>
        <Button>Create</Button>
      </DialogFooter>
    </DialogContent>
  )
}