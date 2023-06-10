import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router.jsx";
import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import ThemeProvider from "./Hooks/ThemeProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-full mx-auto bg-base-100">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
