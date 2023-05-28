import React from "react";
import { useForm } from "react-hook-form";
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
import { Link } from "react-router-dom";

export const SignInForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    // console.log(data);
  };

  return (
    <SignInContainer>
      <SignInFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign In</Title>
        <InputName>Email</InputName>
        <StyledSignInput type="text" {...register("email")} placeholder="Your email" />
        <InputName>Password</InputName>
        <StyledSignInput type="password" {...register("password")} placeholder="Your password" />
        <Forgot>Forgot password?</Forgot>
        <StyledButton type="submit">Sign in</StyledButton>
        <SignUpText>
          Don’t have an account? <SignUpLink to={ROUTE.SIGN_UP}>Sign Up</SignUpLink>
        </SignUpText>
      </SignInFormContainer>
    </SignInContainer>
  );
};
