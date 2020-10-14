import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function FooterLink({ children, ...restProps }) {
  return (
    <Link href="#" {...restProps}>
      {children}
    </Link>
  );
}

/*---> Styles <---*/
export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
`;

export default FooterLink;
