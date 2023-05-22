import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./ui/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import { router } from "routes";
import { Provider } from "react-redux";
import { store } from "store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
