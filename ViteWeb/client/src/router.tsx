import { createBrowserRouter, Navigate } from "react-router";
import Home from "./pages/dashboard/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import Register from "./pages/auth/Register";
import Flags from "./pages/Flags";
import Guard from "./Guard";
import AuthGuard from "./AuthGuard";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: "auth",
    element: <AuthGuard><AuthLayout /></AuthGuard>,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Guard><DashboardLayout /></Guard>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Login />,
      },

      {
        path: "settings",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Home />,
      },
      {
        path: "flags",
        element: <Flags />,
      },
    ],
  },
]);
