import styled from "styled-components";
import { Colors, Media } from "ui";

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  gap: 146px;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 54px;
  background-color: ${Colors.WhiteContext};

  ${Media.XL} {
    gap: 89px;
  }

  ${Media.LG} {
    gap: 78px;
  }
`;

const InputAccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
`;

export { HeaderContainer, InputAccountContainer };
