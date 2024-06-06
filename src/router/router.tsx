import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "@/layouts/AuthLayout";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";

import HomePage from "@/pages/Home";
import { Layout } from "@/layouts";
import ClasificationPage from "@/pages/Clasification";
import UsPage from "@/pages/Us";
import ReedemPage from "@/pages/Reedem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      /// Dashboard Routes
      // {
      //   path: "dashboard",
      //   element: <DashboardLayout />,
      //   children: [
      //     {
      //       path: "",
      //       element: <Dashboard />,
      //     },
      //     {
      //       path: "profile",
      //       element: <Profile />,
      //     },
      //     {
      //       path: "settings",
      //       element: <Settings />,
      //     },
      //   ],
      // },
      {
        path: "",
        element: <HomePage />,
      },

      {
        path: "clasificacion",
        element: <ClasificationPage />,
      },
      {
        path: "quienes-somos",
        element: <UsPage />,
      },
      {
        path: "canjear",
        element: <ReedemPage />,
      },

      /// Auth Routes
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);
