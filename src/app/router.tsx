import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { RootLayout } from "../pages/layouts/root-layout";
import { Transactions } from "../pages/transactions";
import { Overview } from "../pages/overview";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Overview />} />
      <Route path="/transactions" element={<Transactions />} />
    </Route>
  )
);

export function BrowseRouter() {
  return <RouterProvider router={routes}></RouterProvider>;
}
