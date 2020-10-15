import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function SignFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
}

/*---> Styles <---*/
export const Text = styled.p`
  color: #8c8c8c;
  font-size: 16px;
  font-weight: 500;
`;

export default SignFormText;
