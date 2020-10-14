import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function OptFormEmail({ children, ...restProps }) {
  return (
    <EmailInput placeholder="Email Address" {...restProps}>
      {children}
    </EmailInput>
  );
}

/*---> Styles <---*/
export const EmailInput = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  font-size: 20px;
`;

export default OptFormEmail;
