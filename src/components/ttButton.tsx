import type { LucideIcon } from "lucide-react"
import { Button } from "./ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

export function TTButton({ title, Icon }: {
  title: string,
  Icon: LucideIcon 
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
        >
          <Icon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        {title}
      </TooltipContent>
    </Tooltip>
  )
}
