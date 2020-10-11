import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import { Wrapper, NewTitle } from "../components/General/IndexStyles"


function Home() {
  return (
    <>
    <HeaderCompound />
    <Wrapper>
      <NewTitle>hello</NewTitle>
    </Wrapper>
    </>
  );
}

export default Home;