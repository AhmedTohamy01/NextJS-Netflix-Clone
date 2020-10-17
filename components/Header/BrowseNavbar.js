import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function BrowseNavbar({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.nav`
  max-width: 1850px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 175px;
  margin-right: auto;
  margin-left: auto;
`;

export default BrowseNavbar;
