import { ArrowIconRight, ProfileIcon, UserIcon } from "assets";
import React from "react";
import { AccountIcon, AccountWrapper, Name } from "./styles";

export const AccountName = () => {
  return (
    <AccountWrapper>
      <AccountIcon>
        <ProfileIcon />
      </AccountIcon>
      <Name>Sign-In</Name>
      <ArrowIconRight />
    </AccountWrapper>
  );
};
