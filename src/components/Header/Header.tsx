import React from "react";
import { PixemaLight } from "assets";
import { HeaderContainer, HeaderWrap } from "./styles";
import { InputSearch } from "components/InputSearch/InputSearch";
import { AccountName } from "components/AccountName/AccountName";
import { useToggle } from "hooks/useToggle";
import { useWindowSize } from "hooks/useWindowSize";
import { BurgerMenu } from "components/BurgerMenu/BurgerMenu";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 1280;
  return (
    <HeaderWrap>
      <HeaderContainer>
        <PixemaLight />
        <InputSearch />
        <AccountName />
        {isMobile && (
          <BurgerMenu isMobile={isMobile} handleClose={toggleMenu} isOpen={isMenuOpen} />
        )}
      </HeaderContainer>
    </HeaderWrap>
  );
};
