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

export const SignUpForm = ({ onSubmit }: SignUpFormProps) => {
  const { register, handleSubmit, reset } = useForm<AuthValues>();
  // const dispatch = useAppDispatch();

  // const onSubmit: SubmitHandler<AuthValues> = (data) => {
  //   dispatch(fetchSignUpUser(data));
  // };

  return (
    <SignInContainer>
      <SignInFormContainer onSubmit={handleSubmit(onSubmit)}>
        <Title>Sign Up</Title>
        <InputName>Name</InputName>
        <StyledSignInput type="text" {...register("name")} placeholder="Your name" />
        <InputName>Email</InputName>
        <StyledSignInput type="text" {...register("email")} placeholder="Your email" />
        <InputName>Password</InputName>
        <StyledSignInput type="password" {...register("password")} placeholder="Your password" />
        <InputName>Confirm password</InputName>
        <StyledSignInput
          type="password"
          {...register("confirmPassword")}
          placeholder="Confirm  password"
        />
        <Forgot>Forgot password?</Forgot>
        <StyledButton type="submit">Sign up</StyledButton>
        <SignUpText>
          Already have an account? <SignUpLink to={ROUTE.SING_IN_AT_SING_UP}>Sign In</SignUpLink>
        </SignUpText>
      </SignInFormContainer>
    </SignInContainer>
  );
};
