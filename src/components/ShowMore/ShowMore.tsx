import React from "react";
import { StyledShowMore } from "./styles";

interface ShowMoreProps {
  onClick: () => void;
  text: string;
}

export const ShowMore = ({ onClick, text }: ShowMoreProps) => {
  return (
    <StyledShowMore type="button" onClick={onClick}>
      {text}
    </StyledShowMore>
  );
};
