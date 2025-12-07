import { Button } from "../ui/button"
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";

const states = [
  'Australian Capital Territory',
  'New South Wales',
  'Northern Territory',
  'Queensland',
  'South Australia',
  'Tasmania',
  'Victoria',
  'Western Australia'
]

export function NewLead() {
  return (
    <DialogContent className={'min-w-160'}>
      <DialogHeader>
        <DialogTitle>Create new lead</DialogTitle>
      </DialogHeader>
      <FieldSet>
        <FieldGroup>
          <Field><FieldLabel>Full name</FieldLabel><Input type={'text'}/></Field>
          <Field><FieldLabel>Street address</FieldLabel><Input type={'text'}/></Field>
          <div className={'grid grid-cols-5 gap-2'}>
            <div className={'col-span-2'}>
              <Field><FieldLabel>Suburb</FieldLabel><Input type={'text'}/></Field>
            </div>
            <div className={'col-span-2'}>
              <Field>
                <FieldLabel>State</FieldLabel>
                <Select>
                  <SelectTrigger><SelectValue placeholder={'Select a state'} /></SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <div className={'col-span-1'}>
              <Field><FieldLabel>Postcode</FieldLabel><Input type={'text'} maxLength={4}/></Field>
            </div>
          </div>
          <Field><FieldLabel>Email address</FieldLabel><Input type={'email'} placeholder={'john.smith@outlook.com'} /></Field>
          <Field><FieldLabel>Mobile number</FieldLabel><Input type={'tel'} maxLength={13} placeholder={'+61 432123456'}/></Field>
        </FieldGroup>
      </FieldSet>
      <DialogFooter>
        <DialogClose><Button variant={'secondary'}>Cancel</Button></DialogClose>
        <Button>Create</Button>
      </DialogFooter>
    </DialogContent>
  )
}