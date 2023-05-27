import styled from "styled-components";
import { Media } from "ui";

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

export { StyledInputSearch };
