// import React, { useContext } from "react";
import { useProductContext } from "./Context/ProductContext";
import HeroSection from "./components/HeroSection";

const About = () => {
  const { myName } = useProductContext();
  const Data = {
    name: "tiwari Ecommerce",
  };
  return (
    <>
      {myName}

      <HeroSection myData={Data} />
    </>
  );
};

export default About;
