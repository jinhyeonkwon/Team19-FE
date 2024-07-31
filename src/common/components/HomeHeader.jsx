import React from 'react';

import styled from 'styled-components';
import { Logo } from './Logo';
import { MyPageButton } from './MyPageButton';

const HomeHeaderWrapper = styled.div`
  height: 65px;
  width: 100%;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.26);
  backdrop-filter: blur(12.100000381469727px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
`;

const LogoWithMargin = styled.div`
  margin-left: 24px;
  margin-top: auto;
  margin-bottom: 22px;
`;

const MyPageWithMargin = styled.div`
  margin-right: 24px;
  margin-top: auto;
  margin-bottom: 22px;
`;

export const HomeHeader = () => (
  <HomeHeaderWrapper>
    <LogoWithMargin>
      <Logo />
    </LogoWithMargin>
    <MyPageWithMargin>
      <MyPageButton goTo="/mypage" />
    </MyPageWithMargin>
  </HomeHeaderWrapper>
);
