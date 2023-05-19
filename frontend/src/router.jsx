import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import RouteError from "./pages/RouteError";
import Accidents from "./pages/Accidents";

import dashboardLoader from "./pages/Dashboard/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <RouteError />,
    loader: dashboardLoader,
  },
  {
    path: "/accidents",
    element: <Accidents />,
    errorElement: <RouteError />,
  },
]);

export default router;
