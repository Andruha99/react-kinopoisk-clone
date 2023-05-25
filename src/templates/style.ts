import styled from "styled-components";
import { Media } from "ui";

const TemplateContainer = styled.div`
  display: grid;
  justify-content: center;
  max-width: 1440px;

  ${Media.XL} {
    width: 1280px;
  }

  ${Media.LG} {
    width: 1024px;
  }

  ${Media.MD} {
    width: 768px;
  }

  ${Media.SM} {
    width: 568px;
  }
`;

const TemplateWrap = styled.div`
  display: flex;
  gap: 146px;
`;

export { TemplateContainer, TemplateWrap };
