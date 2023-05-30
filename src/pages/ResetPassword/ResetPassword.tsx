import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthValues } from "types";

export const ResetPassword = () => {
  const { register, handleSubmit } = useForm<AuthValues>();

  const handleSubmitReset: SubmitHandler<AuthValues> = ({ email }) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("reset");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitReset)}>
        <h1>Reset password</h1>
        <p>Email</p>
        <input type="text" {...register("email")} placeholder="Your email" />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};
