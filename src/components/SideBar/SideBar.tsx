import React from "react";
import { Rights, StyledLink, StyledSideBar } from "./styles";
import { SideBarItem } from "components/SideBarItem/SideBarItem";
import { FavoritesIcon, HomeIcon, SettingsIcon, TrendsIcon } from "assets";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";

export const SideBar = () => {
  return (
    <StyledSideBar>
      <div>
        <StyledLink to={ROUTE.HOME}>
          <SideBarItem icon={<HomeIcon />} text="Home" />
        </StyledLink>
        <StyledLink to={ROUTE.TRENDS}>
          <SideBarItem icon={<TrendsIcon />} text="Trends" />
        </StyledLink>
        <StyledLink to={ROUTE.FAVORITES}>
          <SideBarItem icon={<FavoritesIcon />} text="Favorites" />
        </StyledLink>
        <StyledLink to={ROUTE.SETTINGS}>
          <SideBarItem icon={<SettingsIcon />} text="Settings" />
        </StyledLink>
      </div>
      <Rights>© All Rights Reserved</Rights>
    </StyledSideBar>
  );
};
