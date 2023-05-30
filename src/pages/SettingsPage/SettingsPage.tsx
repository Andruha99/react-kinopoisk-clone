import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes";
import { useAppDispatch } from "store";
import { setTheme } from "store/features/themeSlice/themeSlice";
import { fetchSignOutUser } from "store/features/userSlice/userSlice";

export const SettingsPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(fetchSignOutUser());
    navigate(ROUTE.HOME);
  };

  const handleToggleTheme = () => {
    dispatch(setTheme());
  };

  return (
    <div>
      <button onClick={handleSignOut}>Sign out</button>
      <button onClick={handleToggleTheme}>Change theme</button>
    </div>
  );
};
