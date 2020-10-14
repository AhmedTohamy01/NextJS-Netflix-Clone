import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import JumboCompound from "../compounds/JumboCompound";
import OptFormCompound from "../compounds/OptFormCompound";
import Seperator from "../components/Seperator/Seperator";
import AccordionCompound from "../compounds/AccordionCompound";
import FooterCompound from "../compounds/FooterCompound";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Netflix NEXT.JS</title>
        <meta charset="utf-8" />
        <meta name="description" content="Netflix Clone Built Using NEXT.JS" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeaderCompound>
        <OptFormCompound />
      </HeaderCompound>
      <Seperator />
      <JumboCompound />
      <AccordionCompound />
      <OptFormCompound />
      <Seperator />
      <FooterCompound />
    </>
  );
}

export default Home;
