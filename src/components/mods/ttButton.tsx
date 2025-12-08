import type { LucideIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export function TTButton({ title, Icon, className }: {
  title: string,
  Icon: LucideIcon
  className?: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className={className} variant="outline" size="icon">
          <Icon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {title}
      </TooltipContent>
    </Tooltip>
  )
}
