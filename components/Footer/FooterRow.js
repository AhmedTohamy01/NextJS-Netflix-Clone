import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function FooterRow({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 740px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default FooterRow;
