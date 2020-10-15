import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function SignFormWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export default SignFormWrapper;
