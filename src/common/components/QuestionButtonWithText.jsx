import { useState } from 'react';

import styled from 'styled-components';
import StyledTypography from './StyledTypography';

/* Question Button 관련 */
const QuestionButtonWrapper = styled.button`
  position: relative;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  z-index: 1;
`;
const QuestionButtonPurpleCircle = styled.div`
  position: absolute;
  top: ${({ isclicked }) => (isclicked ? '5px' : '0px')};
  left: 7px;
  right: 7px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: ${({ theme, isclicked }) =>
    isclicked ? theme.colors.YELLOW[600] : theme.colors.YELLOW[400]};
  z-index: 3;
`;
const QuestionButtonWhiteCircle = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.WHITE};
  z-index: 2;
`;
const QuestionButtonImg = styled.img`
  position: absolute;
  top: ${({ isclicked }) => (isclicked ? '19px' : '14px')};
  left: 21px;
  right: 21px;
  opacity: ${({ isclicked }) => (isclicked ? 0.6 : 1)};
  z-index: 4;
`;
const QuestionButton = ({ onClick, isRecording, setIsRecording }) => {
  const [isclicked, setisclicked] = useState(false);

  const handleMouseDown = () => {
    setisclicked(true);
  };

  const handleMouseUp = () => {
    setisclicked(false);
  };

  return (
    <QuestionButtonWrapper
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onClick={onClick}
    >
      <QuestionButtonPurpleCircle
        isclicked={isclicked}
        isRecording={isRecording}
      />
      <QuestionButtonWhiteCircle />
      <QuestionButtonImg
        isclicked={isclicked}
        src="/images/question_button_symbol.svg"
        alt="Question button"
      />
    </QuestionButtonWrapper>
  );
};

const QuestionButtonWithText = styled.div`
  display: flex;
  position:
  top: 22px;
  width: 124px;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  z-index: 7;
`;

const QuestionButtonText = styled(StyledTypography)`
  z-index: 10;
`;

const QuestionButtonBackground = styled.div`
  flex: 0;
  width: 100%;
  height: 235px;
  background: rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(12.100000381469727px);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
`;

const QuestionButtonWithBackground = ({ onClick }) => {
  const [isRecording, setIsRecording] = useState(false);
  return (
    <QuestionButtonBackground>
      <QuestionButtonWithText>
        <QuestionButton
          onClick={onClick}
          isRecording={isRecording}
          setIsRecording={setIsRecording}
        />
        <QuestionButtonText type="24B" color="WHITE">
          질문하기
        </QuestionButtonText>
      </QuestionButtonWithText>
    </QuestionButtonBackground>
  );
};

export default QuestionButtonWithBackground;
