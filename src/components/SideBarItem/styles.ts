import styled from "styled-components";
import { Colors, S1 } from "ui";

const NavContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

const Icon = styled.span`
  margin-right: 20px;
  svg {
    width: 24px;
  }
`;

const NavText = styled.span`
  ${S1};
  color: ${Colors.SystemDark};
`;

export { NavContainer, Icon, NavText };
