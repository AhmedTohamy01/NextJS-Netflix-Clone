import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function CardFeatureWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;
  padding-top: 30px;
`;

export default CardFeatureWrapper;
