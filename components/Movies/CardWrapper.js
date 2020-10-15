import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function CardWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  &:hover {
    transform: scale(1.25);
  }
`;

export default CardWrapper;
