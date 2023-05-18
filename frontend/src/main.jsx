import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import RouteError from "./pages/RouteError";
import PageContainer from "./components/PageContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <RouteError />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <PageContainer>
        <RouterProvider router={router} />
      </PageContainer>
    </ChakraProvider>
  </React.StrictMode>
);
