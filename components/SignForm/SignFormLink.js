import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function SignFormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
}

/*---> Styles <---*/
export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

export default SignFormLink;
