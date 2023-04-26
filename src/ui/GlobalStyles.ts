import styled, { createGlobalStyle } from "styled-components";
import { secondaryColor } from "./colors";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${secondaryColor.systemSecondary};
    }
`;
