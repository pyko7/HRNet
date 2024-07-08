import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Employees from "../pages/Employees/Employees";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employees",
    element: <Employees />,
  },
]);
