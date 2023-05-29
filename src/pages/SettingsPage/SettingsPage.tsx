import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import { useAppDispatch, useAppSelector } from "store";
import { fetchSignOutUser } from "store/features/userSlice/userSlice";
import { userSelector } from "store/selectors/userSelector";

export const SettingsPage = () => {
  const { name, isAuth } = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(fetchSignOutUser());
    navigate(ROUTE.HOME);
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};
