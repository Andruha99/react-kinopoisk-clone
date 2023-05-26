import { Link } from "react-router-dom";
import styled from "styled-components";
import { B1, Colors, Media } from "ui";

const StyledSideBar = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  ${Media.XL} {
    display: none;
  }
`;

const LinkContainer = styled.div`
  position: sticky;
  top: 152px;
`;

const Rights = styled.p`
  position: sticky;
  bottom: 64px;
  ${B1}
  ${Colors.LightContext}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  :hover {
    span {
      color: ${Colors.Primary};
    }
    svg {
      path {
        fill: ${Colors.Primary};
      }
    }
  }
`;

export { StyledSideBar, Rights, StyledLink, LinkContainer };
