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

const QuestionHeaderBackButtonWrapper = styled.div`
  position: absolute;
  left: 24px;
  top: 50%;
  transform: translateY(-50%);
`;

const QuestionHeaderText = styled(StyledTypography)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const QuestionHeader = ({ question }) => {
  return (
    <QuestionHeaderBackground>
      <QuestionHeaderBackButtonWrapper>
        <BackButton />
      </QuestionHeaderBackButtonWrapper>
      <QuestionHeaderText type="20SB" ta="center" color="WHITE">
        {question}
      </QuestionHeaderText>
    </QuestionHeaderBackground>
  );
};

export default QuestionHeader;
