import { createBrowserRouter, Navigate } from "react-router";
import Home from "./pages/dashboard/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import DashboardLayout from "./layouts/DashboardLayout";
import Register from "./pages/auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/auth/login" replace />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
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
    element: <DashboardLayout />,
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
    ],
  },
]);
