import React, { useCallback } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import Webcam from 'react-webcam';
import CaptureButtonWithBackground from './CaptureButtonWithText';
import APIBase from '../../services/APIBase';

import APITest from '../../services/APITest';

const WebcamWrapper = styled.div`
  width: 100%;
  height: 50%;
`;

const StyledWebcam = styled(Webcam)`
  object-fit: cover;
`;

const WebcamTest = ({ setImageUrl }) => {
  const webcamRef = React.useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageUrl(imageSrc);
  }, [webcamRef, setImageUrl]);

  // 테스트용
  const APITestWrapper = async () => {
    try {
      const response = await APITest();
      console.log(response.status);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WebcamWrapper>
      <CaptureButtonWithBackground capture={APITestWrapper} />
      <StyledWebcam
        width="390px"
        height="797px"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode: 'user' }}
      />
    </WebcamWrapper>
  );
};

export default WebcamTest;
