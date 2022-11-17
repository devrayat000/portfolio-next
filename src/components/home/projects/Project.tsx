import {
  ActionIcon,
  Box,
  createStyles,
  Group,
  Paper,
  Text,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { IconExternalLink, IconSourceCode } from "@tabler/icons";

import { fade, slideUp } from "~/components/animations/motion";
import { MotionAspectRatio } from "~/components/common/motion";

export interface Project {
  id: string;
  preview: string;
  sourceCode: string;
  title: string;
  image: {
    url: string;
  };
}

type Props = Project & {};

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "hidden",
  },
  cover: {
    position: "absolute",
    // inset: 0,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 10,
    cursor: "pointer",
    backgroundColor: theme.fn.rgba(theme.colors[theme.primaryColor][1], 0.85),
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
  },
  title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
  },
  button: {
    backgroundColor: theme.white,
    transition: "all 150ms ease-in-out",
    "&:hover": {
      backgroundColor: theme.colors.grape[6],
      color: theme.white,
    },
  },
}));

const ProjectCard = (props: Props) => {
  const { classes } = useStyles();
  const { ref, hovered } = useHover();

  return (
    <Box component={m.figure} variants={slideUp} aria-labelledby="title" m={0}>
      <Paper
        radius={"md"}
        shadow="sm"
        component={MotionAspectRatio}
        ratio={3 / 2}
        className={classes.card}
        whileHover={{ scale: 1.05 }}
        ref={ref}
        title={props.title}
      >
        <AnimatePresence>
          {hovered && (
            <m.section
              className={classes.cover}
              variants={fade}
              initial="close"
              animate="open"
              exit="close"
            >
              <Group align={"center"} spacing={"lg"}>
                <ActionIcon
                  variant="outline"
                  size={"xl"}
                  color="grape"
                  radius="sm"
                  component="a"
                  href={props.sourceCode}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.button}
                  title="Source Code"
                >
                  <IconSourceCode size={20} />
                </ActionIcon>
                <ActionIcon
                  variant="outline"
                  size={"xl"}
                  color="grape"
                  radius="sm"
                  component="a"
                  href={props.preview}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.button}
                  title="Preview"
                >
                  <IconExternalLink size={20} />
                </ActionIcon>
              </Group>
            </m.section>
          )}
        </AnimatePresence>
        <Image src={props.image.url} alt={`${props.title} - Preview`} fill />
      </Paper>
      <Text
        component="figcaption"
        weight={600}
        id="title"
        align="center"
        lineClamp={1}
        className={classes.title}
        mt="md"
        px="md"
      >
        {props.title}
      </Text>
    </Box>
  );
};

export default ProjectCard;
