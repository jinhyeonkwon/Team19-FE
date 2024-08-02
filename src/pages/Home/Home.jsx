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
  }, []);

  useEffect(() => {
    getDictData();
  }, [getDictData]);

  useEffect(() => {
    getFilterList();
  }, [getFilterList]);

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
