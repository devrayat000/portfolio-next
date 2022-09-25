import {
  Anchor,
  Avatar,
  Button,
  createStyles,
  Group,
  Header,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
// import Image from "next/future/image";

import Logo from "./Logo";
import avatar from "~/assets/images/avatar.png";
import MenuButton from "./MenuButton";

const useStyles = createStyles((theme) => ({
  header: {
    border: process.env.NODE_ENV === "production" ? "none" : undefined,
  },
  container: {
    padding: `${theme.spacing.md}px ${theme.spacing.xl * 2.5}px`,
    height: "100%",
    [theme.fn.smallerThan("md")]: {
      paddingLeft: theme.spacing.xl * 1.5,
      paddingRight: theme.spacing.xl * 1.5,
    },
    [theme.fn.smallerThan("sm")]: {
      paddingLeft: theme.spacing.xl,
      paddingRight: theme.spacing.xl,
    },
    [theme.fn.smallerThan("xs")]: {
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
    },
  },
  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  link: {
    display: "block",
    position: "relative",
    color: theme.colors.dark[7],
    fontWeight: 500,
    fontSize: theme.fontSizes.md,
    letterSpacing: "2.5%",
    padding: `${theme.spacing.xs / 2}px ${theme.spacing.md}px`,
    transition: "all 150ms linear",

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 2,
      width: 0,
      backgroundColor: "currentColor",
      transition: "all 150ms linear",
    },

    "&:hover": {
      color: theme.colors.dark[1],
    },

    "&:hover::after": {
      width: "100%",
    },
  },
  contact: {
    color: theme.colors.dark[7],
    fontWeight: 500,
    borderRadius: 999,
    borderColor: "currentColor",
    transition: "color 150ms ease-in-out, background-color 100ms ease-in",

    "&:hover": {
      color: theme.white,
      backgroundColor: theme.colors.dark[4],
    },
  },
  avatar: {
    outlineWidth: 3,
    outlineStyle: "solid",
    outlineColor: theme.colors[theme.primaryColor][6],
    outlineOffset: 4,
  },
}));

const MyHeader = () => {
  const { classes, cx } = useStyles();

  return (
    <Header height={90} fixed={false} className={cx(classes.header, "snap")}>
      <Group position="apart" align="center" className={classes.container}>
        <Logo />

        <Group id="links" spacing="md" className={classes.links}>
          <Anchor
            variant="text"
            component={NextLink}
            href="/"
            className={classes.link}
          >
            Home
          </Anchor>
          <Anchor
            variant="text"
            component={NextLink}
            href="/"
            className={classes.link}
          >
            About
          </Anchor>
          <Anchor
            variant="text"
            component={NextLink}
            href="/gas"
            className={classes.link}
          >
            Portfolio
          </Anchor>
          <Anchor
            variant="text"
            component={NextLink}
            href="/"
            className={classes.link}
          >
            Pricing
          </Anchor>
        </Group>

        <Group id="contact" spacing="xl" className={classes.links}>
          <Button variant="outline" className={classes.contact}>
            Contact me
          </Button>

          <Avatar
            src={avatar.src}
            size="md"
            radius="xl"
            className={classes.avatar}
          />
        </Group>

        <MenuButton />
      </Group>
    </Header>
  );
};

export default MyHeader;
