import {
  Container,
  createStyles,
  SimpleGrid,
  Stack,
  Text,
  Timeline,
  Title,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";

import { fade } from "~/components/animations/motion";
import { MotionTitle } from "~/components/common/motion";
import { useBaseStyles } from "~/styles/base.style";

type Props = {};

const useStyles = createStyles((theme) => ({
  experience: {
    [theme.fn.smallerThan("md")]: {
      textAlign: "center",
    },
  },
  timeline: {
    maxWidth: "85%",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginLeft: theme.spacing.xl * 5,
      marginRight: theme.spacing.xl * 5,
    },
    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
      marginLeft: 0,
      marginRight: 0,
    },
  },
  timelineBullet: {
    fontSize: 32,
    width: "1em",
    height: "1em",
    borderRadius: "1em",
    left: "calc(-0.5em - 2px)",
    [theme.fn.smallerThan("sm")]: {
      fontSize: 22,
    },
  },
  check: {
    width: "0.625em",
    height: "0.625em",
  },
}));

const Experience = (props: Props) => {
  const { classes } = useStyles();
  const { classes: baseClasses, cx } = useBaseStyles();

  return (
    <Container
      size="xl"
      className={cx(baseClasses.snap, baseClasses.container)}
    >
      <SimpleGrid
        cols={2}
        spacing="xl"
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        <Stack align="stretch">
          <MotionTitle variants={fade} order={2}>
            Skills &<br /> Experience
          </MotionTitle>
          <Text component="p" className={baseClasses.p}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices.
          </Text>
        </Stack>
        <Stack align="stretch">
          <MotionTitle variants={fade} order={3} className={classes.experience}>
            Experience
          </MotionTitle>

          <Timeline
            active={3}
            lineWidth={4}
            ml="xl"
            mt="md"
            className={classes.timeline}
            classNames={{ itemBullet: classes.timelineBullet }}
          >
            <Timeline.Item
              bullet={<IconCheck className={classes.check} />}
              title={<Title order={5}>Front-end Developer</Title>}
            >
              <Text my={0} component="p" className={baseClasses.body1}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit.
              </Text>
            </Timeline.Item>
            <Timeline.Item
              color="yellow"
              bullet={<IconCheck className={classes.check} />}
              title={<Title order={5}>Back-end Developer</Title>}
            >
              <Text my={0} component="p" className={baseClasses.body1}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit.
              </Text>
            </Timeline.Item>
            <Timeline.Item
              color="green"
              bullet={<IconCheck className={classes.check} />}
              title={<Title order={5}>UI/UX Designer</Title>}
            >
              <Text my={0} component="p" className={baseClasses.body1}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit.
              </Text>
            </Timeline.Item>
            <Timeline.Item
              color="red"
              bullet={<IconCheck className={classes.check} />}
              title={<Title order={5}>Wordpress</Title>}
            >
              <Text my={0} component="p" className={baseClasses.body1}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit.
              </Text>
            </Timeline.Item>
          </Timeline>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Experience;
