import React from "react";
import { Icon, NavContainer, NavText } from "./styles";

interface SideBarItemProps {
  icon: any;
  text: string;
}

export const SideBarItem = ({ icon, text }: SideBarItemProps) => {
  return (
    <NavContainer>
      <Icon>{icon}</Icon>
      <NavText>{text}</NavText>
    </NavContainer>
  );
};
