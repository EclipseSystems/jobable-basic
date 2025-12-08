import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User } from "lucide-react"
import { Field, FieldGroup, FieldLabel, FieldSet } from "../ui/field"

export default function NewUser() {
	return (
		<Dialog>
			<DialogTrigger><Button><User /> Create user</Button></DialogTrigger>
			<DialogContent className={'min-w-200'}>
				<DialogHeader><DialogTitle>Create new user</DialogTitle></DialogHeader>
				<div className={'grid grid-cols-4 gap-6'}>
					<div className={'col-span-1 space-y-4'}>
						<p className={'text-sm text-center font-bold'}>Select profile image</p>
						<div className={'h-[167.5px] w-full border rounded-full'}></div>
						<div className={'flex text-xs text-center text-destructive'}>
							<div className={'flex-auto border-r'}><p>Delete</p></div>
							<div className={'flex-auto'}><p>Replace image</p></div>
						</div>
						<div className={'text-center text-xs'}>
							<p>Max size: 2.0 MB</p><p>File formats: PNG, JPEG, WEBP</p>
						</div>
					</div>
					<div className={'col-span-3'}>
						<FieldSet>
							<FieldGroup>
								<Field><FieldLabel>Name</FieldLabel><Input type={'text'} /></Field>
								<Field><FieldLabel>Email address</FieldLabel><Input type={'email'} /></Field>
								<Field>
									<FieldLabel>Role</FieldLabel>
									<Select>
										<SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger>
										<SelectContent>
											<SelectItem value="admin">Administrator</SelectItem>
											<SelectItem value="consultant">Consultant</SelectItem>
											<SelectItem value="reader">Reader</SelectItem>
										</SelectContent>
									</Select>
								</Field>
							</FieldGroup>
						</FieldSet>
					</div>
				</div>
				<DialogFooter>
					<DialogClose><Button variant="secondary">Cancel</Button></DialogClose>
					<Button type={'submit'}>Submit</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}