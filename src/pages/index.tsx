import type { NextPage } from "next";

import About from "~/components/home/about/About";
import Experience from "~/components/home/experience/Experience";
import Hero from "~/components/home/hero/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
