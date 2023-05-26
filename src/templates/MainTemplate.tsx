import React from "react";
import { Outlet } from "react-router-dom";
import { Header, SideBar } from "components";
import { Container, TemplateContainer, TemplateWrap } from "./style";

export const MainTemplate = () => {
  return (
    <Container>
      <div>
        <TemplateContainer>
          <Header />
          <TemplateWrap>
            <SideBar />
            <Outlet />
          </TemplateWrap>
        </TemplateContainer>
      </div>
    </Container>
  );
};
