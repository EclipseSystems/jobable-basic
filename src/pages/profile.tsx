import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

import { PageTitle } from "@/components/pageTitle";
import { Key, Phone, QrCode, Save } from "lucide-react";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { ResetPassword } from "@/components/layout/resetPassword"

const methods = [
	{ icon: QrCode, name: 'Authenticator app', value: 'iPhone 15', status: 'Not enabled', button: 'Enable' },
	{ icon: Phone, name: 'SMS (least secure)', value: '+61 429057528', status: 'Enabled', button: 'Disable' },
	{ icon: Key, name: 'Security key', value: 'mn.admin', status: 'Not enabled', button: 'Enable' }
]

export default function UserProfile() {
	return (
		<>
			<PageTitle title={'Profile settings'} padding={false} />
			<div className="grid grid-cols-2 grid-rows-2 gap-4">
				<div>
					<Card>
						<CardHeader><CardTitle>Profile details</CardTitle></CardHeader>
						<CardContent>
							<FieldSet>
								<FieldGroup>
									<Field>
										<FieldLabel htmlFor={'timeZone'}>Time zone</FieldLabel>
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
									<Field className={'w-30'}><Button className={'cursor-pointer'} type={'submit'}><Save /> Save</Button></Field>
								</FieldGroup>
							</FieldSet>
						</CardContent>
					</Card>
				</div>
				<div>
					<Card>
						<CardHeader><CardTitle>Security</CardTitle></CardHeader>
						<CardContent className={'space-y-4'}>
							<div className={'space-y-4'}>
								<Label>Password</Label>
								<ResetPassword />
							</div>
							<div>
								<Label>Last changed</Label>
								<p className={'text-xs mt-2 text-muted-foreground'}>7 December 2025, 14:55:02 PM</p>
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="col-span-2">
					<Card>
						<CardHeader><CardTitle>Authentication</CardTitle></CardHeader>
						<CardContent>
							<Table>
								<TableBody>
									{methods.map((method) => (
										<TableRow>
											<TableCell><div className={'flex gap-2'}><method.icon size={16} /> {method.name}</div></TableCell>
											<TableCell>{method.value}</TableCell>
											<TableCell><Badge variant={method.status === 'Enabled' ? 'default' : 'outline'}>{method.status}</Badge></TableCell>
											<TableCell><Button variant={method.button === 'Enable' ? 'outline' : 'destructive'} size={'sm'}>{method.button}</Button></TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	)
}