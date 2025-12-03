import { QrCode } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { QRCode } from "@/components/kibo-ui/qr-code"
import {
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar"

export function DownloadApp() {
  return (
    <Dialog>
      <DialogTrigger>
        <SidebarMenuItem>
          <SidebarMenuButton className={'cursor-pointer'} tooltip={'Download the app'}>
            <QrCode /> Download the app
          </SidebarMenuButton>
        </SidebarMenuItem>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Download the app</DialogTitle>
          <DialogDescription>Scan the QR code below to download the JobAble app on your mobile device.</DialogDescription>
            <div className="flex mt-4 items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="mx-auto w-auto h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="mx-auto w-auto h-10"
              />
            </div>
            <QRCode className="background size-48 mt-5 mx-auto" data="https://www.epicassist.org" />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}