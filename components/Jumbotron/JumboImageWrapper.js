import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function JumboImageWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  @media (max-width: 950px) {
    text-align: center;
  }
`;

export default JumboImageWrapper;
