import type { NextPage } from "next";

import About from "~/components/home/about/About";
import Hero from "~/components/home/hero/Hero";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
};

export default Home;
