import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function AllCardsWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export default AllCardsWrapper;
