import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function FeatureWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  text-align: center;
  border: soild green;
`;

export default FeatureWrapper;
