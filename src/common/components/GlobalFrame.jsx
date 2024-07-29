import React from 'react';

import styled from 'styled-components';

const GlobalFrameInner = styled.div`
  width: 390px;
  height: 797px;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: calc(50% - 195px);
  right: calc(50% - 195px);
`;

const GlobalRelativeFrame = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const GlobalFrame = ({ children = null }) => (
  <GlobalFrameInner>
    <GlobalRelativeFrame>{children}</GlobalRelativeFrame>
  </GlobalFrameInner>
);

export default GlobalFrame;
