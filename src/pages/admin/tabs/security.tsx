import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { TriangleAlert } from "lucide-react"

export function Security() {
  return (
    <>
      <h1 className="text-xl font-bold pb-4">Security</h1>
      <h2 className={'text-md font-bold pb-4'}>Password policy</h2>
      <div className={'space-y-4'}>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label>Enable passwords</Label>
        </div>
        <Alert className={'text-yellow-500'} variant={'default'}>
          <TriangleAlert />
          <AlertTitle>Recommendation: Disable passwords</AlertTitle>
          <AlertDescription className={'text-yellow-500'}>
            Implement passwordless authentication (PWLA) to protect against identity-based attacks.
          </AlertDescription>
        </Alert>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Button>Save</Button>
      </div>
      <h2 className={'text-md font-bold pb-4'}>Single sign-on (SSO)</h2>
    </>
  )
}