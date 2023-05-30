import { Link } from "react-router-dom";
import styled from "styled-components";
import { B1, Colors, H2, S3 } from "ui";

const SignInContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const SignInFormContainer = styled.form`
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

const StyledSignInput = styled.input`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  background-color: ${Colors.InputBackground};
  border-radius: 10px;
`;

const StyledButton = styled.button`
  padding: 16px 0px;
  margin-top: 40px;
  color: ${Colors.WhiteContext};
  background-color: ${Colors.Primary};
  border: 0px;
  border-radius: 10px;
  cursor: pointer;
`;

const SignUpText = styled.p`
  margin-top: 32px;
  font-size: ${B1};
  text-align: center;
  color: ${Colors.LightContext};
`;

const SignUpLink = styled(Link)`
  font-size: ${B1};
  color: ${Colors.Primary};
  text-decoration: none;
`;

export {
  SignInContainer,
  SignInFormContainer,
  Title,
  InputName,
  StyledSignInput,
  StyledButton,
  SignUpText,
  SignUpLink,
};
