import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function SlideWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export default SlideWrapper;
