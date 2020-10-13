import React, { useState } from "react";
import AccordionContext from "./AccordionContext";
import styled from "styled-components";

/*---> Component <---*/
function AccordionItem({ children, ...restProps }) {
  const [AccordionShow, setAccordionShow] = useState(false);
  return (
    <AccordionContext.Provider
      value={[AccordionShow, setAccordionShow]}
      {...restProps}
    >
      <Wrapper>{children}</Wrapper>
    </AccordionContext.Provider>
  );
}

/*---> Styles <---*/
export const Wrapper = styled.div`
  margin-bottom: 10px;
`;

export default AccordionItem;
