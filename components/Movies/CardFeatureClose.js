import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function CardFeatureClose({ children, ...restProps }) {
  return (
    <Button type="button" {...restProps}>
      {children}
      <img src="../images/icons/close.png" alt="Close" />
    </Button>
  );
}

/*---> Styles <---*/
export const Button = styled.button`
  color: white;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: none;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export default CardFeatureClose;
