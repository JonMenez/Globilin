import * as React from "react";
import Hero from "@containers/Hero";
import Sponsors from "@containers/Sponsors";
import Info from "@containers/Info";
import Products from "@containers/Products";

const Home = () => {
  return (
    <>
      <Hero />
      <Sponsors />
      <Info />
      <Products />
    </>
  );
};

export default Home;
