import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Home } from './pages/home/home'
import { Habilities } from './pages/habilities/habilities'
import { Projects } from './pages/projects/projects'
import { Education } from './pages/education/education'
import { Contact } from './pages/contact/constact'
import { ErrorPage } from './pages/error/errorPage'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { OnProjectContextProvider } from './context/onProject'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/habilities",
        element: <Habilities/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/education",
        element: <Education/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <OnProjectContextProvider>
    <RouterProvider router={router} />,
  </OnProjectContextProvider>
)
