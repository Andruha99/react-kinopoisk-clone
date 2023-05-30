import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, SideBar } from "components";
import { Container, TemplateContainer, TemplateWrap } from "./style";
import { useAppSelector } from "store";
import { themeSelector } from "store/selectors/themeSelector";

export const MainTemplate = () => {
  const { theme } = useAppSelector(themeSelector);

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

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
