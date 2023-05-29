import React from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  Forgot,
  InputName,
  SignInContainer,
  SignInFormContainer,
  SignUpLink,
  SignUpText,
  StyledButton,
  StyledSignInput,
  Title,
} from "./styles";
import { ROUTE } from "routes";
import { AuthValues } from "types";

interface SignUpFormProps {
  onSubmit: SubmitHandler<AuthValues>;
}

export const SignInForm = ({ onSubmit }: SignUpFormProps) => {
  const { register, handleSubmit, reset } = useForm<AuthValues>();

  return (
    <div>
      <SignInContainer>
        <SignInFormContainer onSubmit={handleSubmit(onSubmit)}>
          <Title>Sign In</Title>
          <InputName>Email</InputName>
          <StyledSignInput type="text" {...register("email")} placeholder="Your email" />
          <InputName>Password</InputName>
          <StyledSignInput type="password" {...register("password")} placeholder="Your password" />

          <Forgot>Forgot password?</Forgot>
          <StyledButton type="submit">Sign up</StyledButton>
          <SignUpText>
            Don’t have an account? <SignUpLink to={ROUTE.SING_UP_AT_SIGN_IN}>Sign In</SignUpLink>
          </SignUpText>
        </SignInFormContainer>
      </SignInContainer>
    </div>
  );
};
