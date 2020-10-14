import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function Seperator({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  border: 4px solid #222;
`;

export default Seperator;
