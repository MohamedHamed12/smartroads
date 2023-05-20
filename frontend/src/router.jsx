import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import RouteError from "./pages/RouteError";
import Accidents from "./pages/Accidents";
import Accident, { accidentLoader } from "./pages/Accident";
import AccidentView from "./pages/Accident/View";
import AccidentEdit, { accidentEditAction } from "./pages/Accident/Edit";

import dashboardLoader from "./pages/Dashboard/loader";
import accidentsLoader from "./pages/Accidents/loader";

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
    loader: accidentsLoader,
  },
  {
    path: "/accidents/:id",
    errorElement: <RouteError />,
    element: <Accident />,
    loader: accidentLoader,
    children: [
      {
        path: "",
        element: <AccidentView />,
      },
      {
        path: "edit",
        element: <AccidentEdit />,
        action: accidentEditAction
      },
    ],
  },
]);

export default router;
