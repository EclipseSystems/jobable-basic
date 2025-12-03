import { Progress } from "@/components/ui/progress"

export function Storage() {
  return (
    <>
      <h1 className="text-xl font-bold pb-4">Storage</h1>
      <div className="grid space-y-4">
        <Progress value={33} />
        <div className="grid text-muted-foreground grid-cols-2 text-sm">
          <div className="col-span-1">33 GB used</div>
          <div className="col-span-1 ml-auto">100 GB total</div>
        </div>
      </div>
    </>
  )
}