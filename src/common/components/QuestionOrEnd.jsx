import React, { useState } from 'react';
import RecordRTC, { StereoAudioRecorder } from 'recordrtc';
import axiosInstance from '../../services/axiosInstance.js';
import APIBase from '../../services/APIBase.js';

// ------------------------------------------

import styled from 'styled-components';
import StyledTypography from './StyledTypography.jsx';

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
  background: ${({ theme, isclicked, isRecording }) =>
    isclicked
      ? isRecording
        ? theme.colors.YELLOW[800]
        : theme.colors.YELLOW[600]
      : isRecording
      ? theme.colors.YELLOW[600]
      : theme.colors.YELLOW[400]};
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
  opacity: ${({ isRecording }) => (isRecording ? 0.6 : 1)};
  z-index: 4;
`;
const QuestionButton = ({ onClick, src, isRecording }) => {
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
        isRecording={isRecording}
        src={src}
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

const QuestionOrSendButtonWithBackground = ({
  setAudioSrc,
  addChat,
  setIsGenerating,
}) => {
  const [audioRecorder, setAudioRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const start = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = RecordRTC(stream, {
          type: 'audio',
          mimeType: 'audio/wav',
          recorderType: StereoAudioRecorder,
          numberOfAudioChannels: 1,
          desiredSampRate: 16000,
          bufferSize: 16384,
        });

        recorder.startRecording();
        setAudioRecorder(recorder);
      })
      .then(() => {
        setIsRecording(true);
      })
      .catch((error) => {
        console.error('getUserMedia error:', error);
      });
  };

  const recordStop = async () => {
    if (audioRecorder) {
      setIsRecording(false);
      audioRecorder.stopRecording(async () => {
        const audioBlob = audioRecorder.getBlob();

        // Blob을 서버로 전송
        const formData = new FormData();
        formData.append('file', audioBlob, 'example.wav');

        try {
          const response1_raw = await fetch(
            APIBase + '/analyze_voice_and_return_response_and_audio',
            {
              method: 'POST',
              body: formData,
            }
          );
          const response1_data = await response1_raw.json();
          console.log('response1:', response1_data);

          addChat({ text: response1_data.user_input_data, isMine: true });

          const response2 = await axiosInstance.get('/get_audio_data', {
            responseType: 'blob',
          });

          // alert(response1_data.generate_image_TF);
          if (response1_data.generate_image_TF) {
            setIsGenerating(true);
          }

          console.log('3번째 요청 시작!');
          const response3 = await axiosInstance.get(
            '/get_generated_image_data',
            {
              responseType: 'json',
            }
          );

          const response3_data = response3.data;

          console.log('response3_data:', response3_data);
          const path = response3_data.generated_image_path;
          addChat({
            text: response1_data.response_data,
            isMine: false,
            imagePath: path !== 'nono' ? APIBase + path : null,
          });
          if (response1_data.generate_image_TF) {
            setIsGenerating(false);
          }

          console.log('Success:', response2);
          const responseAudioBlob = response2.data;
          const responseAudioUrl = URL.createObjectURL(responseAudioBlob);

          setAudioSrc(responseAudioUrl);
        } catch (error) {
          console.error('Error:', error);
        }
      });
    }
  };

  return (
    <QuestionButtonBackground>
      {isRecording ? (
        <QuestionButtonWithText>
          <QuestionButton
            onClick={recordStop}
            src="/images/send_button_symbol.svg"
            isRecording={true}
          />
          <QuestionButtonText type="24B" color="WHITE">
            전송하기
          </QuestionButtonText>
        </QuestionButtonWithText>
      ) : (
        <QuestionButtonWithText>
          <QuestionButton
            onClick={start}
            src="/images/question_button_symbol.svg"
            isRecording={false}
          />
          <QuestionButtonText type="24B" color="WHITE">
            질문하기
          </QuestionButtonText>
        </QuestionButtonWithText>
      )}
    </QuestionButtonBackground>
  );
};

export default QuestionOrSendButtonWithBackground;
