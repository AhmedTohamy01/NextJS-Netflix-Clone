import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

/*---> Styles <---*/
export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 30px;
`;

export default CardTitle;
