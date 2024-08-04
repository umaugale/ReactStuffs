import Dashboard from "./Component/Dashboard"
import Home from "./Component/Home"
import Login from "./Component/Login"
import Welcome from "./Component/Welcome"
import {createBrowserRouter} from "react-router-dom"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]
)
