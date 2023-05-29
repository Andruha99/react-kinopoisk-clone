import React, { useState } from "react";
import { Modal, SignUpForm } from "components";
import { useAppDispatch } from "store";
import { fetchSignUpUser } from "store/features/userSlice/userSlice";
import { SubmitHandler } from "react-hook-form";
import { AuthValues } from "types";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "routes";

export const SignUpPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    navigate(ROUTE.HOME);
  };

  const onSubmit: SubmitHandler<AuthValues> = (data) => {
    dispatch(fetchSignUpUser(data))
      .unwrap()
      .then(() => {
        toggleModal();
      });
  };

  return (
    <div>
      <SignUpForm onSubmit={onSubmit} />
      {isOpen && <Modal handleClose={toggleModal} />}
    </div>
  );
};
