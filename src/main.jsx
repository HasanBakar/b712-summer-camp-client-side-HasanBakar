import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Router';
import AuthProviders from "./Providers/AuthProviders";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-screen-xl mx-auto">
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer></ToastContainer>
          </div>
        </QueryClientProvider>
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>
);
