import React, { useCallback, useState } from 'react';

import styled from 'styled-components';

import Webcam from 'react-webcam';
import StyledTypography from './StyledTypography';

const WebcamWrapper = styled.div`
  width: 100%;
  height: 50%;
`;

const StyledWebcam = styled(Webcam)`
  object-fit: cover;
`;

/* Capture Button 관련 */
const CaptureButtonWrapper = styled.button`
  position: relative;
  width: 124px;
  height: 124px;
  border-radius: 50%;
  z-index: 1;
`;

const CaptureButtonPurpleCircle = styled.div`
  position: absolute;
  top: ${({ isClicked }) => (isClicked ? '5px' : '0px')};
  left: 7px;
  right: 7px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: ${({ theme, isClicked }) =>
    isClicked ? theme.colors.PURPLE[900] : theme.colors.PURPLE[600]};
  z-index: 3;
`;

const CaptureButtonWhiteCircle = styled.div`
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

const CaptureButtonImg = styled.img`
  position: absolute;
  top: ${({ isClicked }) => (isClicked ? '19px' : '14px')};
  left: 21px;
  right: 21px;
  opacity: ${({ isClicked }) => (isClicked ? 0.6 : 1)};
  z-index: 4;
`;

const CaptureButton = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseDown = () => {
    setIsClicked(true);
  };

  const handleMouseUp = () => {
    setIsClicked(false);
  };

  return (
    <CaptureButtonWrapper
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <CaptureButtonPurpleCircle isClicked={isClicked} />
      <CaptureButtonWhiteCircle />
      <CaptureButtonImg
        isClicked={isClicked}
        src="/images/captureButtonImg.png"
        alt="Capture button"
      />
    </CaptureButtonWrapper>
  );
};

const CaptureButtonWithText = styled.div`
  display: flex;
  width: 124px;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  z-index: 7;
`;

const CaptureButtonText = styled(StyledTypography)`
  z-index: 10;
`;

const CaptureButtonBackground = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 249px;
  background: rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(12.100000381469727px);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WebcamTest = ({ setImageUrl }) => {
  const webcamRef = React.useRef(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageUrl(imageSrc);
  }, [webcamRef, setImageUrl]);

  return (
    <WebcamWrapper>
      <CaptureButtonBackground>
        <CaptureButtonWithText>
          <CaptureButton onClick={capture} />
          <CaptureButtonText type="24B" color="WHITE">
            사진 찍기
          </CaptureButtonText>
        </CaptureButtonWithText>
      </CaptureButtonBackground>
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
