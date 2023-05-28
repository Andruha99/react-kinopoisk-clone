import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { PixemaLight } from "assets";
import { HeaderContainer, HeaderWrap, StyledInputSearch } from "./styles";
import { InputSearch } from "components/InputSearch/InputSearch";
import { AccountName } from "components/AccountName/AccountName";
import { useToggle } from "hooks/useToggle";
import { useWindowSize } from "hooks/useWindowSize";
import { BurgerMenu } from "components/BurgerMenu/BurgerMenu";
import { ROUTE } from "routes";
import { Link, generatePath, useNavigate } from "react-router-dom";
import { useDebounce } from "hooks/useDebounce";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "store";
import { fetchSearch } from "store/features/searchSlice/searchSlice";

export const Header = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 1280;

  const navigate = useNavigate();

  const onSubmit = ({ searchValue }: any) => {
    dispatch(fetchSearch(searchValue));
    navigate(generatePath(ROUTE.SEARCH, { title: searchValue }));
  };

  return (
    <HeaderWrap>
      <HeaderContainer>
        <Link to={ROUTE.HOME}>
          <PixemaLight />
        </Link>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputSearch type="text" {...register("searchValue")} />
        </form>
        <Link to={ROUTE.SIGN_UP}>
          <AccountName />
        </Link>
        {isMobile && (
          <BurgerMenu isMobile={isMobile} handleClose={toggleMenu} isOpen={isMenuOpen} />
        )}
      </HeaderContainer>
    </HeaderWrap>
  );
};
