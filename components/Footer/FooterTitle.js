import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function FooterTitle({ children, ...restProps }) {
  return (
    <Link href="#" {...restProps}>
      {children}
    </Link>
  );
}

/*---> Styles <---*/
export const Link = styled.a`
  font-size: 16px;
  color: #757575;
  margin-bottom: 50px;
`;

export default FooterTitle;
