import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
}

/*---> Styles <---*/
export const Link = styled.div`
  padding: 5px;

  a {
    color: #fff;
    margin-left: 25px;
    cursor: pointer;
  }
`;

export default HeaderLink;
