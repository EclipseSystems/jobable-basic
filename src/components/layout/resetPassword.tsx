import { useState } from "react"

import { Badge } from "@/components/ui/badge"
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FileKey, Key, QrCode, Smartphone } from "lucide-react"

const pages = [
  { id: 0, name: 'Select authentication' },
  { id: 1, name: 'Complete authentication' },
  { id: 2, name: 'Set new password' }
]

export function ResetPassword() {
  const [step, setStep] = useState(0)
  const [method, setMethod] = useState('')

  const nextStep = () => (step == pages.length - 1 ? null : setStep((prevStep) => prevStep + 1))
  const prevStep = () => setStep((prevStep) => prevStep - 1)
  const handleMethodSet = (method: string) => {
    setMethod(method)
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button>Reset your password</Button>
      </DialogTrigger>
      <DialogContent className={'min-w-200'}>
        <DialogHeader>
          <DialogTitle>Reset your password</DialogTitle>
        </DialogHeader>

        {/* Main content */}
        <div className={'flex gap-4'}>
          {pages.map((page) => (
            <div className={'flex items-center gap-2'}>
              <Badge className='h-5 min-w-5 px-1 tabular-nums'>{page.id + 1}</Badge>
              <p className={`text-sm ${step === page.id ? 'font-bold' : ''}`}>
                {page.name}
              </p>
            </div>
          ))}
        </div>
        {step === 0 && (
          <>
            <Label>Authentication method</Label>
            <Select
              defaultValue={'auth'}
              value={method}
              onValueChange={handleMethodSet}
            >
              <SelectTrigger className={'w-100'}>
                <SelectValue placeholder="Select a method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auth"><QrCode /> Authenticator app</SelectItem>
                <SelectItem value="key"><Key /> Security key</SelectItem>
                <SelectItem value="sms"><Smartphone /> SMS message</SelectItem>
              </SelectContent>
            </Select>
          </>
        )}
        {(step === 1 && method === 'auth') && (
          <>
            <Label>Please enter the first OTP you see</Label>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} /><InputOTPSlot index={4} /><InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <Label>Next, enter the OTP that shows after the previous one</Label>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} /><InputOTPSlot index={1} /><InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} /><InputOTPSlot index={4} /><InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </>
        )}
        {(step === 1 && method === 'key') && (
          <>
            <div className={'text-center text-sm'}>
              <p>If you are using either of the following:</p>
              <ul>
                <li><b>A passkey:</b> Select the passkey in your browser when prompted.</li>
                <li><b>A physical security key:</b> Connect it to your device now, then follow the prompts.</li>
              </ul>
            </div>
            
          </>
        )}
        {(step === 1 && method === 'sms') && (
          <>
            <Label>SMS code</Label>
            <Input type={'number'}/>
            <p className='text-muted-foreground text-xs'>Please enter the 6-digit code sent to the phone number ending with 69.</p>
          </>
        )}
        {step === 2 && (
          <>
            <Label htmlFor="currentPass">Enter your current password</Label>
            <Input type={'password'} />
            <Label htmlFor="newPass">Enter your new password</Label>
            <Input type={'password'} />
            <Label htmlFor="repeatNewPass">Re-enter your new password</Label>
            <Input type={'password'} />
          </>
        )}
        <DialogFooter>
          <DialogClose><Button variant="secondary">Cancel</Button></DialogClose>
          <Button onClick={prevStep} disabled={step === 0}>Previous</Button>
          <Button onClick={nextStep}>
            {step === pages.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}