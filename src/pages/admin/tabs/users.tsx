import { useState } from "react"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ChevronDown, Ellipsis, Lock, Pencil, SlidersVertical, Trash, TriangleAlertIcon, Users } from "lucide-react"

import { users, groups } from "@/config/data"
import NewUser from "@/components/layout/newUser"

const tabs = [{ name: 'Users', value: 'users' }, { name: 'Roles', value: 'roles' }, { name: 'Groups', value: 'groups' }]

export function UserManagement() {
  const [showNewDeleteAlert, setShowNewDeleteAlert] = useState(false)

  return (
    <>
      <h1 className="text-xl font-bold pb-4">User management</h1>
      <div className='w-full'>
        <Tabs defaultValue='users' className='gap-4'>

          {/* Tabs list */}
          <TabsList className='bg-background gap-2 p-0'>
            {tabs.map((tab) => (
              <TabsTrigger value={tab.value} className={'data-[state=active]:border-border data-[state=active]:shadow-none px-6 py-4'}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Users tab */}
          <TabsContent value={tabs[0].value}>
            <div className={'grid space-y-4'}>
              <div className="flex gap-2">
                <NewUser />
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
                        <Avatar><AvatarImage src='https://avatars.githubusercontent.com/u/124599?v=4' /></Avatar>
                      </TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Badge>{user.status}</Badge>
                      </TableCell>
                      <TableCell className={'flex gap-2'}>
                        <Button variant={'outline'} size={'icon-sm'}><Pencil /></Button>
                        <DropdownMenu modal={false}>
                          <DropdownMenuTrigger asChild><Button variant={'outline'} size={'icon-sm'}><Ellipsis /></Button></DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><Lock /> Lock account</DropdownMenuItem>
                            <DropdownMenuItem variant={'destructive'} onSelect={() => setShowNewDeleteAlert(true)}>
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
            <div className={'grid space-y-4'}>
              <div className={'flex'}>
                <Button><SlidersVertical /> Create role</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell className="text-right">.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Groups tab */}
          <TabsContent value={'groups'}>
            <div className={'grid space-y-4'}>
              <div className={'flex'}>
                <Button><Users />Create group</Button>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Group name</TableHead>
                    <TableHead>Members</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {groups.map((group) => (
                    <TableRow>
                      <TableCell>{group.name}</TableCell>
                      <TableCell>{group.members}</TableCell>
                      <TableCell>{group.role}</TableCell>
                      <TableCell className={'flex gap-2'}>
                        <Dialog>
                          <DialogTrigger><Button variant="outline" size={'icon-sm'}><Pencil /></Button></DialogTrigger>
                          <DialogContent className={'min-w-200'}>
                            <DialogHeader>
                              <DialogTitle>Edit group</DialogTitle>
                            </DialogHeader>

                            {/* Main content */}
                            <div className={'grid grid-cols-5 gap-4'}>
                              <div className={'col-span-3'}>
                                <FieldSet>
                                  <FieldGroup>
                                    <Field>
                                      <FieldLabel>Group name</FieldLabel>
                                      <Input
                                        value={group.name}
                                        type={'text'} 
                                      />
                                    </Field>
                                  </FieldGroup>
                                </FieldSet>
                              </div>
                              <div className={'col-span-1'}>
                                <Label>Current members</Label>
                              </div>
                            </div>
                            <DialogFooter>
                              <DialogClose><Button variant="secondary">Cancel</Button></DialogClose>
                              <Button type={'submit'}>Submit</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button variant="destructive" size={'icon-sm'}><Trash /></Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}