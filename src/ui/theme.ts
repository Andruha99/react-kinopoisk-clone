import { css } from "styled-components";
import { Colors } from "./colors";

export const lightTheme = css`
  --BackgroundTheme: ${Colors.WhiteContext};
  --TextColor: ${Colors.BackgroundBlack};
  --InputBackground: ${Colors.WhiteContext};
`;

export const darkTheme = css`
  --BackgroundTheme: ${Colors.BackgroundDark};
  --TextColor: ${Colors.WhiteContext};
  --InputBackground: ${Colors.BackgroundGraphite};
`;
