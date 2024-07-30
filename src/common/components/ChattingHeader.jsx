import React, { useState } from 'react';

import styled from 'styled-components';
import StyledTypography from './StyledTypography';
import BackButton from './BackButton';

const ChattingHeaderBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 67px;
  background: ${({ theme }) => theme.colors.PURPLE[400]};
  z-index: 1;
  display: relative;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const ChattingHeaderBackButtonWrapper = styled.div`
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
`;

const ChattingHeaderText = styled(StyledTypography)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ChattingHeader = ({ text }) => {
  return (
    <ChattingHeaderBackground>
      <ChattingHeaderBackButtonWrapper>
        <BackButton />
      </ChattingHeaderBackButtonWrapper>
      <ChattingHeaderText type="20B" ta="center" color="WHITE">
        {text}
      </ChattingHeaderText>
    </ChattingHeaderBackground>
  );
};

export default ChattingHeader;
