import { SubmitHandler, useForm } from "react-hook-form";
import {
  Forgot,
  InputName,
  SignInContainer,
  SignInFormContainer,
  SignUpLink,
  SignUpText,
  StyledButton,
  StyledLink,
  StyledSignInput,
  Title,
} from "./styles";
import { ROUTE } from "routes";
import { AuthValues } from "types";

interface SignUpFormProps {
  onSubmit: SubmitHandler<AuthValues>;
}

export const SignInForm = ({ onSubmit }: SignUpFormProps) => {
  const { register, handleSubmit } = useForm<AuthValues>();

  return (
    <div>
      <SignInContainer>
        <SignInFormContainer onSubmit={handleSubmit(onSubmit)}>
          <Title>Sign In</Title>
          <InputName>Email</InputName>
          <StyledSignInput
            type="email"
            {...register("email", { required: true })}
            placeholder="Your email"
          />
          <InputName>Password</InputName>
          <StyledSignInput
            type="password"
            {...register("password", { required: true })}
            placeholder="Your password"
          />
          <StyledLink to={ROUTE.RESET_PASSWORD_AT_SIGN_IN}>
            <Forgot>Forgot password?</Forgot>
          </StyledLink>
          <StyledButton type="submit">Sign in</StyledButton>
          <SignUpText>
            Don’t have an account? <SignUpLink to={ROUTE.SING_UP_AT_SIGN_IN}>Sign Up</SignUpLink>
          </SignUpText>
        </SignInFormContainer>
      </SignInContainer>
    </div>
  );
};
