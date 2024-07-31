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
import VoiceRecorder from '../../common/components/VoiceRecorder';

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
  height: 797px;
  width: 390px;
`;

const CapturedImage = styled.img`
  object-fit: cover;
  z-index: 1;
`;

const ChattingStepWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 797px;
  width: 390px;
`;

const ChattingArea = styled.div`
  flex: 1;
  opacity: 0.8;
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

const VoiceRecorderWrapper = styled(VoiceRecorder)`
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

const RealChatList = ({ chatList }) => (
  <ChatList>
    {chatList.map(({ id, text, isMine }) => (
      <ChattingMessage key={id} text={text} isMine={isMine} />
    ))}
  </ChatList>
);

const CaptureQ = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const [audioSrc, setAudioSrc] = useState(null);

  const [step, setStep] = useState(0);
  // 0 : 촬영, 1 : 채팅

  const [isLoading, setIsLoading] = useState(false);

  const [chattingTitle, setChattingTitle] = useState('모야Q 채팅하기');

  const [toRender, setToRender] = useState(false);

  const addChat = ({ text, isMine }) => {
    // 응답 받으면 수행할 것
    console.log('채팅 메시지 추가');
    chatQueue.push({
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
    const status = await finishMessages();
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
          <ChattingHeaderWrapper>
            <ChattingHeader
              text={chattingTitle}
              backButtonOnClick={questionBackButtonClick}
            />
          </ChattingHeaderWrapper>
          <ChattingArea>
            <RealChatList chatList={chatQueue} />
            <VoiceRecorderWrapper setAudioSrc={setAudioSrc} addChat={addChat} />
          </ChattingArea>
          <CapturedImageWrapper>
            <CapturedImage src={imageUrl} alt="captured image" />
          </CapturedImageWrapper>
          <QuestionButtonWrapper>
            <QuestionButtonWithBackground />
          </QuestionButtonWrapper>
        </ChattingStepWrapper>
      )}
    </div>
  );
};

export default CaptureQ;