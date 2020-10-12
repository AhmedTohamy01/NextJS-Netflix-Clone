import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function JumboItem({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  padding: 70px 5%;
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export default JumboItem;
