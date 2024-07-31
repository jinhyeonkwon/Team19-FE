import React, { useContext } from 'react';

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

const AdjustDifficulty = styled.div`
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

export const MyPage = () => {
  const { diff, setDiff } = useContext(DiffContext);
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
              <img src="images/dummy_child_profile.svg" alt="child_profile" />
            </WhiteBox>
          </ChildProfile>
          <AdjustDifficulty>
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
          </AdjustDifficulty>
        </ScrollableContainer>
      </ContentsWrapper>
    </Container>
  );
};
