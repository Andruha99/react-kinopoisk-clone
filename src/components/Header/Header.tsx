import React from "react";
import { PixemaLight } from "assets";
import { HeaderContainer } from "./styles";
import { InputSearch } from "components/InputSearch/InputSearch";

export const Header = () => {
  return (
    <HeaderContainer>
      <PixemaLight />
      <InputSearch />
    </HeaderContainer>
  );
};
