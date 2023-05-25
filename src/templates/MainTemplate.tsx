import React from "react";
import { Outlet } from "react-router-dom";
import { Header, SideBar } from "components";
import { TemplateContainer, TemplateWrap } from "./style";

export const MainTemplate = () => {
  return (
    <TemplateContainer>
      <Header />
      <TemplateWrap>
        <SideBar />
        <Outlet />
      </TemplateWrap>
    </TemplateContainer>
  );
};
