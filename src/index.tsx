import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./ui/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
