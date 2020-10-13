import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

/*---> Styles <---*/
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 50px;
  color: #fff;
  text-align: center;

  @media (max-width: 550px) {
      font-size: 25px;
  }
`;

export default AccordionTitle;
