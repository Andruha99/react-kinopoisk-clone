import styled from "styled-components";
import { Media } from "ui";

const Container = styled.div`
  display: grid;
  justify-content: center;
`;

const TemplateContainer = styled.div``;

const TemplateWrap = styled.div`
  display: flex;
  gap: 146px;
  margin-bottom: 64px;

  ${Media.XL} {
    margin-bottom: 56px;
  }

  ${Media.SM} {
    margin-bottom: 48px;
  }
`;

export { Container, TemplateContainer, TemplateWrap };
