import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";

import router from "./router";
import PageContainer from "./components/PageContainer";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <PageContainer>
          <RouterProvider router={router} />
        </PageContainer>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
