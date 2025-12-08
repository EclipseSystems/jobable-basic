import { ArrowDown, ArrowRight, ArrowUp, TriangleAlert } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Field, FieldGroup, FieldLabel, FieldSet } from '../ui/field';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import { Textarea } from '../ui/textarea';

export function IssueForm({ formOpen, formOpenChange }:
  {
    formOpen: boolean,
    formOpenChange: (open: boolean) => void
  }) {
  return (
    <Dialog
      open={formOpen}
      onOpenChange={formOpenChange}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Report an issue</DialogTitle>
          <DialogDescription>
            If you encounter any difficulties using this platform, please report them as soon as possible using this form so that our support team can find a quick & effective resolution.
          </DialogDescription>
        </DialogHeader>

        {/* Main form */}
        <form>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor={'category'}>Issue category</FieldLabel>
                <Select>
                  <SelectTrigger id={'category'}><SelectValue placeholder={'Please select a category'} /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value={'loading'}>Pages don't load or are slow to load</SelectItem>
                    <SelectItem value={'data'}>Tables not showing data correctly</SelectItem>
                    <SelectItem value={'other'}>Other</SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel htmlFor={'severity'}>Issue severity</FieldLabel>
                <Select>
                  <SelectTrigger id={'severity'}><SelectValue placeholder={'Please select a severity level'} /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value={'critical'}>
                      <TriangleAlert className={'text-red-500'} /> Critical (1-8 hours)
                    </SelectItem>
                    <SelectItem value={'high'}>
                      <ArrowUp className={'text-orange-500'} /> High (8-24 hours)
                    </SelectItem>
                    <SelectItem value={'medium'}>
                      <ArrowRight className={'text-yellow-500'} /> Medium (1-3 days)
                    </SelectItem>
                    <SelectItem value={'low'}>
                      <ArrowDown className={'text-green-500'} /> Low (3-7 days)
                      </SelectItem>
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel htmlFor={'description'}>Please describe the issue you're experiencing</FieldLabel>
                <Textarea
                  id={'description'}
                  rows={4}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor='method'>What is your preferred contact method?</FieldLabel>
                <RadioGroup className='flex flex-row space-x-4' defaultValue={'email'}>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value={'email'} id={'email'} />
                    <FieldLabel htmlFor={'email'} className={'font-normal'}>Email</FieldLabel>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value={'phone'} id={'phone'} />
                    <FieldLabel htmlFor={'phone'} className={'font-normal'}>Phone</FieldLabel>
                  </div>
                </RadioGroup>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant={'outline'}>Cancel</Button>
          </DialogClose>
          <Button type={'submit'}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}