import React from "react";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";
const Home = () => {
  const Data = {
    name: "tiwari store",
  };

  return (
    <>
      <HeroSection myData={Data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};
export default Home;
