import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, SideBar } from "components";
import { Container, TemplateContainer, TemplateWrap } from "./style";

export const MainTemplate = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return (
    <Container>
      <div>
        <TemplateContainer>
          <button onClick={toggleTheme}>Theme: {theme}</button>
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
