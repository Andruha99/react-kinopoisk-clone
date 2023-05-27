import React from "react";
import { PixemaLight } from "assets";
import { HeaderContainer, InputAccountContainer } from "./styles";
import { InputSearch } from "components/InputSearch/InputSearch";
import { AccountName } from "components/AccountName/AccountName";

export const Header = () => {
  return (
    <HeaderContainer>
      <PixemaLight />
      <InputAccountContainer>
        <InputSearch />
        <AccountName />
      </InputAccountContainer>
    </HeaderContainer>
  );
};
