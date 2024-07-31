import React, { useContext, useState } from 'react';

import styled from 'styled-components';
import ChattingHeader from '../../common/components/ChattingHeader';
import StyledTypography from '../../common/components/StyledTypography';

import { SetDifficulty } from '../../common/components/SetDifficulty';

import DiffContext from '../../DiffContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
  background-color: ${({ theme }) => theme.colors.YELLOW[100]};
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 67px;
  z-index: 2;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  margin-bottom: 52px;
  z-index: 2;
`;

const ScrollableContainer = styled.div`
  width: 342px;
  height: 661px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: scroll;
  gap: 36px;
  align-items: center;
  padding-bottom: 24px;
  justify-content: flex-start;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChildProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
`;

const WhiteBoxWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 342px;
  padding: ${({ padding }) => padding}px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  border-radius: 27px;
  background: ${({ theme }) => theme.colors.WHITE};
`;

const WhiteBox = ({ padding, children }) => {
  return (
    <WhiteBoxWrapper padding={padding ? padding : 24}>
      {children}
    </WhiteBoxWrapper>
  );
};

const Dummy = styled.div`
  width: 100%;
  height: ${({ height }) => height}px;
`;

const OneSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const TwoTitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
`;

const DifficultyInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const CurrentDifficultyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  align-items: center;
  justify-content: center;
`;

const MonthsWrapper = styled.div`
  display: flex;
  height: 24px;
  padding: 3px 15px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 13px;
  background: ${({ theme }) => theme.colors.PURPLE[100]};
`;
const Months = ({ diff }) => {
  return (
    <MonthsWrapper>
      <StyledTypography color="PURPLE 600" type="12SB" ta="center">
        {diff === 0 ? '만 2-4세' : diff === 1 ? '만 4-7세' : '만 7세 이상'}
      </StyledTypography>
    </MonthsWrapper>
  );
};

const CurrentDifficulty = ({ diff }) => {
  return (
    <CurrentDifficultyWrapper>
      <StyledTypography color="PURPLE 600" type="20SB" ta="left">
        {diff === 0 ? '씨앗 단계' : diff === 1 ? '새싹 단계' : '열매 단계'}
      </StyledTypography>
      <Months diff={diff} />
    </CurrentDifficultyWrapper>
  );
};

const TwoTitle = ({ title1, title2 }) => (
  <TwoTitlesWrapper>
    <StyledTypography color="BLACK" type="24SB" ta="left">
      {title1}
    </StyledTypography>
    <StyledTypography color="BLACK" type="16R" ta="left">
      {title2}
    </StyledTypography>
  </TwoTitlesWrapper>
);

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SmallTagWrapper = styled.div`
  display: flex;
  height: 26px;
  padding: 4px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 23px;
  background: ${({ theme }) => theme.colors.PURPLE[100]};
`;

const SmallTag = ({ text }) => {
  return (
    <SmallTagWrapper>
      <StyledTypography color="PURPLE 600" type="12B" ta="center">
        {text}
      </StyledTypography>
    </SmallTagWrapper>
  );
};

const dummySmallTags = [
  '오므라이스',
  '볶음밥',
  '계란',
  '식사',
  '과일',
  '파인애플',
  '매실',
];

const dummyBigTag = '요리';
const dummyCnt = 4;

const dummyTodayQuestion = '가장 만들어보고 싶은 요리가 뭐야?';

const SmallTagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px 7px;
`;

const TagsTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  width: 100%;
`;

const TagsTitle = ({ bigTag, cnt }) => {
  return (
    <TagsTitleWrapper>
      <StyledTypography color="GRAY 800" type="20SB" ta="left">
        {bigTag}
      </StyledTypography>
      <StyledTypography color="PURPLE 600" type="20SB" ta="left">
        {`총 ${cnt}회`}
      </StyledTypography>
    </TagsTitleWrapper>
  );
};

const SmallTags = ({ smallTagList }) => {
  return (
    <SmallTagsWrapper>
      {smallTagList.map((tag, index) => (
        <SmallTag key={index} text={tag} />
      ))}
    </SmallTagsWrapper>
  );
};

const TagsInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  height: 100%:
`;

const TodayQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

const TodayQuestion = ({ question }) => {
  return (
    <TodayQuestionWrapper>
      <StyledTypography color="PURPLE 600" type="16SB" ta="left">
        오늘의 질문
      </StyledTypography>
      <StyledTypography color="GRAY 800" type="20SB" ta="left">
        {question}
      </StyledTypography>
    </TodayQuestionWrapper>
  );
};

const AlertWhiteBox = styled(WhiteBox)`
  padding: 24px 32px;
`;

const AlertInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
`;

// 일단 dummy 기능이라 toggle 여부 전역 상태 관리 안 함
const AlertText = () => {
  return (
    <StyledTypography color="BLACK" type="20R" ta="left">
      매일 추천 질문 알림 받기
    </StyledTypography>
  );
};

export const MyPage = () => {
  const { diff, setDiff } = useContext(DiffContext);
  const [toggle, setToggle] = useState(false);
  return (
    <Container>
      <HeaderWrapper>
        <HeaderWrapper>
          <ChattingHeader text="보호자 페이지" backButtonLinkTo={'/'} />
        </HeaderWrapper>
      </HeaderWrapper>
      <ContentsWrapper>
        <ScrollableContainer>
          <Dummy />
          <ChildProfile>
            <StyledTypography color="BLACK" type="24SB" ta="left">
              아이 프로필
            </StyledTypography>
            <WhiteBox>
              <img src="/images/dummy_child_profile.svg" alt="child_profile" />
            </WhiteBox>
          </ChildProfile>
          <OneSection>
            <TwoTitle
              title1="모야Q 언어 난이도"
              title2="발달단계에 따라 챗봇의 언어 표현 수준을 설정해요."
            />
            <WhiteBox padding={32}>
              <DifficultyInner>
                <CurrentDifficulty diff={diff} />
                <SetDifficulty />
              </DifficultyInner>
            </WhiteBox>
          </OneSection>
          <OneSection>
            <TwoTitle
              title1="아이의 학습 리포트"
              title2="아이의 학습 리포트를 확인해보세요."
            />
            <WhiteBox padding={32}>
              <ImgWrapper>
                <img src="/images/dummy_graph.svg" alt="report" />
              </ImgWrapper>
            </WhiteBox>
            <WhiteBox padding={32}>
              <TagsInner>
                <TagsTitle bigTag={`${dummyBigTag} 태그`} cnt={dummyCnt} />
                <SmallTags smallTagList={dummySmallTags} />
              </TagsInner>
            </WhiteBox>
          </OneSection>
          <OneSection>
            <TwoTitle
              title1="오늘의 추천 질문"
              title2="아이와 더 가까워질 수 있는 질문을 추천드릴게요."
            />
            <WhiteBox padding={32}>
              <TodayQuestion question={dummyTodayQuestion} />
            </WhiteBox>
            <AlertWhiteBox>
              <AlertInner>
                <AlertText />
                <img
                  src={
                    toggle ? '/images/toggle_on.svg' : '/images/toggle_off.svg'
                  }
                  alt="toggle"
                  onClick={() => setToggle(!toggle)}
                />
              </AlertInner>
            </AlertWhiteBox>
          </OneSection>
        </ScrollableContainer>
      </ContentsWrapper>
    </Container>
  );
};
