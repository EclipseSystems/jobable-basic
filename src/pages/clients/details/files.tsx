import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { Pencil, Trash } from "lucide-react"

export function Files() {
	return (
		<>
			<div className={'space-y-4'}>
				<Button>Upload file</Button>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>File name</TableHead>
							<TableHead>File size</TableHead>
							<TableHead>Tags</TableHead>
							<TableHead>Uploaded by</TableHead>
							<TableHead>Upload date</TableHead>
							<TableHead></TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>
								<div className={'flex gap-2'}>
									<img
										className={'w-4'}
										src={'https://upload.wikimedia.org/wikipedia/commons/1/19/Microsoft_Office_Word_%282019%E2%80%932025%29.svg'}
									/>Job Plan.docx
								</div>
							</TableCell>
							<TableCell>100 kb</TableCell>
							<TableCell><Badge variant="outline">Job plan</Badge></TableCell>
							<TableCell>John Smith</TableCell>
							<TableCell>3/12/2025 11:30:02 AM</TableCell>
							<TableCell>
								<div className={'flex gap-2'}>
									<Button size={'icon-sm'} variant="outline"><Pencil /></Button>
									<Button size={'icon-sm'} variant="destructive"><Trash /></Button>
								</div>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>

		</>
	)
}