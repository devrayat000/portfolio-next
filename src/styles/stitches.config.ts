// stitches.config.ts
import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
  prefix,
  reset,
} = createStitches({
  theme: {
    colors: {
      gray400: "gainsboro",
      gray500: "lightgray",
    },
    fonts: {
      poppins: "'Poppins', sans-serif",
      montserrat: "'Montserrat', sans-serif",
    },
  },
  media: {
    sm: "(min-width: 480px)",
  },
  utils: {
    mx: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
  body: {
    fontFamily: "$poppins",
  },
});
