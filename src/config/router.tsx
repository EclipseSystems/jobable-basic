import { useRoutes } from "react-router"

import Layout from "@/components/layout/layout"

import Admin from "@/pages/admin/admin"
import Appointments from "@/pages/appointments/appointments"
import ApptPage from "@/pages/appointments/details/appt-detail"
import Call from "@/pages/call"
import Chat from "@/pages/chat"
import ClientPage from "@/pages/clients/details/details"
import Clients from "@/pages/clients/clients"
import Contacts from "@/pages/contacts/contacts"
import Dashboard from "@/pages/dashboard"
import Forms from "@/pages/forms"
import Leads from "@/pages/leads/leads"
import Mail from "@/pages/mail"
import Organisations from "@/pages/organisations/organisations"
import Reports from "@/pages/reports/reports"
import Tasks from "@/pages/tasks"
import UserProfile from "@/pages/profile"
import Login from "@/pages/login"

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/admin', element: <Admin /> },
      { path: '/appointments', element: <Appointments /> },
      { path: '/appointments/details', element: <ApptPage /> },
      { path: '/call', element: <Call /> },
      { path: '/chat', element: <Chat /> },
      { path: '/clients', element: <Clients /> },
      { path: '/clients/details', element: <ClientPage /> },
      { path: '/contacts', element: <Contacts /> },
      { path: '/forms', element: <Forms /> },
      { path: '/leads', element: <Leads /> },
      { path: '/mail', element: <Mail/> },
      { path: '/organisations', element: <Organisations /> },
      { path: '/profile', element: <UserProfile /> },
      { path: '/reports', element: <Reports /> },
      { path: '/tasks', element: <Tasks /> }
    ]
  },
  {
    path: "/login",
    element: <Login />
  }
]

export const AppRoutes = () => {
  return useRoutes(routes)
}
