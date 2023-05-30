import { UserIcon } from "assets";
import styled from "styled-components";
import { Colors, Media } from "ui";

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 266px;
  cursor: pointer;

  ${Media.XL} {
    display: none;
  }
`;

const AccountIcon = styled(UserIcon)`
  padding: 13px;
  background-color: ${Colors.Primary};
  border-radius: 10px;
  width: 56px;
  height: 56px;
`;

const Name = styled.p`
  margin-left: 20px;
  margin-right: 51px;
  color: ${Colors.TextColor};
  text-decoration: none;
`;

export { AccountWrapper, AccountIcon, Name };
