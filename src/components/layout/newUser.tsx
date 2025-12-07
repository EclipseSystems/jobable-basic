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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Plus } from "lucide-react"
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field"

export default function NewUser() {
	return (
		<Dialog>
			<DialogTrigger>
				<Button><Plus /> Create user</Button>
			</DialogTrigger>
			<DialogContent className={'min-w-200'}>
				<DialogHeader>
					<DialogTitle>Create new user</DialogTitle>
				</DialogHeader>
				<FieldSet>
					<FieldGroup>
						<Field>
							<FieldLabel>Name</FieldLabel>
							<Input type={'text'} />
						</Field>
						<Field>
							<FieldLabel>Email address</FieldLabel>
							<Input type={'email'} />
						</Field>
						<Field>
							<FieldLabel>Role</FieldLabel>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select a role" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="admin">Administrator</SelectItem>
									<SelectItem value="consultant">Consultant</SelectItem>
									<SelectItem value="reader">Reader</SelectItem>
								</SelectContent>
							</Select>
						</Field>
					</FieldGroup>
				</FieldSet>
				<DialogFooter>
					<DialogClose>
						<Button variant="secondary">Cancel</Button>
					</DialogClose>
					<Button type={'submit'}>Submit</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}