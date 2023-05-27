import styled from "styled-components";
import { Colors, Media } from "ui";

const HeaderWrap = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${Colors.WhiteContext};
`;

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 1184px;
  padding-top: 40px;
  padding-bottom: 54px;
  background-color: ${Colors.WhiteContext};

  ${Media.XL} {
    width: 928px;
  }

  ${Media.LG} {
    width: 688px;
  }

  ${Media.MD} {
    flex-wrap: wrap;
    justify-content: space-between;
    width: 448px;
  }

  ${Media.SM} {
    width: 272px;
  }
`;

export { HeaderContainer, HeaderWrap };
