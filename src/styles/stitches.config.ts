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
      primary: "hsl(195, 83%, 38%)",
      secondary: "hsl(42, 100%, 70%)",
      success: "hsl(164, 95%, 43%)",
      error: "hsl(346, 84%, 61%)",
      textPrimary: "hsl(197, 20%, 18%)",
      textSecondary: "hsl(201, 11%, 41%)",
      textBody: "hsl(201, 22%, 68%)",
    },
    fonts: {
      poppins: "'Poppins', sans-serif",
      montserrat: "'Montserrat', sans-serif",
    },
    fontSizes: {
      h1: "4.5rem",
      h2: "3.75rem",
      h3: "3.25rem",
      h4: "2.75rem",
      h5: "2rem",
      h6: "1.5rem",
      p: "1.5rem",
      body1: "1.25rem",
      body2: "1rem",
      link: "1rem",
    },
    letterSpacings: {
      tightest: "0.25%",
      tighter: "0.5%",
      tight: "0.75%",
      normal: "1%",
      wide: "1.5%",
      wider: "2%",
      widest: "2.5%",
    },
    zIndices: {
      nav: 100,
    },
  },
  media: {
    sm: "(min-width: 480px)",
  },
  utils: {
    m: (value: number | string) => ({
      margin: value,
    }),
    mx: (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mt: (value: number | string) => ({
      marginTop: value,
    }),
    mb: (value: number | string) => ({
      marginBottom: value,
    }),
    ml: (value: number | string) => ({
      marginLeft: value,
    }),
    mr: (value: number | string) => ({
      marginRight: value,
    }),
    p: (value: number | string) => ({
      padding: value,
    }),
    px: (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value: number | string) => ({
      paddingTop: value,
    }),
    pb: (value: number | string) => ({
      paddingBottom: value,
    }),
    pl: (value: number | string) => ({
      paddingLeft: value,
    }),
    pr: (value: number | string) => ({
      paddingRight: value,
    }),
  },
});

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  body: {
    fontFamily: "$poppins",
  },
});
