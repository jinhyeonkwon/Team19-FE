import styled from 'styled-components';

import ChattingHeader from '../../common/components/ChattingHeader';
import { useSearchParams } from 'react-router-dom';
import { RoundBox } from '../../common/components/RoundBox';
import StyledTypography from '../../common/components/StyledTypography';
import APIBase from '../../services/APIBase';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-wrap: nowrap;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 67px;
  z-index: 2;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: flex-end;
  flex-grow: 1;
  margin-bottom: 52px;
  z-index: 2;
`;

const RoundBoxContainer = styled.div`
  margin-left: 24px;
  margin-right: 24px;
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  z-index: 2;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 4px;
  z-index: 2;
`;

const RecommendedQuestion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 12px;
  z-index: 2;
`;

const RecommendedQuestionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 0px;
  z-index: 2;
`;

const RecommendQuestionHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0px;
  z-index: 2;
`;

const RecommendedQuestionList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 4px;
  z-index: 2;
`;

const QuestionRoundBox = styled.div`
  display: flex;
  width: 232px;
  height: 48px;
  padding: 12px 19px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 7px;
  background: ${({ theme }) => theme.colors.YELLOW[500]};
  z-index: 2;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const WithoutImage = styled.div`
  position: absoulte;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const Dict = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const num = searchParams.get('num');
  const dummyTitle = '오므라이스가 뭐야?';
  const dummyQuestions = ['질문 1번이야.', '질문 2번이야.'];

  return (
    <Container>
      <BackgroundImage src={`${APIBase}/data/data_${num}/test.jpg`} />
      <HeaderWrapper>
        <ChattingHeader text={num} backButtonLinkTo={'/'} />
      </HeaderWrapper>
      <ContentsWrapper>
        <RoundBoxContainer>
          <RoundBox color="WHITE">
            <RecommendedQuestion>
              <RecommendQuestionHeader>
                <RecommendedQuestionTextWrapper></RecommendedQuestionTextWrapper>
                <img src="/images/mini_moya.svg" alt="mini moya" />
              </RecommendQuestionHeader>
              <RecommendedQuestionList>
                <QuestionRoundBox>
                  <StyledTypography color="WHITE" type="16B" ta="center">
                    {`Q. ${dummyQuestions[0]}`}
                  </StyledTypography>
                </QuestionRoundBox>
                <QuestionRoundBox>
                  <StyledTypography color="WHITE" type="16B" ta="center">
                    {`Q. ${dummyQuestions[1]}`}
                  </StyledTypography>
                </QuestionRoundBox>
              </RecommendedQuestionList>
            </RecommendedQuestion>
          </RoundBox>
          <RoundBox color="WHITE">
            <Summary>
              <StyledTypography color="GRAY 800" type="16R" ta="left">
                대화 요약
              </StyledTypography>
              <StyledTypography color="GRAY 1000" type="16R" ta="left">
                {dummyTitle}
              </StyledTypography>
            </Summary>
          </RoundBox>
        </RoundBoxContainer>
      </ContentsWrapper>
    </Container>
  );
};
