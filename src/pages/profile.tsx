import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import {
	Table,
	TableBody,
	TableCell,
	TableRow,
} from "@/components/ui/table"

import { PageTitle } from "@/components/pageTitle";
import { Key, Phone, QrCode } from "lucide-react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";

export default function UserProfile() {
	return (
		<>
			<PageTitle title={'Profile settings'} padding={false} />
			<div className={'grid grid-1 space-y-2'}>
				<Card>
					<CardHeader>
						<CardTitle>Profile details</CardTitle>
					</CardHeader>
					<CardContent>
						<FieldSet>
							<FieldGroup>
								<Field>
									<FieldLabel htmlFor={''}>Time zone</FieldLabel>
									<Select>
										<SelectTrigger><SelectValue placeholder="Select a time zone..." /></SelectTrigger>
										<SelectContent>
											<SelectItem value='awst'>Australian Western Standard Time (AWST)</SelectItem>
											<SelectItem value='acst'>Australian Central Standard Time (ACST)</SelectItem>
											<SelectItem value='aest'>Australian Eastern Standard Time (AEST)</SelectItem>
											<SelectItem value='nzst'>New Zealand Standard Time (NZST)</SelectItem>
										</SelectContent>
									</Select>
								</Field>
								<Field className={'w-30'}>
									<Button type={'submit'}>Save</Button>
								</Field>
							</FieldGroup>
						</FieldSet>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Authentication</CardTitle>
					</CardHeader>
					<CardContent>
						<Table>
							<TableBody>
								<TableRow>
									<TableCell>
										<div className={'flex gap-2'}><QrCode size={16} /> Authenticator app</div></TableCell>
									<TableCell>iPhone 15</TableCell>
									<TableCell><Badge variant="outline">Not enabled</Badge></TableCell>
									<TableCell>
										<Button variant={'outline'} size={'sm'}>Enable</Button>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className={'flex gap-2'}><Phone size={16} />SMS (least secure)</div></TableCell>
									<TableCell>+61 429057528</TableCell>
									<TableCell><Badge>Enabled</Badge></TableCell>
									<TableCell>
										<Button variant={'destructive'} size={'sm'}>Disable</Button>
									</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>
										<div className={'flex gap-2'}><Key size={16} />Security key</div></TableCell>
									<TableCell>mn.admin</TableCell>
									<TableCell><Badge variant={'outline'}>Not enabled</Badge></TableCell>
									<TableCell>
										<Button variant={'outline'} size={'sm'}>Enable</Button>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>
		</>
	)
}