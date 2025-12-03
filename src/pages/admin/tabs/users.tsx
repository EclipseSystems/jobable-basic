import { useState } from "react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { ChevronDown, Ellipsis, Lock, Pencil, Plus, Trash } from "lucide-react"

const users = [
  { name: 'Isaac Nicol', role: 'Administrator', status: 'Active' },
  { name: 'Jess Marallag', role: 'Administrator', status: 'Active' },
  { name: 'Mitchell Nugent', role: 'Administrator', status: 'Active' },
]

export function UserManagement() {
  const [showNewDeleteAlert, setShowNewDeleteAlert] = useState(false)

  return (
    <>
      <h1 className="text-xl font-bold pb-4">User management</h1>
      <div className={'grid space-y-4'}>
        <div className="flex gap-2">
          <Button><Plus /> Create user</Button>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant={'outline'}>Bulk actions <ChevronDown /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Import users</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow>
                <TableCell className={'w-5'}>
                  <Avatar>
                    <AvatarImage src='https://avatars.githubusercontent.com/u/124599?v=4' />
                  </Avatar>
                </TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Badge>{user.status}</Badge>
                </TableCell>
                <TableCell className={'flex gap-2'}>
                  <Button variant={'outline'} size={'icon-sm'}><Pencil /></Button>
                  <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                      <Button variant={'outline'} size={'icon-sm'}><Ellipsis /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem><Lock /> Lock account</DropdownMenuItem>
                      <DropdownMenuItem
                        variant={'destructive'}
                        onSelect={() => setShowNewDeleteAlert(true)}
                      >
                        <Trash /> Delete account
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <AlertDialog open={showNewDeleteAlert} onOpenChange={setShowNewDeleteAlert}>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete your account
                          and remove your data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  )
}