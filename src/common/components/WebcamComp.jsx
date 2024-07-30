import React, { useCallback } from 'react';

import styled from 'styled-components';

import Webcam from 'react-webcam';
import CaptureButtonWithBackground from './CaptureButtonWithText';

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

  return (
    <WebcamWrapper>
      <CaptureButtonWithBackground capture={capture} />
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
