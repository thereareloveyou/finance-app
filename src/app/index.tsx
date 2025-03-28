import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Providers } from "./providers/index.tsx";
import { queryClient } from "../shared/api/query-client.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers client={queryClient}></Providers>
  </StrictMode>
);
