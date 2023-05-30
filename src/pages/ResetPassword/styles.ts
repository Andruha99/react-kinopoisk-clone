import styled from "styled-components";
import { Colors, H2, S3 } from "ui";

const ResetPasswordContainer = styled.div`
  width: 100%;
  margin: 0px auto;
`;

const ResetPasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 494px;
  padding: 40px;
  background-color: ${Colors.BackgroundTheme};
  border-radius: 10px;
`;

const Title = styled.h1`
  margin-bottom: 16px;
  font-size: ${H2};
  color: ${Colors.TextColor};
`;

const InputName = styled.h3`
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: ${S3};
  color: ${Colors.TextColor};
`;

const StyledResetInput = styled.input`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  margin-bottom: 40px;
  background-color: ${Colors.InputBackground};
  border-color: ${Colors.LightContext};
  border-radius: 10px;
`;

const StyledButton = styled.button`
  padding: 16px 0px;
  color: ${Colors.WhiteContext};
  background-color: ${Colors.Primary};
  border: 0px;
  border-radius: 10px;
  cursor: pointer;
`;

export {
  ResetPasswordContainer,
  ResetPasswordForm,
  Title,
  InputName,
  StyledResetInput,
  StyledButton,
};
