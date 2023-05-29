import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { Colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html[theme='light'] {
        ${lightTheme}
    }

    html[theme='dark'] {
        ${darkTheme}
    }

    body {
        font-family: 'Exo 2', sans-serif;
        font-style: normal;
        background-color: ${Colors.BackgroundTheme};
    }
`;
