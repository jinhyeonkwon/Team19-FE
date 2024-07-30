import React, { useEffect, useState, useCallback } from 'react';

import WebcamComp from '../../common/components/WebcamComp';
import QuestionHeader from '../../common/components/QuestionHeader';
import { InfoBox } from '../../common/components/FloatingInfobox';

import styled from 'styled-components';
import { LoadingModal } from '../../common/components/LoadingModal';
import QuestionButtonWithBackground from '../../common/components/QuestionButtonWithText';
import ChattingHeader from '../../common/components/ChattingHeader';
import { ChattingMessage } from '../../common/components/ChattingMessage';
import { ReactMic } from 'react-mic';
import {
  analyzeAudio,
  analyzeAudioAndSave,
  audioTest,
  audioTestAndSave,
  uploadAudio,
} from '../../services/analyzeAudio';

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
  padding: 8px 0px;
`;

const QuestionButtonWrapper = styled.div`
  height: 235px;
  flex-shrink: 0;
`;

const ChattingHeaderWrapper = styled.div`
  height: 67px;
  flex-shrink: 0;
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
  const [step, setStep] = useState(0); // 0 : 촬영, 1 : 채팅
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [chattingTitle, setChattingTitle] = useState('모야Q 채팅하기');

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  const startRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        setIsRecording(true);
      })
      .catch((err) => {
        console.error('The following error occurred: ' + err);
      });
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    setAudioBlob(recordedBlob);
    uploadAudio();
  };

  const uploadAudio = async () => {
    if (audioBlob) {
      try {
        const formData = new FormData();
        formData.append('file', audioBlob.blob, 'recording.wav');

        const response = await audioTestAndSave(formData);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error uploading audio file', error);
      }
    }
  };

  const handleQuestionButtonClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

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
          </ChattingArea>
          <CapturedImageWrapper>
            <CapturedImage src={imageUrl} alt="captured image" />
          </CapturedImageWrapper>
          <QuestionButtonWrapper>
            <QuestionButtonWithBackground onClick={handleQuestionButtonClick} />
          </QuestionButtonWrapper>
          <ReactMic
            record={isRecording}
            className="sound-wave"
            onStop={onStop}
            onData={onData}
            strokeColor="#000000"
            backgroundColor="#FF4081"
          />
        </ChattingStepWrapper>
      )}
    </div>
  );
};

export default CaptureQ;
