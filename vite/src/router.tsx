import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Dashboard",
    element: <div>Hello Dashboard</div>,
  },
]);
