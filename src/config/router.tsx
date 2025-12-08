import { useRoutes } from "react-router"

import Layout from "@/components/layout/layout"

import Admin from "@/pages/admin/admin"
import Appointments from "@/pages/appointments/appointments"
import ApptDetails from "@/pages/appointments/details/appt-details"
import Call from "@/pages/call"
import Chat from "@/pages/chat"
import ClientDetails from "@/pages/clients/details/client-details"
import Clients from "@/pages/clients/clients"
import ContactDetails from "@/pages/contacts/details/contact-details"
import Contacts from "@/pages/contacts/contacts"
import Dashboard from "@/pages/dashboard"
import Forms from "@/pages/forms"
import Leads from "@/pages/leads/leads"
import LeadsDetails from "@/pages/leads/details/lead-details"
import Login from "@/pages/login"
import Mail from "@/pages/mail"
import Organisations from "@/pages/organisations/organisations"
import OrgDetails from "@/pages/organisations/details/org-details"
import ReportBuilder from "@/pages/reports/builder"
import Reports from "@/pages/reports/reports"
import Tasks from "@/pages/tasks"
import UserProfile from "@/pages/profile"

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/dashboard', element: <Dashboard />, name: 'Dashboard' },
      { path: '/admin', element: <Admin />, name: 'Admin' },
      { path: '/appointments', element: <Appointments />, name: 'Appointments' },
      { path: '/appointments/details', element: <ApptDetails />, name: 'Appointments/Details' },
      { path: '/call', element: <Call />, name: 'Call' },
      { path: '/chat', element: <Chat />, name: 'Chat' },
      { path: '/clients', element: <Clients />, name: 'Clients' },
      { path: '/clients/details', element: <ClientDetails />, name: 'Clients/Details' },
      { path: '/contacts', element: <Contacts />, name: 'Contacts' },
      { path: '/contacts/details', element: <ContactDetails />, name: 'Contacts/Details' },
      { path: '/forms', element: <Forms />, name: 'Forms' },
      { path: '/leads', element: <Leads />, name: 'Leads' },
      { path: '/leads/details', element: <LeadsDetails/>, name: 'Leads/Details'},
      { path: '/mail', element: <Mail/>, name: 'Mail' },
      { path: '/organisations', element: <Organisations />, name: 'Organisations' },
      { path: '/organisations/details', element: <OrgDetails />, name: 'Organisations/Details' },
      { path: '/profile', element: <UserProfile />, name: 'Profile settings' },
      { path: '/reports', element: <Reports />, name: 'Reports' },
      { path: '/reports/builder', element: <ReportBuilder/>, name: 'Reports/Report builder'},
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
