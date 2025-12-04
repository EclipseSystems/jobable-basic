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
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import { Check, CircleSmall, X } from "lucide-react"

const tags = [
	{ value: 'jobseeker', label: 'Jobseeker' },
	{ value: 'organisation', label: 'Organisation' },
	{ value: 'lead', label: 'Lead' },
	{ value: 'contact', label: 'Contact' },
]

export function AddTask() {
	return (
		<>
			<Dialog>
				<DialogTrigger className={'mb-auto'}>
					<Button>Add task</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Add new task</DialogTitle>
					</DialogHeader>
					<FieldSet>
						<FieldGroup>

							{/* Task name */}
							<Field><FieldLabel htmlFor={'name'}>Task name</FieldLabel><Input type={'text'} /></Field>
							<Field><FieldLabel htmlFor={'description'}>Task description</FieldLabel><Textarea /></Field>
							<Field>
								<FieldLabel htmlFor={'column'}>Column</FieldLabel>
								<Select>
									<SelectTrigger><SelectValue placeholder="Select a column..." /></SelectTrigger>
									<SelectContent>
										<SelectItem value={'backlog'}>Backlog</SelectItem>
										<SelectItem value={'inProgress'}>In progress</SelectItem>
										<SelectItem value={'done'}>Done</SelectItem>
									</SelectContent>
								</Select>
							</Field>

							{/* Priority */}
							<Field>
								<FieldLabel htmlFor={'priority'}>Priority</FieldLabel>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Select a priority..." />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value={'low'}>Low</SelectItem>
										<SelectItem value={'medium'}>Medium</SelectItem>
										<SelectItem value={'high'}>High</SelectItem>
										<SelectItem value={'urgent'}>Urgent</SelectItem>
									</SelectContent>
								</Select>
							</Field>

							{/* Status */}
							<Field>
								<FieldLabel htmlFor={'status'}>Status</FieldLabel>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder="Select a status..." />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="not-started"><X /> Not started</SelectItem>
										<SelectItem value="in-progress"><CircleSmall /> In progress</SelectItem>
										<SelectItem value="completed"><Check /> Completed</SelectItem>
									</SelectContent>
								</Select>
							</Field>

							{/* Due date */}
							<Field><FieldLabel htmlFor={'dueDate'}>Due date</FieldLabel><Input type={'date'} /></Field>

						</FieldGroup>
					</FieldSet>
					<DialogFooter>
						<DialogClose>
							<Button variant="outline">Cancel</Button>
						</DialogClose>
						<Button>Submit</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	)
}