import React from 'react';

import styled from 'styled-components';
import StyledTypography from './StyledTypography';
import BackButton from './BackButton';
import { Link } from 'react-router-dom';

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

const ChattingHeader = ({ text, backButtonOnClick, backButtonLinkTo }) => {
  return (
    <ChattingHeaderBackground>
      <Link to={backButtonLinkTo}>
        <ChattingHeaderBackButtonWrapper>
          <BackButton onClick={backButtonOnClick} />
        </ChattingHeaderBackButtonWrapper>
      </Link>
      <ChattingHeaderText type="20B" ta="center" color="WHITE">
        {text}
      </ChattingHeaderText>
    </ChattingHeaderBackground>
  );
};

export default ChattingHeader;
