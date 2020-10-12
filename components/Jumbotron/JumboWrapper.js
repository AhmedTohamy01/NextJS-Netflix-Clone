import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function JumboWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.div`
`;

export default JumboWrapper;
