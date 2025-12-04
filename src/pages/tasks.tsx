'use client'

import { useState } from 'react'

import { GripVertical, Pencil } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import * as Kanban from '@/components/ui/kanban'
import { PageTitle } from '@/components/pageTitle'
import { AddTask } from '@/components/layout/addTask'

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
  const [columns, setColumns] = useState<Record<string, Task[]>>({
    backlog: [
      {
        id: '1',
        title: 'Add authentication', priority: 'High',
        assignee: 'John Doe', dueDate: '1 Apr 2024',
      },
      {
        id: '2',
        title: 'Create API endpoints', priority: 'Medium',
        assignee: 'Jane Smith', dueDate: '5 Apr 2024',
      },
      {
        id: '3',
        title: 'Write documentation', priority: 'Low',
        assignee: 'Bob Johnson', dueDate: '10 Apr 2024',
      },
    ],
    inProgress: [
      {
        id: '4',
        title: 'Design system updates', priority: 'High',
        assignee: 'Alice Brown', dueDate: '28 Mar 2024',
      },
      {
        id: '5',
        title: 'Implement dark mode', priority: 'Medium',
        assignee: 'Charlie Wilson', dueDate: '2 Apr 2024',
      },
    ],
    done: [
      {
        id: '7',
        title: 'Setup project', priority: 'High',
        assignee: 'Eve Davis', dueDate: '25 Mar 2024',
      },
      {
        id: '8',
        title: 'Initial commit', priority: 'Low',
        assignee: 'Frank White', dueDate: '24 Mar 2024',
      },
    ],
  })

  return (
    <>
      <PageTitle title={'Tasks'} padding={false} />

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
            <Kanban.Board className='grid auto-rows-fr grid-cols-3'>
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
      <div className='rounded-md border bg-card p-3 shadow-xs'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-between gap-2'>
            <span className='line-clamp-1 font-medium text-sm'>
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
              className='pointer-events-none h-5 rounded-sm px-1.5 text-[11px] capitalize'
            >
              {task.priority}
            </Badge>
          </div>
          <div className='flex items-center justify-between text-muted-foreground text-xs'>
            {task.assignee && (
              <div className='flex items-center gap-1'>
                <div className='size-2 rounded-full bg-primary/20' />
                <span className='line-clamp-1'>{task.assignee}</span>
              </div>
            )}
            {task.dueDate && (
              <time className='text-[10px] tabular-nums'>{task.dueDate}</time>
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
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <span className='font-semibold text-sm'>{COLUMN_TITLES[value]}</span>
          <Badge variant='secondary' className='pointer-events-none rounded-sm'>
            {tasks.length}
          </Badge>
        </div>

        {/* Column edit dialog */}
        <Dialog>
          <DialogTrigger className={'ml-auto'}>
            <Button size={'icon-sm'} variant='outline'><Pencil /></Button>
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
                <Button variant='outline'>Cancel</Button>
              </DialogClose>

              {/* Submit button */}
              <Button>Submit</Button>

            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Kanban.ColumnHandle asChild>
          <Button variant='ghost' size='icon'>
            <GripVertical className='h-4 w-4' />
          </Button>
        </Kanban.ColumnHandle>
      </div>
      <div className='flex flex-col gap-2 p-0.5'>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} asHandle />
        ))}
      </div>
    </Kanban.Column>
  )
}