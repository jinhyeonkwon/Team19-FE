import React from 'react';

import styled from 'styled-components';

const GlobalFrameInner = styled.div`
  width: 390px;
  height: 807px;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  position: fixed;
  top: 0px;
  left: calc(50% - 195px);
  right: calc(50% - 195px);
  background: ${({ theme }) => theme.colors.BLACK};
`;
// top : 기종에 adjust하기 위함
// height: 원래 797px이었음

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
