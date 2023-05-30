import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "store";
import { userSelector } from "store/selectors/userSelector";

export const RequireAuth = () => {
  const { isAuth } = useAppSelector(userSelector);
  return isAuth ? <Outlet /> : <Navigate to="sign-in" />;
};
