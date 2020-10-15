import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function SignFormWrapper({ children, ...restProps }) {
  return <FormInput {...restProps}>{children}</FormInput>;
}

/*---> Styles <---*/
export const FormInput = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
`;

export default SignFormWrapper;
