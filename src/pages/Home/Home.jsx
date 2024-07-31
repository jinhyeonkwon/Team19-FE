import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HomeHeader } from '../../common/components/HomeHeader';
import { HomeSection } from '../../common/components/HomeSection';
import { HorizontalScrollableContainer } from '../../common/components/HorizontalScrollableContainer';
import { DictCard } from '../../common/components/DictCard';
import APIBase from '../../services/APIBase';
import { initModel } from '../../services/initModel';
import { getAllData } from '../../services/getAllData';
import { myData } from '../../services/myData';

import DiffContext from '../../DiffContext';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  height: 100%;
  background: #fff7ec;
`;

const ScrollableContainer = styled.div`
  width: 100%;
  height: 671px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: scroll;
  gap: 24px;
  align-items: center;
  padding-bottom: 24px;
  justify-content: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }
`;
// height: 원래 661px이었음

const HomeHeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 65px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const QuestionButton = styled.div`
  display: flex;
  width: 390px;
  height: 315px;
  flex-shrink: 0;
  border-radius: 0px 0px 27px 27px;
  background: linear-gradient(163deg, #c5b0ff 11.96%, #9c81ff 97.33%);
  padding: 0;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NoMarginLink = styled(Link)`
  margin: 0;
`;

const dummyObj = {
  data_00: {
    short_summary: '오이 냉채와 피자가 먹고 싶다는 얘기를 나눴어!',
    long_summary:
      '여름에 시원한 오이 냉채를 보고 피자를 먹고 싶어하는 재미있는 대화를 나눴어!',
    recommend_quetions_1: '어떤 피자를 제일 먼저 먹어보고 싶어?',
    recommend_quetions_2: '피자를 직접 만들어 볼까?',
    big_tag: ['음식', '놀이', '모험'],
    small_tag: ['오이', '냉채', '피자', '요리', '여름'],
  },
  data_01: {
    short_summary: '귀여운 고양이가 파란 눈으로 나를 바라보았다!',
    long_summary:
      '귀여운 파란 눈 고양이와 피자 이야기로 흥미진진한 대화가 펼쳐졌어!',
    recommend_quetions_1: '피자에 어떤 재료를 넣으면 제일 맛있을까?',
    recommend_quetions_2: '고양이 그림 그려볼까?',
    big_tag: ['동물', '음식', '놀이'],
    small_tag: ['고양이', '피자', '귀여움', '색깔', '그림'],
  },
  data_02: {
    short_summary: '이건 내가 그냥 만든 예시다!',
    long_summary:
      '19팀이 해커톤 대상을 받았다는 주제로 흥미진진한 대화가 펼쳐졌어!',
    recommend_quetions_1: '피자에 어떤 재료를 넣으면 제일 맛있을까?',
    recommend_quetions_2: '고양이 그림 그려볼까?',
    big_tag: ['놀이', '음식', '동물'],
    small_tag: ['그림', '고양이', '피자', '귀여움', '색깔'],
  },
};

const HorizontalScrollableContainerWithData = ({ dictObj }) => (
  <HorizontalScrollableContainer>
    {Object.entries(dictObj).map(([key, value]) => (
      <NoMarginLink key={key} to={`/dictionary?num=${key.split('data_')[1]}`}>
        <DictCard
          num={key.split('data_')[1]}
          imageSrc={APIBase + `/data/data_${key.split('data_')[1]}/test.jpg`}
          title={value.short_summary}
          time="8월 1일"
          bigTag={value.big_tag[0]}
          smallTag={value.small_tag[0]}
        />
      </NoMarginLink>
    ))}
  </HorizontalScrollableContainer>
);

export const Home = () => {
  const [dictData, setDictData] = useState(null);

  const { diff } = React.useContext(DiffContext);

  const [filterList, setFilterList] = useState(null);

  useEffect(() => {
    initModel(diff);
  }, [diff]);

  const getDictData = useCallback(async () => {
    try {
      const data = await getAllData();
      console.log('data 받음');
      console.log(data);
      const formattedData = {};
      Object.keys(data).forEach((key) => {
        formattedData[key] = data[key];
      });
      setDictData(formattedData);
    } catch (err) {
      console.error('Error getting dict data', err);
    }
  }, []);

  const getFilterList = useCallback(async () => {
    try {
      const myyData = await myData();
      console.log('my data 받음');
      console.log(myyData);
      setFilterList(myyData.tag);
    } catch (err) {
      console.log(err);
    }
  });

  useEffect(() => {
    getDictData();
  }, []);

  useEffect(() => {
    getFilterList();
  }, []);

  return (
    <HomeWrapper>
      <HomeHeaderWrapper>
        <HomeHeader />
      </HomeHeaderWrapper>
      <ScrollableContainer>
        <QuestionButton>
          <img
            src="/images/question_button_new_image.svg"
            alt="question_image"
          />
          <NoMarginLink to="/question">
            <img src="/images/question_button_new.svg" alt="question" />
          </NoMarginLink>
        </QuestionButton>
        <HomeSection
          title="최근에 한 질문 도감"
          subtitle="테마 별로 내가 질문한 사진을 확인해 봐!"
        >
          {dictData ? (
            <HorizontalScrollableContainerWithData dictObj={dictData} />
          ) : (
            <div>Loading...</div>
          )}
        </HomeSection>
        {filterList && filterList.length > 0 ? (
          filterList.map((tag) => {
            const filteredData = {};

            for (const key in dictData) {
              if (
                dictData[key].hasOwnProperty('big_tag') &&
                dictData[key].big_tag.includes(tag)
              ) {
                filteredData[key] = dictData[key];
              }
            }
            return (
              <HomeSection
                title={`${tag} 테마 질문 도감`}
                subtitle={`${tag} 테마로 질문한 사진을 확인해 봐!`}
              >
                <HorizontalScrollableContainerWithData dictObj={filteredData} />
              </HomeSection>
            );
          })
        ) : (
          <div></div>
        )}
      </ScrollableContainer>
    </HomeWrapper>
  );
};
