import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Home } from './pages/home/home'
import { Habilities } from './pages/habilities/habilities'
import { ErrorPage } from './pages/error/errorPage'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
        element: <Habilities/>,
      },
      {
        path: "/education",
        element: <Habilities/>,
      },
      {
        path: "/contact",
        element: <Habilities/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />,
)
