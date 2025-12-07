import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Calendar, PlusIcon } from "lucide-react";

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
              <Field><FieldLabel htmlFor={'date'}>Appointment date</FieldLabel><Input type={'date'} /></Field>
              <div className={'grid grid-cols-2 gap-4'}>
                <Field><FieldLabel htmlFor={'startTime'}>Start time</FieldLabel><Input type={'time'} /></Field>
                <Field><FieldLabel htmlFor={'endTime'}>End time</FieldLabel><Input type={'time'} /></Field>
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
        <div className={'col-span-2 pl-6'}>
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