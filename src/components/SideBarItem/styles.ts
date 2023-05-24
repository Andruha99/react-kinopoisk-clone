import styled from "styled-components";
import { Colors, S1 } from "ui";

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

export { Icon, NavText };
