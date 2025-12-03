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
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ChevronDown, Ellipsis, Lock, Pencil, Plus, Trash, TriangleAlertIcon } from "lucide-react"

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

      <div className='w-full'>
        <Tabs defaultValue='users' className='gap-4'>

          {/* Tabs list */}
          <TabsList className='bg-background gap-2 p-0'>
            <TabsTrigger value={'users'} className={'data-[state=active]:border-border data-[state=active]:shadow-none px-6 py-4'}>
              Users
            </TabsTrigger>
            <TabsTrigger value={'roles'} className={'data-[state=active]:border-border data-[state=active]:shadow-none px-6 py-4'}>
              Roles
            </TabsTrigger>
            <TabsTrigger value={'teams'} className={'data-[state=active]:border-border data-[state=active]:shadow-none px-6 py-4'}>
              Teams
            </TabsTrigger>
          </TabsList>

          {/* Users tab */}
          <TabsContent value={'users'}>
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
                            <AlertDialogHeader className='items-center'>
                              <div className='bg-destructive/10 mx-auto mb-2 flex size-12 items-center justify-center rounded-full'>
                                <TriangleAlertIcon className='text-destructive size-6' />
                              </div>
                              <AlertDialogTitle>Are you absolutely sure you want to delete?</AlertDialogTitle>
                              <AlertDialogDescription className='text-center'>
                                This action cannot be undone. This will permanently delete the account and its data from our servers.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction className='bg-destructive dark:bg-destructive/60 hover:bg-destructive focus-visible:ring-destructive text-white'>
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>

                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Roles tab */}
          <TabsContent value={'roles'}>

          </TabsContent>

          {/* Teams tab */}
          <TabsContent value={'teams'}>

          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}