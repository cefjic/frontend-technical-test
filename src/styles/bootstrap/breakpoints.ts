import breakpoints from "styled-components-breakpoints";

export enum Breakpoints {
  TABLET_PORTRAIT = 600,
  TABLET_LANDSCAPE = 900,
  LAPTOP = 1200,
  DESKTOP = 1800,
}

/**
 * breakpoints based on https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/
 */
export const media = breakpoints({
  tabletPortrait: Breakpoints.TABLET_PORTRAIT,
  tabletLandscape: Breakpoints.TABLET_LANDSCAPE,
  laptop: Breakpoints.LAPTOP,
  desktop: Breakpoints.DESKTOP,
});
