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

const GlobalFrame = ({ children = null }) => (
  <GlobalFrameInner>{children}</GlobalFrameInner>
);

export default GlobalFrame;
