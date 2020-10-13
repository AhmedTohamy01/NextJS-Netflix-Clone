import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import JumboCompound from "../compounds/JumboCompound";
import OptFormCompound from "../compounds/OptFormCompound";
import Seperator from "../components/Seperator/Seperator";
import AccordionCompound from "../compounds/AccordionCompound";

function Home() {
  return (
    <>
      <HeaderCompound>
        <OptFormCompound />
      </HeaderCompound>
      <Seperator />
      <JumboCompound />
      <AccordionCompound />
      <OptFormCompound />
      <Seperator />
    </>
  );
}

export default Home;
