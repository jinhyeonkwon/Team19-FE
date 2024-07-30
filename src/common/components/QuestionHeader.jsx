import React, { useState } from 'react';

import styled from 'styled-components';
import StyledTypography from './StyledTypography';
import BackButton from './BackButton';

const QuestionHeaderBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 67px;
  background: rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(12.100000381469727px);
  z-index: 1;
  display: relative;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const QuestionHeaderBackButton = styled(BackButton)`
  position: absolute;
  left: 24px;
  top: 11px;
  bottom: 11px;
`;

const QuestionHeader = ({ question }) => {
  return (
    <QuestionHeaderBackground>
      <QuestionHeaderBackButton />
      <StyledTypography type="20SB" ta="center" color="WHITE">
        {question}
      </StyledTypography>
    </QuestionHeaderBackground>
  );
};

export default QuestionHeader;
