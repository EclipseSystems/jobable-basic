import { useRoutes } from "react-router";

import Layout from "@/components/layout/layout"

import Appointments from "@/pages/appointments/appointments";
import ClientPage from "@/pages/clients/details/details";
import Clients from "@/pages/clients/clients";
import Dashboard from "@/pages/dashboard";
import Forms from "@/pages/forms";
import Reports from "@/pages/reports/reports";
import Tasks from "@/pages/tasks";
import Call from "@/pages/call";
import Chat from "@/pages/chat";
import Mail from "@/pages/mail";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/appointments', element: <Appointments /> },
      { path: '/call', element: <Call /> },
      { path: '/chat', element: <Chat /> },
      { path: '/clients', element: <Clients /> },
      { path: '/clients/details', element: <ClientPage /> },
      { path: '/forms', element: <Forms /> },
      { path: '/mail', element: <Mail/> },
      { path: '/reports', element: <Reports /> },
      { path: '/tasks', element: <Tasks /> }
    ]
  },
];

export const AppRoutes = () => {
  return useRoutes(routes);
};
