import { type MantineThemeOverride } from "@mantine/styles";
import { createEmotionCache } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: "prussian",
  colors: {
    prussian: [
      "#cce6ff",
      "#b3daff",
      "#99ceff",
      "#80c1ff",
      "#4da9ff",
      "#1a90ff",
      "#0077e6",
      "#005cb3",
      "#004280",
      "#00284d",
    ],
  },
  headings: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    sizes: {
      h1: { fontSize: "4.5em" },
      h2: { fontSize: "4em" },
      h3: { fontSize: "3.25em" },
      h4: { fontSize: "2.75em" },
      h5: {
        fontSize: "2em",
        fontWeight: 600,
      },
      h6: {
        fontSize: "1.5em",
        fontWeight: 500,
      },
    },
  },
  shadows: {
    md: "0px 0px 32px 2px rgba(17, 138, 178, 0.25)",
  },
  fontFamily: "'Poppins', sans-serif",
};

export const emotionCache = createEmotionCache({ key: "devrayat" });
