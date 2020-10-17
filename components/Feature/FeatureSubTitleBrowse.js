import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function FeatureSubTitleBrowse({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
}

/*---> Styles <---*/
export const SubTitle = styled.h2`
  max-width: 640px;
  font-size: 22px;
  font-weight: 500;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);

  @media (max-width: 550px) {
    font-size: 18px;
  }
`;

export default FeatureSubTitleBrowse;
