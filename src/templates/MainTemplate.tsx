import React from "react";
import { Outlet } from "react-router-dom";

export const MainTemplate = () => {
  return (
    <div>
      <h1>HEADER</h1>
      <Outlet />
      <footer>FOOTER</footer>
    </div>
  );
};
