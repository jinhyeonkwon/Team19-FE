import React from 'react';

import styled from 'styled-components';
import StyledTypography from './StyledTypography';

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
`;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 342px;
  height: 409px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 27px;
  background: ${({ theme }) => theme.colors.WHITE};
`;

const ModalTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

const ModalInnerWrapper = styled.div`
  display: flex;
  width: 225px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const LoadingModal = ({ first, second }) => (
  <ModalBackground>
    <ModalBox>
      <ModalInnerWrapper>
        <img src="/images/moya_with_question.svg" alt="loading" />
        <ModalTexts>
          <StyledTypography type="20R" ta="center" color="BLACK">
            {first}
          </StyledTypography>
          <StyledTypography type="24B" ta="center" color="BLACK">
            {second}
          </StyledTypography>
        </ModalTexts>
      </ModalInnerWrapper>
    </ModalBox>
  </ModalBackground>
);
