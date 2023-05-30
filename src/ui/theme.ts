import { css } from "styled-components";
import { Colors } from "./colors";

export const lightTheme = css`
  --BackgroundTheme: ${Colors.WhiteContext};
  --TextColor: ${Colors.BackgroundBlack};
  --InputBackground: ${Colors.WhiteContext};
  --DetailMovieTitle: ${Colors.BackgroundGraphite};
  --DetailMovieColumnText: ${Colors.BackgroundBlack};
  --DetailsRowNames: ${Colors.BackgroundGraphite};
`;

export const darkTheme = css`
  --BackgroundTheme: ${Colors.BackgroundDark};
  --TextColor: ${Colors.WhiteContext};
  --InputBackground: ${Colors.BackgroundGraphite};
  --DetailMovieTitle: ${Colors.WhiteContext};
  --DetailMovieColumnText: ${Colors.WhiteContext};
  --DetailsRowNames: ${Colors.LightContext};
`;
