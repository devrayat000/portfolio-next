import { createStyles } from "@mantine/core";

export const useBaseStyles = createStyles((theme) => ({
  container: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    [theme.fn.smallerThan("md")]: {
      paddingRight: theme.spacing.xl * 2,
      paddingLeft: theme.spacing.xl * 2,
    },
    [theme.fn.smallerThan("sm")]: {
      padding: theme.spacing.xl,
    },
  },
  snap: {
    scrollSnapAlign: "center",
  },
  p: {
    color: "var(--text-paragraph)",
    fontSize: `calc(${theme.fontSizes.xl / 16}em + 4px)`,
    lineHeight: "1.5em",
  },
  body1: {
    fontSize: "1.25em",
    color: "var(--text-body-1)",
  },
}));
