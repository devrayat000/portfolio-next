import {
  Container,
  createStyles,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import { fade } from "~/components/animations/motion";
import { MotionTitle } from "~/components/common/motion";
import { useBaseStyles } from "~/styles/base.style";

const useStyles = createStyles((theme) => ({
  bg: {
    backgroundColor: "var(--bg)",
    marginTop: theme.spacing.xl * 5,
    scrollSnapAlign: "center",
  },
  about: {
    gap: theme.spacing.xl * 1.5,
    gridColumn: "6 / span 7",
    paddingRight: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    [theme.fn.smallerThan("md")]: {
      paddingRight: 0,
      paddingLeft: 0,
      gridColumn: "unset",
    },
  },
}));

const About = () => {
  const { classes, cx } = useStyles();
  const { classes: baseClasses } = useBaseStyles();

  return (
    <div className={cx(classes.bg, baseClasses.snap)}>
      <Container size="xl" className={baseClasses.container}>
        <SimpleGrid cols={12} breakpoints={[{ maxWidth: "md", cols: 1 }]}>
          <div />
          <Stack align="stretch" className={classes.about}>
            <MotionTitle variants={fade} order={2}>
              What I Help?
            </MotionTitle>
            <Text component="p" my={0} className={baseClasses.p}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante.
            </Text>

            <Group position="apart" py="xl">
              <div>
                <Title order={3}>4+</Title>
                <Text component="p" my={0} className={baseClasses.p}>
                  Years of experience
                </Text>
              </div>
              <div>
                <Title order={3}>200+</Title>
                <Text component="p" my={0} className={baseClasses.p}>
                  Projects completed
                </Text>
              </div>
            </Group>
          </Stack>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default About;
