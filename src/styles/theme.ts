import { type MantineThemeOverride } from "@mantine/styles";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  primaryColor: "blue",
  headings: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    sizes: {
      h1: { fontSize: 72 },
      h2: { fontSize: 60 },
      h3: { fontSize: 52 },
      h4: { fontSize: 44 },
      h5: {
        fontSize: 32,
        fontWeight: 600,
      },
      h6: {
        fontSize: 24,
        fontWeight: 500,
      },
    },
  },
  shadows: {
    md: "0px 0px 32px 2px rgba(17, 138, 178, 0.25)",
  },
  fontFamily: "'Poppins', sans-serif",
};
