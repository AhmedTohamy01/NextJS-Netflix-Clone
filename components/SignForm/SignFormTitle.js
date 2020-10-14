import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function SignFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

/*---> Styles <---*/
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export default SignFormTitle;
