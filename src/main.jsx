import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Router';
import AuthProviders from "./Providers/AuthProviders"



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <div className="max-w-screen-xl mx-auto">
          <RouterProvider router={router}></RouterProvider>
          <ToastContainer></ToastContainer>
        </div>
      </AuthProviders>
    </HelmetProvider>
  </React.StrictMode>
);
