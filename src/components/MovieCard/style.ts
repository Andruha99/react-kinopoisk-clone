import { Link } from "react-router-dom";
import styled from "styled-components";
import { Media, S2 } from "ui";

const CardWrap = styled.div`
  width: 266px;

  ${Media.XL} {
    width: 208px;
  }

  ${Media.SM} {
    width: 272px;
  }
`;

const Poster = styled.img`
  width: 266px;
  height: 357px;
  border-radius: 20px;

  ${Media.XL} {
    width: 208px;
    height: 279px;
  }

  ${Media.SM} {
    width: 272px;
    height: 365px;
  }
`;

const Title = styled.h3`
  font-size: ${S2};
  text-decoration: none;
`;

export { CardWrap, Poster, Title };
