import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
<QueryClientProvider client={queryClient}>
  <app />
</QueryClientProvider>

createRoot(document.getElementById("invito-layout")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
