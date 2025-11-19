import { useRoutes } from "react-router";

import Layout from "@/components/layout/layout";

import Clients from "@/pages/clients";

import { Users } from "lucide-react";
import type { NavGroup } from "@/components/layout/types";
import Tasks from "@/pages/tasks";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        title: 'Record management',
        children: [
          {
            title: 'Clients',
            path: '/clients',
            icon: Users,
            element: <Clients />
          }
        ]
      },
      {
        path: '/tasks',
        element: <Tasks />,
        title: 'Tasks',
        children: []
      }
    ]
  },
];

export const MenuItems = (): NavGroup[] => {
  return routes[0].children
}

export const AppRoutes = () => {
  return useRoutes(routes);
};
