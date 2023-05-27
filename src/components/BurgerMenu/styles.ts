import { motion } from "framer-motion";
import styled from "styled-components";
import { Colors } from "ui";

const StyledBurger = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 1024px) {
    position: absolute;
    top: 100px;
    left: 0;
    z-index: 10;

    flex-direction: column;

    width: 100vw;
    height: 100vh;
    background-color: ${Colors.WhiteContext};
    opacity: 0;
    transform: translateX(-100%);
  }
`;

export { StyledBurger };
