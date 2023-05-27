import { SideBar } from "components/SideBar/SideBar";
import React from "react";
import { StyledBurger } from "./styles";
import { LinkContainer, StyledLink } from "components/SideBar/styles";
import { SideBarItem } from "components/SideBarItem/SideBarItem";
import {
  BurgerMenuIcon,
  CloseMenu,
  FavoritesIcon,
  HomeIcon,
  SettingsIcon,
  TrendsIcon,
} from "assets";
import { ROUTE } from "routes";

interface BurgerMenuProps {
  isOpen: boolean;
  isMobile: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
  idle: {},
};

export const BurgerMenu = ({ isOpen, isMobile, handleClose }: BurgerMenuProps) => {
  const currentVariant = isMobile ? (isOpen ? "open" : "closed") : "idle";
  return (
    <div>
      <div onClick={handleClose}>{isOpen ? <CloseMenu /> : <BurgerMenuIcon />}</div>
      {isOpen && (
        <StyledBurger animate={currentVariant} variants={menuVariants} initial="idle">
          <LinkContainer>
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
          </LinkContainer>
        </StyledBurger>
      )}
    </div>
  );
};
