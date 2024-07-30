import React, { useEffect, useState, useRef } from 'react';
import RecordRTC, { StereoAudioRecorder } from 'recordrtc';

import WebcamComp from '../../common/components/WebcamComp';
import QuestionHeader from '../../common/components/QuestionHeader';
import { InfoBox } from '../../common/components/FloatingInfobox';

import styled from 'styled-components';
import { LoadingModal } from '../../common/components/LoadingModal';
import QuestionButtonWithBackground from '../../common/components/QuestionButtonWithText';
import ChattingHeader from '../../common/components/ChattingHeader';
import { ChattingMessage } from '../../common/components/ChattingMessage';

import { audioTestAndSave } from '../../services/analyzeAudio';

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

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  useEffect(() => {
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.play();
    }
  }, [audioSrc]);

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
          <QuestionHeader text="모야Q 질문하기" />
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
            />
          </FunctionWrapper>
        </div>
      ) : (
        <ChattingStepWrapper>
          <ChattingHeaderWrapper>
            <ChattingHeader text={chattingTitle} />
          </ChattingHeaderWrapper>
          <ChattingArea>
            <RealChatList chatList={dummyChat} />
            <VoiceRecorderWrapper setAudioSrc={setAudioSrc} />
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
