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
  left: auto;
  right: auto;
`;

const GlobalFrame = ({ children = null }) => (
  <GlobalFrameInner>{children}</GlobalFrameInner>
);

export default GlobalFrame;
