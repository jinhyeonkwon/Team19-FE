import React, { useEffect, useState, useCallback } from 'react';
import RecordRTC, { StereoAudioRecorder } from 'recordrtc';
import Queue from 'queue';

import WebcamComp from '../../common/components/WebcamComp';
import QuestionHeader from '../../common/components/QuestionHeader';
import { InfoBox } from '../../common/components/FloatingInfobox';

import styled from 'styled-components';
import { LoadingModal } from '../../common/components/LoadingModal';
import QuestionButtonWithBackground from '../../common/components/QuestionButtonWithText';
import ChattingHeader from '../../common/components/ChattingHeader';
import { ChattingMessage } from '../../common/components/ChattingMessage';

import { finishMessages } from '../../services/finishMessages';

import APIBase from '../../services/APIBase';
import QuestionOrSendButtonWithBackground from '../../common/components/QuestionOrEnd';

const InfoBoxWrapper = styled.div`
  position: absolute;
  top: 82px;
  left: 50%;
  transform: translateX(-50%);
`;

const FunctionWrapper = styled.div`
  padding: 0;
  display: ${({ isLoading }) => (isLoading ? 'none' : 'flex')};
`;

const CapturedImageWrapper = styled.div`
  position: absolute;
  height: 807px;
  width: 390px;
`;
// height: 원래 797px이었음

const CapturedImage = styled.img`
  object-fit: cover;
  height: 100%;
  z-index: 1;
`;

const ChattingStepWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 807px;
  width: 390px;
`;
// height: 원래 797px이었음

const ChattingArea = styled.div`
  flex: 1;
  opacity: 1;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 12px 0px;
`;

const QuestionButtonWrapper = styled.div`
  height: 235px;
  flex-shrink: 0;
`;

const ChattingHeaderWrapper = styled.div`
  height: 67px;
  flex-shrink: 0;
`;

const QuestionOrSendButtonWithBackgroundWrapper = styled(
  QuestionOrSendButtonWithBackground
)`
  z-index: 10;
`;

const dummyChat = [
  {
    id: 0,
    text: '안녕하세요! 모야Q입니다. 긴 메시지가 나오면 과연 제대로 줄이 바뀔까요?',
    isMine: false,
  },
  { id: 1, text: '오호 그렇군요!', isMine: true },
];

const chatQueue = [];

const ChatList = styled.div`
  width: 352px;
  padding: 0px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ImgWrapper = styled.img`
  max-width: 225px;
`;

const RealChatList = ({ chatList }) => (
  <ChatList>
    {chatList.slice(-3).map(({ id, text, isMine, imagePath }) => (
      <React.Fragment key={id}>
        {imagePath ? (
          <ChattingMessage
            text={<ImgWrapper src={imagePath} alt="chat image" />}
            isMine={isMine}
            imgExist={true}
          />
        ) : (
          <ChattingMessage text={text} isMine={isMine} imgExist={false} />
        )}
      </React.Fragment>
    ))}
  </ChatList>
);

const ScrollableContainer = styled.div`
  width: 100%;
  height: 436px;
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
// height: 원래 426px이었음

const CaptureSquare = styled.img`
  position: absolute;
  top: 286px;
  left: 50%;
  transform: translateX(-50%);
`;

const CaptureQ = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const [audioSrc, setAudioSrc] = useState(null);

  const [step, setStep] = useState(0);
  // 0 : 촬영, 1 : 채팅

  const [isLoading, setIsLoading] = useState(false);

  const [chattingTitle, setChattingTitle] = useState('모야Q 채팅하기');

  const [toRender, setToRender] = useState(false);

  const addChat = ({ text, isMine, imagePath }) => {
    // 응답 받으면 수행할 것
    console.log('채팅 메시지 추가');
    if (imagePath) {
      chatQueue.push({
        id: chatQueue.length,
        text: '',
        isMine: isMine,
        imagePath: imagePath,
      });
    }
    chatQueue.push({
      id: chatQueue.length,
      text: text,
      isMine: isMine,
    });
    console.log(chatQueue);
    setToRender(!toRender);
  };

  useEffect(() => {
    //console.log(imageUrl);
  }, [imageUrl]);

  useEffect(() => {
    if (audioSrc) {
      console.log(audioSrc);
      const audio = new Audio(audioSrc);
      audio.play();
    }
  }, [audioSrc]);

  const clearChats = () => {
    chatQueue.length = 0;
  };

  const questionBackButtonClick = useCallback(async () => {
    setIsLoading(true);
    const status = await finishMessages();
    setIsLoading(false);
    if (status === 200) {
      setStep(0);
      setImageUrl(null);
      setAudioSrc(null);
      setIsLoading(false);
      setChattingTitle('모야Q 채팅하기');
    }
  }, [setStep, setImageUrl, setAudioSrc, setIsLoading, setChattingTitle]);

  return (
    <div>
      {step === 0 ? (
        <div>
          <CaptureSquare
            src="/images/capture_square.svg"
            alt="capture square"
          />
          w
          {isLoading && (
            <LoadingModal
              first="이미지 분석 중..."
              second="모야가 살펴보고 있어!"
            />
          )}
          {isLoading && (
            <CapturedImageWrapper>
              <CapturedImage src={imageUrl} alt="captured image" />
            </CapturedImageWrapper>
          )}
          <QuestionHeader text="모야Q 질문하기" backTo="/" />
          <FunctionWrapper isLoading={isLoading}>
            <InfoBoxWrapper>
              <InfoBox
                title="카메라 인식하기"
                contents="궁금한 것을 모야에게 보여줘!"
              />
            </InfoBoxWrapper>
            <WebcamComp
              setImageUrl={setImageUrl}
              setIsLoading={setIsLoading}
              setStep={setStep}
              setAudioSrc={setAudioSrc}
              setChattingTitle={setChattingTitle}
              addChat={addChat}
              clearChats={clearChats}
            />
          </FunctionWrapper>
        </div>
      ) : (
        <ChattingStepWrapper>
          {isLoading && (
            <LoadingModal
              first="대화 마무리 중..."
              second="모야가 대화 내용을 정리하고 있어!"
            />
          )}
          <ChattingHeaderWrapper>
            <ChattingHeader
              text={chattingTitle}
              backButtonOnClick={questionBackButtonClick}
            />
          </ChattingHeaderWrapper>
          <ScrollableContainer>
            <ChattingArea>
              <RealChatList chatList={chatQueue} />
            </ChattingArea>
          </ScrollableContainer>
          <CapturedImageWrapper>
            <CapturedImage src={imageUrl} alt="captured image" />
          </CapturedImageWrapper>
          <QuestionButtonWrapper>
            <QuestionOrSendButtonWithBackgroundWrapper
              setAudioSrc={setAudioSrc}
              addChat={addChat}
            />
          </QuestionButtonWrapper>
        </ChattingStepWrapper>
      )}
    </div>
  );
};

export default CaptureQ;
