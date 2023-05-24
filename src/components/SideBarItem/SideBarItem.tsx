import React from "react";
import { Icon, NavText } from "./styles";

interface SideBarItemProps {
  icon: any;
  text: string;
}

export const SideBarItem = ({ icon, text }: SideBarItemProps) => {
  return (
    <div>
      <Icon>{icon}</Icon>
      <NavText>{text}</NavText>
    </div>
  );
};
