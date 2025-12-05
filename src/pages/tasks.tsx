'use client'

import { useState } from 'react'

import { CheckCircle, Circle, CircleIcon, File, GripVertical, Paperclip, Pencil, Save, Trash, X, XCircle } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Field, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'

import MultipleSelector from '@/components/multi-select'
import * as Kanban from '@/components/ui/kanban'
import { AddTask } from '@/components/layout/addTask'
import { DatePicker } from '@/components/date-picker'
import { PageTitle } from '@/components/pageTitle'

interface Task {
  id: string
  title: string
  priority: 'Low' | 'Medium' | 'High'
  description?: string
  assignee?: string
  dueDate?: string
}

const COLUMN_TITLES: Record<string, string> = {
  backlog: 'Backlog',
  inProgress: 'In Progress',
  review: 'Review',
  done: 'Done',
}

const tabs = [
  { name: 'Board', value: 'board' },
  { name: 'List', value: 'list' }
]

export default function Tasks() {
  const [taskVis, setTaskVis] = useState(false)
  const [taskDone, setTaskDone] = useState(false)

  const handleTaskVis = () => { setTaskVis(taskVis ? false : true) }
  function handleTaskDone(taskDone: boolean) {
    setTaskDone(taskDone)
  }

  const [columns, setColumns] = useState<Record<string, Task[]>>({
    backlog: [
      { id: '1', title: 'Add authentication', priority: 'High', assignee: 'John Doe', dueDate: '1 Apr 2024' },
      { id: '2', title: 'Create API endpoints', priority: 'Medium', assignee: 'Jane Smith', dueDate: '5 Apr 2024' },
      { id: '3', title: 'Write documentation', priority: 'Low', assignee: 'Bob Johnson', dueDate: '10 Apr 2024' }
    ],
    inProgress: [
      { id: '4', title: 'Design system updates', priority: 'High', assignee: 'Alice Brown', dueDate: '28 Mar 2024' },
      { id: '5', title: 'Implement dark mode', priority: 'Medium', assignee: 'Charlie Wilson', dueDate: '2 Apr 2024' }
    ],
    done: [
      { id: '7', title: 'Setup project', priority: 'High', assignee: 'Eve Davis', dueDate: '25 Mar 2024' },
      { id: '8', title: 'Initial commit', priority: 'Low', assignee: 'Frank White', dueDate: '24 Mar 2024' }
    ]
  })

  return (
    <>
      <PageTitle title={'Tasks'} padding={false} />

      {/* Test card */}
      <Card className={'mb-4 py-6 w-100'}>
        <CardContent className={'grid space-y-4'}>
          <div className={'flex gap-2'}>
            <div className={'grid gap-2'}>
              <div className={'flex items-center gap-2'}>
                <Checkbox
                  className={'rounded-full size-5'}
                  checked={taskDone}
                  onCheckedChange={handleTaskDone}
                />
                <p className={`text-md ${taskDone ? 'line-through' : ''} font-semibold`}>Task</p>
              </div>
              <p className={'text-xs'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae congue dui.</p>
            </div>
            <div className={'w-content'}>
              <Button className={'cursor-pointer'} onClick={handleTaskVis} variant={'outline'} size={'icon-sm'}><Pencil /></Button>
            </div>
          </div>
          <div className={'flex gap-2'}>
            <Badge variant={'destructive'}>Tag 1</Badge><Badge variant={'secondary'}>Tag 2</Badge><Badge variant={'outline'}>+1 more</Badge>
          </div>
          <div className={'flex gap-3 text-sm items-center'}>
            <Badge>High</Badge>
            <div className={'flex gap-1 items-center'}><CheckCircle size={14} /> 3/5</div>
            <div className={'flex gap-1 items-center'}><Paperclip size={14} /> 1</div>
            <div className={'flex gap-1 items-center'}><File size={14} /> 3</div>
            <p className={'ml-auto text-xs text-muted-foreground'}>1 Apr 2024</p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={taskVis} onOpenChange={handleTaskVis}>
        <DialogContent className={'min-w-250'}>
          {/* Main content */}
          <FieldSet>
            <div className={'grid grid-cols-3 grid-rows-5 gap-4'}>
              {/* Task name */}
              <div className={'col-span-2 row-span-1 col-start-1 row-start-1 flex gap-2 items-center'}>
                <Checkbox className={'rounded-full size-6'} />
                <Input className={'border-none shadow-none md:text-xl font-semibold'} />
              </div>
              {/* Task description */}
              <div className={'col-span-2 row-span-1 col-start-1 row-start-2'}>
                <Field>
                  <FieldLabel>Task description</FieldLabel>
                  <Textarea className={'resize-none'} rows={5} />
                </Field>
              </div>
              {/* Priority */}
              <div className={'col-span-1 row-span-1 col-start-1 row-start-3'}>
                <Field>
                  <FieldLabel>Priority</FieldLabel>
                  <Select>
                    <SelectTrigger><SelectValue placeholder={'Select a priority...'} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value={'low'}><CircleIcon className={'size-2 fill-green-500 text-green-500'} /> Low</SelectItem>
                      <SelectItem value={'medium'}><CircleIcon className={'size-2 fill-yellow-500 text-yellow-500'} /> Medium</SelectItem>
                      <SelectItem value={'high'}><CircleIcon className={'size-2 fill-orange-500 text-orange-500'} /> High</SelectItem>
                      <SelectItem value={'urgent'}><CircleIcon className={'size-2 fill-red-500 text-red-500'} /> Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              {/* Status */}
              <div className={'col-span-1 row-span-1 col-start-1 row-start-4'}>
                <Field>
                  <FieldLabel>Status</FieldLabel>
                  <Select>
                    <SelectTrigger><SelectValue placeholder={'Select a status...'} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value={'not-started'}><XCircle className={'text-red-500'} /> Not started</SelectItem>
                      <SelectItem value={'in-progress'}><Circle className={'text-yellow-500'} /> In progress</SelectItem>
                      <SelectItem value={'done'}><CheckCircle className={'text-green-500'} /> Done</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              {/* Column */}
              <div className={'col-span-1 row-span-1 col-start-2 row-start-3'}>
                <Field>
                  <FieldLabel>Column</FieldLabel>
                  <Select>
                    <SelectTrigger><SelectValue placeholder={'Select a column...'} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value={'backlog'}>Backlog</SelectItem>
                      <SelectItem value={'inProgress'}>In progress</SelectItem>
                      <SelectItem value={'done'}>Done</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              {/* Due date */}
              <div className={'col-span-1 row-span-1 col-start-2 row-start-4'}><Field><FieldLabel>Due date</FieldLabel><DatePicker /></Field></div>
              {/* Tags */}
              <div className={'col-span-2 row-span-1 col-start-1 row-start-5'}><Field><FieldLabel>Tags</FieldLabel><MultipleSelector /></Field></div>
              {/* Checklist */}
              <div className={'col-span-1 row-span-5 col-start-3 row-start-1 border-l p-4 space-y-2'}>
                <div className={'flex gap-2'}>
                  <Input />
                  <Button variant={'outline'} size={'icon'}><Save /></Button>
                </div>
                <ScrollArea className={'rounded-md border'}>
                  <div className={'flex flex-col gap-3 p-4'}>
                    <div className={'flex gap-3'}>
                      <Checkbox className={'rounded-lg'} />
                      <Label>Checkbox 1</Label>
                      <X size={18} className={'ml-auto text-red-500 cursor-pointer'} />
                    </div>
                    <div className={'flex gap-3 items-center'}><Checkbox className={'rounded-lg'} /><Label>Checkbox 2</Label>
                      <X size={18} className={'ml-auto text-red-500 cursor-pointer'} />
                    </div>
                    <div className={'flex gap-3 items-center'}><Checkbox className={'rounded-lg'} /><Label>Checkbox 3</Label>
                      <X size={18} className={'ml-auto text-red-500 cursor-pointer'} />
                    </div>
                    <div className={'flex gap-3 items-center'}><Checkbox className={'rounded-lg'} /><Label>Checkbox 4</Label>
                      <X size={18} className={'ml-auto text-red-500 cursor-pointer'} />
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </div>
          </FieldSet>

          <DialogFooter>
            <DialogClose>
              <Button variant={'secondary'}>Cancel</Button>
            </DialogClose>
            <Button type={'submit'}>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog >

      <Tabs defaultValue={'board'}>
        <div className={'flex'}>
          <TabsList className={'p-0 mb-2 h-10 w-60 bg-background gap-1'}>
            {tabs.map((tab) => (
              <TabsTrigger
                className={'data-[state=active]:bg-accent data-[state=active]:shadow-none data-[state=active]:text-primary'}
                value={tab.value}
              >
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          <Dialog>
            <DialogTrigger className={'mb-auto ml-auto mr-2'}>
              <Button variant={'default'}>Add column</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Add new column</DialogTitle></DialogHeader>
              <FieldSet>
                <FieldGroup>
                  <Field><FieldLabel>Column name</FieldLabel><Input /></Field>
                </FieldGroup>
              </FieldSet>
              <DialogFooter>
                <DialogClose><Button variant={'outline'}>Cancel</Button></DialogClose>
                <Button type={'submit'}>Submit</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <AddTask />
        </div>

        {/* Board tab */}
        <TabsContent value={'board'}>
          {/* Kanban board */}
          <Kanban.Root
            value={columns}
            onValueChange={setColumns}
            getItemValue={(item) => item.id}
          >
            <Kanban.Board className={'grid auto-rows-fr grid-cols-3'}>
              {Object.entries(columns).map(([columnValue, tasks]) => (
                <TaskColumn key={columnValue} value={columnValue} tasks={tasks} />
              ))}
            </Kanban.Board>
            <Kanban.Overlay>
              {({ value, variant }) => {
                if (variant === 'column') {
                  const tasks = columns[value] ?? []
                  return <TaskColumn value={value} tasks={tasks} />
                }
                const task = Object.values(columns)
                  .flat()
                  .find((task) => task.id === value)
                if (!task) return null
                return <TaskCard task={task} />
              }}
            </Kanban.Overlay>
          </Kanban.Root>
        </TabsContent>

        {/* List tab */}
        <TabsContent value={'list'}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Task name</TableHead>
                <TableHead>Due date</TableHead>
                <TableHead>Column</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Tabs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(columns).map(([columnValue, tasks]) => (
                tasks.map((task) => (
                  <TableRow>
                    <TableHead>{task.title}</TableHead>
                    <TableHead>{task.dueDate}</TableHead>
                    <TableHead><Badge>{COLUMN_TITLES[columnValue]}</Badge></TableHead>
                    <TableHead><Badge>{task.priority}</Badge></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                ))))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </>
  )
}

// {COLUMN_TITLES[columnValue]}

interface TaskCardProps
  extends Omit<React.ComponentProps<typeof Kanban.Item>, 'value'> {
  task: Task
}

function TaskCard({ task, ...props }: TaskCardProps) {
  return (
    <Kanban.Item key={task.id} value={task.id} asChild {...props}>
      <div className={'rounded-md border bg-card p-3 shadow-xs'}>
        <div className={'flex flex-col gap-2'}>
          <div className={'flex items-center justify-between gap-2'}>
            <span className={'line-clamp-1 font-medium text-sm'}>
              {task.title}
            </span>
            <Badge
              variant={
                task.priority === 'High'
                  ? 'destructive'
                  : task.priority === 'Medium'
                    ? 'default'
                    : 'secondary'
              }
              className={'pointer-events-none h-5 rounded-sm px-1.5 text-[11px] capitalize'}
            >
              {task.priority}
            </Badge>
          </div>
          <div className={'flex items-center justify-between text-muted-foreground text-xs'}>
            {task.assignee && (
              <div className={'flex items-center gap-1'}>
                <div className={'size-2 rounded-full bg-primary/20'} />
                <span className={'line-clamp-1'}>{task.assignee}</span>
              </div>
            )}
            {task.dueDate && (
              <time className={'text-[10px] tabular-nums'}>{task.dueDate}</time>
            )}
          </div>
        </div>
      </div>
    </Kanban.Item>
  )
}

interface TaskColumnProps
  extends Omit<React.ComponentProps<typeof Kanban.Column>, 'children'> {
  tasks: Task[]
}

function TaskColumn({ value, tasks, ...props }: TaskColumnProps) {
  return (
    <Kanban.Column value={value} {...props}>
      <div className={'flex items-center justify-between'}>
        <div className={'flex items-center gap-2'}>
          <span className={'font-semibold text-sm'}>{COLUMN_TITLES[value]}</span>
          <Badge variant={'secondary'} className={'pointer-events-none rounded-sm'}>
            {tasks.length}
          </Badge>
        </div>

        {/* Column edit dialog */}
        <Dialog>
          <DialogTrigger className={'ml-auto'}>
            <Button size={'icon-sm'} variant={'outline'}><Pencil /></Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit column name</DialogTitle>
            </DialogHeader>
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel>Column name</FieldLabel>
                  <Input
                    value={COLUMN_TITLES[value]}
                    type={'text'}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <DialogFooter>
              <DialogClose>
                <Button variant={'outline'}>Cancel</Button>
              </DialogClose>

              {/* Submit button */}
              <Button>Submit</Button>

            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Kanban.ColumnHandle asChild>
          <Button variant={'ghost'} size={'icon'}>
            <GripVertical className={'h-4 w-4'} />
          </Button>
        </Kanban.ColumnHandle>
      </div>
      <div className={'flex flex-col gap-2 p-0.5'}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} asHandle />
        ))}
      </div>
    </Kanban.Column>
  )
}