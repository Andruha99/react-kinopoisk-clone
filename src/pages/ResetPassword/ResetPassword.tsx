import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthValues } from "types";
import {
  InputName,
  ResetPasswordContainer,
  ResetPasswordForm,
  StyledButton,
  StyledResetInput,
  Title,
} from "./styles";

export const ResetPassword = () => {
  const { register, handleSubmit } = useForm<AuthValues>();

  const handleSubmitReset: SubmitHandler<AuthValues> = ({ email }) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Messege sent. Please check your email");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <ResetPasswordContainer>
        <ResetPasswordForm onSubmit={handleSubmit(handleSubmitReset)}>
          <Title>Reset password</Title>
          <InputName>Email</InputName>
          <StyledResetInput type="text" {...register("email")} placeholder="Your email" />
          <StyledButton type="submit">Reset</StyledButton>
        </ResetPasswordForm>
      </ResetPasswordContainer>
    </div>
  );
};
