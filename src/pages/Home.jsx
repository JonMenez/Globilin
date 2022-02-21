import * as React from "react";
import Hero from "@containers/Hero";
import Sponsors from "@containers/Sponsors";
import Info from "@containers/Info";

const Home = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <Info />
    </>
  );
};

export default Home;
