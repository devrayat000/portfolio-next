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

const useStyles = createStyles((theme) => ({
  bg: {
    backgroundColor: "var(--bg)",
    marginTop: theme.spacing.xl * 5,
    scrollSnapAlign: "center",
  },
  container: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },
  about: {
    gap: theme.spacing.xl * 1.5,
    gridColumn: "6 / span 7",
    paddingLeft: theme.spacing.xl * 2,
    paddingRight: theme.spacing.xl * 2,
  },
}));

const About = () => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.bg, "snap")}>
      <Container size="xl" className={classes.container}>
        <SimpleGrid cols={12}>
          <div />
          <Stack align="stretch" className={classes.about}>
            <MotionTitle variants={fade} order={2}>
              What I Help?
            </MotionTitle>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
              mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante.
            </p>

            <Group position="apart" py="xl">
              <div>
                <Title order={3}>4+</Title>
                <p>Years of experience</p>
              </div>
              <div>
                <Title order={3}>200+</Title>
                <p>Projects completed</p>
              </div>
            </Group>
          </Stack>
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default About;
