import type { NextPage } from "next";
import { m } from "framer-motion";

import About from "~/components/home/about/About";
import Experience from "~/components/home/experience/Experience";
import Hero from "~/components/home/hero/Hero";
import Projects from "~/components/home/projects/Projects";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Projects />
      {/* <Contacty /> */}
    </div>
  );
};

export default Home;
