import styled from "styled-components";
import { Colors, Media } from "ui";

const StyledShowMore = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 64px;
  padding: 10px 24px;
  color: ${Colors.WhiteContext};
  background-color: ${Colors.BackgroundGraphite};
  border: none;
  border-radius: 40px;
  cursor: pointer;

  ${Media.XL} {
    margin-top: 56px;
  }

  ${Media.SM} {
    margin-top: 48px;
  }
`;

export { StyledShowMore };
