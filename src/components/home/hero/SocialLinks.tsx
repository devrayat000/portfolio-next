import { createStyles, ActionIcon } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
} from "@tabler/icons";
import { m } from "framer-motion";

import { reverse, slideRight } from "~/components/animations/motion";
import { MotionGroup } from "~/components/common/motion";

const useStyles = createStyles((theme) => ({
  socialContainer: {
    marginTop: theme.spacing.xl * 1.5,
    gap: theme.spacing.xl,
    [theme.fn.smallerThan("md")]: {
      gap: theme.spacing.xl * 2,
      alignSelf: "stretch",
      justifyContent: "center",
    },
  },
  social: {
    fill: "currentcolor",
    stroke: "none",
    transitionProperty: "fill, stroke",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out",
  },
  socialBtn: {
    color: theme.colors.red[6],
    height: theme.fontSizes.xl * 2.5,
    width: theme.fontSizes.xl * 2.5,
    borderWidth: 2,
    borderColor: theme.colors.red[6],
    borderRadius: 100,
    transition: "color 100ms ease-in, background-color 100ms ease-out",

    "&:hover": {
      backgroundColor: theme.colors.red[6],
      color: theme.white,
    },
  },
}));

const socialLinks = [
  {
    id: "instagram",
    href: "#",
    icon: IconBrandInstagram,
    iconProps: {
      style: {
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.5,
      },
    },
  },
  {
    id: "twitter",
    href: "#",
    icon: IconBrandTwitter,
  },
  {
    id: "facebook",
    href: "#",
    icon: IconBrandFacebook,
  },
];

const SocialLinks = () => {
  const { classes } = useStyles();

  return (
    <MotionGroup className={classes.socialContainer} variants={reverse}>
      {socialLinks.map((socialLink, i) => (
        <ActionIcon
          key={socialLink.id}
          variant="outline"
          className={classes.socialBtn}
          href={socialLink.href}
          component={m.a}
          variants={slideRight}
          custom={{ x: -70 * i }}
        >
          <socialLink.icon
            size={36}
            className={classes.social}
            {...socialLink.iconProps}
          />
        </ActionIcon>
      ))}
    </MotionGroup>
  );
};

export default SocialLinks;
