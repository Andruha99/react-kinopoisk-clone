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

const StyledInputSearch = styled.input`
  width: 572px;
  height: 56px;
  margin-left: 146px;
  margin-right: 42px;
  border-radius: 10px;

  ${Media.XL} {
    width: 600px;
    margin-left: 78px;
    margin-right: 32px;
  }

  ${Media.LG} {
    width: 382px;
    margin-left: 60px;
  }

  ${Media.MD} {
    width: 448px;
    margin: 0px;
    order: 2;
  }

  ${Media.SM} {
    width: 272px;
    height: 56px;
  }
`;

export { HeaderContainer, HeaderWrap, StyledInputSearch };
