import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { TriangleAlert } from "lucide-react"

export function Security() {
  return (
    <div className={'space-y-4'}>
      <h1 className="text-xl font-bold">Security</h1>
      <h2 className={'text-md font-bold'}>Password policy</h2>
      <div className="flex items-center space-x-2">
        <Switch />
        <Label>Disable passwords</Label>
      </div>
      <Label>Force reset passwords after:</Label>
      <div className={'flex gap-2'}>
        <Select>
          <SelectTrigger className={'w-60'}><SelectValue placeholder={'Select a period...'} /></SelectTrigger>
          <SelectContent>
            <SelectItem value={'30'}>30 days (recommended)</SelectItem>
            <SelectItem value={'60'}>60 days</SelectItem>
            <SelectItem value={'90'}>90 days</SelectItem>
            <SelectItem value={'120'}>120 days</SelectItem>
            <SelectItem value={'150'}>150 days</SelectItem>
            <SelectItem value={'180'}>180 days</SelectItem>
          </SelectContent>
        </Select>
        <Button>Save</Button>
      </div>
      <Alert className={'text-yellow-500'} variant={'default'}>
        <TriangleAlert />
        <AlertTitle>Recommendation: Disable passwords</AlertTitle>
        <AlertDescription className={'text-yellow-500'}>
          Implement passwordless authentication (PWLA) to protect against identity-based attacks.
        </AlertDescription>
      </Alert>
      <h2 className={'text-md font-bold'}>Single sign-on</h2>
    </div>
  )
}