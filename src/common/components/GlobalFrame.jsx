import React from 'react';

import styled from 'styled-components';

const GlobalFrameInner = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  display: flex;
`;

const GlobalFrame = ({ children = null }) => (
  <GlobalFrameInner>{children}</GlobalFrameInner>
);

export default GlobalFrame;
