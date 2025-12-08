import { PageTitle } from "@/components/pageTitle"
import { TTButton } from "@/components/mods/ttButton"
import { TreeView, type TreeDataItem } from "@/components/tree-view"

import { Button } from "@/components/ui/button"
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { Download, Folder, Menu, Pencil, Plus, Star } from "lucide-react"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Link } from "react-router"

const chartConfig = {
  week4: { label: "4 week", color: "var(--chart-1)", },
  week13: { label: "13 week", color: "var(--chart-2)", },
  week26: { label: "26 week", color: "var(--chart-3)", },
  week52: { label: "52 week", color: "var(--chart-4)", },
  ogs: { label: "Ongoing support", color: "var(--chart-5)", },
}

const ccuData = [
  { month: 'February', 'week4': 8, 'week13': 6, 'week26': 7, 'week52': 8, 'ogs': 53 },
  { month: 'March', 'week4': 10, 'week13': 4, 'week26': 5, 'week52': 2, 'ogs': 39 },
  { month: 'April', 'week4': 3, 'week13': 5, 'week26': 3, 'week52': 1, 'ogs': 35 },
  { month: 'May', 'week4': 6, 'week13': 5, 'week26': 1, 'week52': 2, 'ogs': 43 },
  { month: 'June', 'week4': 5, 'week13': 5, 'week26': 2, 'week52': 3, 'ogs': 55 },
  { month: 'July', 'week4': 5, 'week13': 3, 'week26': 1, 'week52': 0, 'ogs': 23 },
]

const treeData: TreeDataItem[] = [
  { id: '1', name: 'Favourites' },
  { id: '2', name: 'Shared with me' },
  { id: '3', name: 'IEA', children: [
      { id: '2', name: 'CCU Error Report' }
    ]
  }
]

const ReportTitle = ({ title }: {
  title: string
}) => {
  return (
    <h1 className="text-xl font-bold">{title}</h1>
  )
}

export default function Reports() {
  return (
    <>
      <PageTitle title={'Reports'} padding={false} />

      <div className="flex gap-2 pb-4">
        <Link to={'./builder'}>
          <TTButton title={"New report"} Icon={Plus} />
        </Link>
        <Dialog>
          <DialogTrigger><TTButton title={"New folder"} Icon={Folder} /></DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Create new folder</DialogTitle></DialogHeader>
            <FieldSet>
              <FieldGroup>
                <Field><FieldLabel htmlFor={'folderName'}>Folder name</FieldLabel><Input type={'text'} /></Field>
              </FieldGroup>
            </FieldSet>
            <DialogFooter>
              <DialogClose>
                <Button variant={'secondary'}>Cancel</Button>
              </DialogClose>
              <Button>Submit</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>

      <div className="grid grid-cols-4 border rounded-lg size-full">

        {/* Report directory */}
        <div className="col-span-1 border-r">
          <TreeView data={treeData} />
        </div>

        {/* Report column */}
        <div className="grid col-span-3 px-6 space-y-2">

          {/* Menu bar */}
          <div className="flex items-center gap-2">
            <ReportTitle title="CCU Error Report" />
            <Dialog>
              <DialogTrigger>
                <TTButton title={"Edit title"} Icon={Pencil} />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader><DialogTitle>Edit report title</DialogTitle></DialogHeader>
                <FieldSet>
                  <FieldGroup>
                    <Field><FieldLabel htmlFor="title">Title</FieldLabel><Input id="title" type="text" /></Field>
                  </FieldGroup>
                </FieldSet>
                <DialogFooter>
                  <DialogClose><Button variant={'secondary'}>Cancel</Button></DialogClose>
                  <Button type={"submit"}>Submit</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <TTButton className={'ml-auto'} title={'Export to PDF'} Icon={Download} />
            <TTButton title={'Add to favourites'} Icon={Star} />
            <Button variant={'outline'} size={'icon'}><Menu/></Button>
          </div>

          <div className={'size-full'}>
            <ChartContainer config={chartConfig}>
              <BarChart accessibilityLayer data={ccuData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="week4" stackId="a" fill="var(--color-week4)" />
                <Bar dataKey="week13" stackId="a" fill="var(--color-week13)" />
                <Bar dataKey="week26" stackId="a" fill="var(--color-week26)" />
                <Bar dataKey="week52" stackId="a" fill="var(--color-week52)" />
                <Bar dataKey="ogs" stackId="a" fill="var(--color-ogs)" />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </>
  )
}