import { useEffect } from "react";
import { useGlobalContext } from "./Context";
import Hero from "./Hero";
import Services from "./Services";
import Contacts from "./Contacts";

const Home = () => {
  const { UpdateHomePage } = useGlobalContext();

  useEffect(() => {
    UpdateHomePage();
  }, []);
  return (
    <>
      <Hero />
      <Services />
      <Contacts />
    </>
  );
};

export default Home;
