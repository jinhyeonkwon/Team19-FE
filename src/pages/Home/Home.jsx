import React, { useEffect, useState, useCallback } from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { HomeHeader } from '../../common/components/HomeHeader';
import { HomeContent } from '../../common/components/HomeContent';
import { HorizontalScrollableContainer } from '../../common/components/HorizontalScrollableContainer';
import { DictCard } from '../../common/components/DictCard';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  height: 100%;
`; // 24px는 임의의 값

const ScrollableContainer = styled.div`
  width: 100%;
  height: 685px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: scroll;
  gap: 24px;
  align-items: center;
  justify-content: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }
`; // 24px는 임의의 값

const HomeHeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 65px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const HeaderAndQuestionButton = styled.div`
  width: 390px;
  height: 365px;
  flex-shrink: 0;
  border-radius: 0px 0px 27px 27px;
  background: linear-gradient(163deg, #c5b0ff 11.96%, #9c81ff 97.33%);
`;

export const Home = () => (
  <HomeWrapper>
    <HeaderAndQuestionButton>
      <HomeHeaderWrapper>
        <HomeHeader />
      </HomeHeaderWrapper>
    </HeaderAndQuestionButton>
    <ScrollableContainer>
      <HomeContent
        title="모야놀이 시작하기"
        subtitle="모야Q에게 궁금한 것을 물어보자"
      >
        <Link to="/question">
          <img src="/images/question_start_button.svg" alt="question" />
        </Link>
      </HomeContent>
      <HomeContent
        title="최근에 한 질문 도감"
        subtitle="테마 별로 내가 질문한 사진을 확인해 봐!"
      >
        <HorizontalScrollableContainer>
          <DictCard
            imageSrc="../../../images/captureButtonImg.svg"
            title="예시1"
          />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
        </HorizontalScrollableContainer>
      </HomeContent>
      <HomeContent
        title="최근에 한 질문 도감"
        subtitle="테마 별로 내가 질문한 사진을 확인해 봐!"
      >
        <HorizontalScrollableContainer>
          <DictCard
            imageSrc="../../../images/captureButtonImg.svg"
            title="예시1"
          />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
        </HorizontalScrollableContainer>
      </HomeContent>
      <HomeContent
        title="최근에 한 질문 도감"
        subtitle="테마 별로 내가 질문한 사진을 확인해 봐!"
      >
        <HorizontalScrollableContainer>
          <DictCard
            imageSrc="../../../images/captureButtonImg.svg"
            title="예시1"
          />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
          <DictCard imageSrc="/images/captureButtonImg.png" title="예시1" />
        </HorizontalScrollableContainer>
      </HomeContent>
    </ScrollableContainer>
  </HomeWrapper>
);
