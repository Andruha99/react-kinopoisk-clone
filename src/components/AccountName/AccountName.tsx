import { ArrowIconRight, ProfileIcon } from "assets";
import React from "react";
import { AccountIcon, AccountWrapper, Name } from "./styles";
import { useAppSelector } from "store";
import { userSelector } from "store/selectors/userSelector";

export const AccountName = () => {
  const { name, isAuth } = useAppSelector(userSelector);
  return (
    <AccountWrapper>
      <AccountIcon>
        <ProfileIcon />
      </AccountIcon>
      {isAuth ? <Name>{name}</Name> : <Name>Sign-Up</Name>}
      <ArrowIconRight />
    </AccountWrapper>
  );
};
