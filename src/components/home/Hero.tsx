import {
  Button,
  Container,
  createStyles,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Group,
  UnstyledButton,
  keyframes,
  ActionIcon,
} from "@mantine/core";
import {
  IconCaretRight,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconMouse,
  IconArrowNarrowDown,
} from "@tabler/icons";
import Image from "next/future/image";
import { motion } from "framer-motion";

import me from "~/assets/images/me.png";

const wiggleX = keyframes({
  from: {
    translate: 0,
  },
  to: {
    translate: 10,
  },
});

const wiggleY = keyframes({
  from: {
    transform: "translateY(0)",
  },
  to: {
    transform: "translateY(-10)",
  },
});

const useStyles = createStyles((theme, _, ref) => {
  const caretRef = ref("caret");

  return {
    tag: {
      textTransform: "uppercase",
      fontSize: `calc(${theme.fontSizes.xl / 16}em + 4px)`,
      letterSpacing: "10%",
    },
    zul: {
      color: theme.colors[theme.primaryColor][6],
    },
    action: {
      borderRadius: 999,
      textTransform: "uppercase",
      fontSize: theme.fontSizes.md,
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
      letterSpacing: "2.5%",
      padding: "16px 52px",
      color: theme.white,
      backgroundColor: theme.colors[theme.primaryColor][6],
      transition: "background-color 150ms linear",

      "&:hover": {
        backgroundColor: theme.fn.rgba(
          theme.colors[theme.primaryColor][6],
          0.85
        ),
      },

      [`&:hover + ${caretRef}`]: {
        animation: `${wiggleX} 250ms ease-in-out infinite alternate`,
        fill: theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.85),
      },
    },
    caret: {
      ref: caretRef,
      color: theme.colors[theme.primaryColor][6],
      fill: "currentcolor",
      stroke: "none",
      transition: "all 150ms linear",
    },
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
      transition: "all 150ms ease-in",
    },
    socialBtn: {
      color: theme.colors.red[6],
      height: theme.fontSizes.xl * 2.5,
      width: theme.fontSizes.xl * 2.5,
      borderWidth: 2,
      borderColor: theme.colors.red[6],
      borderRadius: 100,
      transition: "all 100ms ease-in",

      "&:hover": {
        backgroundColor: theme.colors.red[6],
        color: theme.white,
      },
    },
    imgContainer: {
      position: "relative",
      aspectRatio: "3 / 4",
      [theme.fn.smallerThan("md")]: {
        width: "60vw",
        placeSelf: "center",
      },
      [theme.fn.smallerThan("sm")]: {
        width: "80vw",
        placeSelf: "center",
      },
    },
    shapes: {
      position: "absolute",
      inset: 0,
      zIndex: -1,
      "&:not(:root)": {
        overflow: "visible",
      },
    },
    wiggle: {
      animation: `${wiggleY} 250ms ease-in-out infinite alternate`,
    },
    scroller: {
      marginTop: theme.spacing.xl * 1.5,
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },
  };
});

const Hero = () => {
  const { classes } = useStyles();

  return (
    <Container size="xl">
      <SimpleGrid
        cols={2}
        spacing="lg"
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        <Stack align="start">
          <Text className={classes.tag} color="yellow" component="p">
            Build Imaginations
          </Text>
          <Title>
            Hi, I’m <span className={classes.zul}>Zul</span> Ikram
            <br /> Musaddik Rayat
          </Title>
          <Text
            component="p"
            color="gray"
            sx={(theme) => ({
              fontSize: `calc(${theme.fontSizes.xl / 16}em + 4px)`,
            })}
          >
            Your first choice in Full-Stack development.
          </Text>
          <Group>
            <UnstyledButton className={classes.action}>Hire Me</UnstyledButton>
            <IconCaretRight size={32} className={classes.caret} />
          </Group>

          <Group className={classes.socialContainer}>
            <ActionIcon variant="outline" className={classes.socialBtn}>
              <IconBrandInstagram
                size={36}
                className={classes.social}
                style={{
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: 1.5,
                }}
              />
            </ActionIcon>
            <ActionIcon variant="outline" className={classes.socialBtn}>
              <IconBrandTwitter size={36} className={classes.social} />
            </ActionIcon>
            <ActionIcon variant="outline" className={classes.socialBtn}>
              <IconBrandFacebook size={36} className={classes.social} />
            </ActionIcon>
          </Group>

          <Stack align="center" className={classes.scroller}>
            <IconArrowNarrowDown
              size={36}
              strokeWidth={1}
              className={classes.wiggle}
            />
            <UnstyledButton>
              <IconMouse size={52} strokeWidth={1} />
            </UnstyledButton>
          </Stack>
        </Stack>

        <div className={classes.imgContainer}>
          <Image
            fill
            src={me.src}
            // width={600}
            // height={800}
            alt="Zul Ikram Musaddik Rayat"
          />

          <motion.svg
            className={classes.shapes}
            viewBox="0 0 812 989"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="off"
            animate="on"
          >
            <motion.path
              d="M507.089 462.7C597.713 462.7 671.178 394.253 671.178 309.82C671.178 225.387 597.713 156.94 507.089 156.94C416.465 156.94 343 225.387 343 309.82C343 394.253 416.465 462.7 507.089 462.7Z"
              fill="#0078E7"
              variants={{
                off: {
                  scale: 0.5,
                  opacity: 0,
                },
                on: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.7,
                    ease: "easeOut",
                  },
                },
              }}
            />
            <motion.path
              d="M121.059 425.46C187.865 425.46 242.022 375.003 242.022 312.76C242.022 250.518 187.865 200.06 121.059 200.06C54.2532 200.06 0.0961914 250.518 0.0961914 312.76C0.0961914 375.003 54.2532 425.46 121.059 425.46Z"
              fill="#FFD166"
              variants={{
                off: {
                  x: -100,
                  opacity: 0,
                },
                on: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
            />
            <motion.path
              d="M732.185 680.26C773.431 680.26 806.867 649.108 806.867 610.68C806.867 572.252 773.431 541.1 732.185 541.1C690.94 541.1 657.504 572.252 657.504 610.68C657.504 649.108 690.94 680.26 732.185 680.26Z"
              fill="#FFD166"
              variants={{
                off: {
                  scale: 0.2,
                  opacity: 0,
                },
                on: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            />
            <motion.path
              d="M730.081 143.22C772.489 143.22 806.867 111.19 806.867 71.68C806.867 32.1696 772.489 0.140015 730.081 0.140015C687.674 0.140015 653.296 32.1696 653.296 71.68C653.296 111.19 687.674 143.22 730.081 143.22Z"
              fill="#EF476F"
              variants={{
                off: {
                  opacity: 0,
                  scale: 1.5,
                },
                on: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.2,
                    ease: "easeOut",
                  },
                },
              }}
            />
            <motion.path
              d="M734.289 988.96C776.696 988.96 811.074 956.93 811.074 917.42C811.074 877.91 776.696 845.88 734.289 845.88C691.882 845.88 657.504 877.91 657.504 917.42C657.504 956.93 691.882 988.96 734.289 988.96Z"
              fill="#06D6A0"
              variants={{
                off: {
                  opacity: 0,
                },
                on: {
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.3,
                    ease: "easeOut",
                  },
                },
              }}
            />
          </motion.svg>
        </div>
      </SimpleGrid>
    </Container>
  );
};

export default Hero;
