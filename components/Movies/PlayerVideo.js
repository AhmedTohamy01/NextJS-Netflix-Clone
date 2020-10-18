import React from "react";
import styled from "styled-components";

/*---> Component <---*/
function PlayerVideo({ children, ...restProps }) {
  return (
    <Video controls {...restProps}>
      <source {...restProps} />
    </Video>
  );
}

/*---> Styles <---*/
export const Video = styled.video`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;
`;

export default PlayerVideo;
