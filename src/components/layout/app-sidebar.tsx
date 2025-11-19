import { MenuItems } from "@/config/router";
import { Sidebar, SidebarContent } from "../ui/sidebar";
import { NavGroup } from "./nav-group";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const routes = MenuItems()

  return (
    <Sidebar collapsible='icon' side='left' variant='floating' {...props}>
      <SidebarContent>
        {routes.map(props => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
