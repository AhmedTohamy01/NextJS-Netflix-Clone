import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function SignFormBase({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}

/*---> Styles <---*/
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export default SignFormBase;
