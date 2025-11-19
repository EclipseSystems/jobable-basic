import { MenuItems } from "@/config/router";
import { Sidebar, SidebarContent, SidebarFooter } from "../ui/sidebar";
import { NavGroup } from "./nav-group";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const routes = MenuItems()
  const currentUser = {
    name: 'Mitchell Nugent',
    email: 'mitchell.nugent@epicassist.org',
    avatar: 'https://avatars.githubusercontent.com/u/124599?v=4'
  }

  return (
    <Sidebar collapsible='icon' side='left' variant='floating' {...props}>
      <SidebarContent>
        {routes.map(props => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={currentUser}/>
      </SidebarFooter>
    </Sidebar>
  );
}
