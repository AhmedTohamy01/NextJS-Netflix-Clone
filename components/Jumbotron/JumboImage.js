import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function JumboImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
}

/*---> Styles <---*/
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export default JumboImage;
