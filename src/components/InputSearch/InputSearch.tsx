import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { StyledInputSearch } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
// interface InputSearchProps {
//   value: string;
//   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
//   type: string;
//   placeholder: string;
// }

export const InputSearch = (props: InputProps) => {
  return <StyledInputSearch {...props}></StyledInputSearch>;
};
