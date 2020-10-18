import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function PlayButton({ children, ...restProps }) {
  return (
    <Button type="button" {...restProps}>
      {children}
    </Button>
  );
}

/*---> Styles <---*/
export const Button = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  border-width: 0;
  padding: 10px 35px;
  border-radius: 5px;
  max-width: 130px;
  font-size: 20px;
  margin-top: 25px;
  cursor: pointer;
  text-align: center;
  color: #000;
  transition: 0.4s ease;
  margin-bottom: 200px;
  outline: 0;

  &:hover {
    background: #ff1e1e;
    color: white;
  }
`;

export default PlayButton;
