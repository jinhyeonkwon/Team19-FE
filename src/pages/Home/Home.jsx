import React, { useEffect, useState, useCallback } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HomeHeader } from '../../common/components/HomeHeader';
import { HomeContent } from '../../common/components/HomeContent';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`; // 24px는 임의의 값

const ScrollableContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: scroll;
  gap: 24px;
  align-items: center;
  justify-content: center;
`; // 24px는 임의의 값

export const Home = () => (
  <HomeWrapper>
    <HomeHeader />
    <ScrollableContainer>
      <HomeContent
        title="모야놀이 시작하기"
        subtitle="모야Q에게 궁금한 것을 물어보자"
      >
        <Link to="/question">
          <img src="/images/question_start_button.svg" alt="question" />
        </Link>
      </HomeContent>
    </ScrollableContainer>
  </HomeWrapper>
);
