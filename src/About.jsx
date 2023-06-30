import Hero from "./Hero";
import { useGlobalContext } from "./Context";
import { useEffect } from "react";

const About = () => {
  const { UpdateAboutPage } = useGlobalContext();

  useEffect(() => {
    UpdateAboutPage();
  }, []);
  return <Hero />;
};

export default About;
