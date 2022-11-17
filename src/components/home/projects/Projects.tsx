import { Button, Center, Container, SimpleGrid } from "@mantine/core";
import { IconReload } from "@tabler/icons";

import { useBaseStyles } from "~/styles/base.style";
import ProjectCard from "./Project";
import mock from "./mock.json";
import {
  MotionContainer,
  MotionSimpleGrid,
  MotionTitle,
} from "~/components/common/motion";
import { fade, stagger } from "~/components/animations/motion";

type Props = {};

const Projects = (props: Props) => {
  const { classes: baseClasses } = useBaseStyles();

  return (
    <MotionContainer
      size={"xl"}
      initial={"close"}
      whileInView={"open"}
      exit={"close"}
      viewport={{ once: false }}
      className={baseClasses.container}
    >
      <MotionTitle variants={fade} order={2} align="center">
        Projects
      </MotionTitle>
      <MotionSimpleGrid
        cols={1}
        spacing="xl"
        mt={"xl"}
        breakpoints={[
          { minWidth: "sm", cols: 2 },
          { minWidth: "md", cols: 3 },
        ]}
        variants={stagger}
      >
        {mock.data.projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </MotionSimpleGrid>

      <Center my={"xl"}>
        <Button variant="outline" rightIcon={<IconReload size={16} />}>
          Show More
        </Button>
      </Center>
    </MotionContainer>
  );
};

export default Projects;
