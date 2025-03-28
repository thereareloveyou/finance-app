import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "../pages/layouts/root-layout";
import { Transactions } from "../pages/transactions";
import { Overview } from "../pages/overview";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
    ],
  },
]);

export function BrowseRouter() {
  return <RouterProvider router={routes}></RouterProvider>;
}
