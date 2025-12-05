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
      { path: '/dashboard', element: <Dashboard />, name: 'Dashboard' },
      { path: '/admin', element: <Admin />, name: 'Admin' },
      { path: '/appointments', element: <Appointments />, name: 'Appointments' },
      { path: '/appointments/details', element: <ApptPage />, name: 'Appointments/Details' },
      { path: '/call', element: <Call />, name: 'Call' },
      { path: '/chat', element: <Chat />, name: 'Chat' },
      { path: '/clients', element: <Clients />, name: 'Clients' },
      { path: '/clients/details', element: <ClientPage />, name: 'Clients/Details' },
      { path: '/contacts', element: <Contacts />, name: 'Contacts' },
      { path: '/forms', element: <Forms />, name: 'Forms' },
      { path: '/leads', element: <Leads />, name: 'Leads' },
      { path: '/mail', element: <Mail/>, name: 'Mail' },
      { path: '/organisations', element: <Organisations />, name: 'Organisations' },
      { path: '/profile', element: <UserProfile />, name: 'Profile settings' },
      { path: '/reports', element: <Reports />, name: 'Reports' },
      { path: '/tasks', element: <Tasks />, name: 'Tasks' }
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
