import { Link } from "react-router-dom";
import styled from "styled-components";
import { B1, Colors } from "ui";

const StyledSideBar = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Rights = styled.p`
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

export { StyledSideBar, Rights, StyledLink };
