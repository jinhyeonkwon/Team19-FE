import React from 'react';

import styled from 'styled-components';

import StyledTypography from './StyledTypography';

const RoundedBox = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 342px;
  height: 111px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 27px;
  background: ${({ theme }) => theme.colors.YELLOW[600]};
`;

const Title = styled(StyledTypography)`
  color: var(--Purple-100, #f5eafa);
  align-self: stretch;
  color: var(--Gray-0W, #fff);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
  letter-spacing: -0.28px;
`;

const Contents = styled(StyledTypography)`
  align-self: stretch;
  color: var(--Gray-0W, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
  letter-spacing: -0.48px;
`;

const InfoBoxWrapper = styled.div`
  display: relative;
  flex-direction: column;
  align-items: center;
  backfround: transparent;
  position: relative;
`;

export const InfoBox = ({ title, contents }) => (
  <InfoBoxWrapper>
    <img src="/images/moya_in_infoBox.svg" alt="moya character in info box" />
    <RoundedBox>
      <Title type="14B">{title}</Title>
      <Contents type="24B">{contents}</Contents>
    </RoundedBox>
  </InfoBoxWrapper>
);
