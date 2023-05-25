import { Link } from "react-router-dom";
import styled from "styled-components";
import { Media } from "ui";

const MoviesWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;

  ${Media.XL} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  ${Media.MD} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${Media.SM} {
    grid-template-columns: 1fr;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export { MoviesWrap, StyledLink };
