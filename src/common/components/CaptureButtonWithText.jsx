import { useState } from 'react';

import styled from 'styled-components';
import StyledTypography from './StyledTypography';

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
  top: ${({ isclicked }) => (isclicked ? '5px' : '0px')};
  left: 7px;
  right: 7px;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: ${({ theme, isclicked }) =>
    isclicked ? theme.colors.PURPLE[900] : theme.colors.PURPLE[600]};
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
  top: ${({ isclicked }) => (isclicked ? '19px' : '14px')};
  left: 21px;
  right: 21px;
  opacity: ${({ isclicked }) => (isclicked ? 0.6 : 1)};
  z-index: 4;
`;
const CaptureButton = ({ onClick }) => {
  const [isclicked, setisclicked] = useState(false);

  const handleMouseDown = () => {
    setisclicked(true);
  };

  const handleMouseUp = () => {
    setisclicked(false);
  };

  return (
    <CaptureButtonWrapper
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onClick={onClick}
    >
      <CaptureButtonPurpleCircle isclicked={isclicked} />
      <CaptureButtonWhiteCircle />
      <CaptureButtonImg
        isclicked={isclicked}
        src="/images/captureButtonImg.png"
        alt="Capture button"
      />
    </CaptureButtonWrapper>
  );
};

const CaptureButtonWithText = styled.div`
  display: flex;
  position:
  top: 22px;
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
  height: 235px;
  background: rgba(0, 0, 0, 0.26);
  backdrop-filter: blur(12.100000381469727px);
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CaptureButtonWithBackground = ({ onClick }) => {
  return (
    <CaptureButtonBackground>
      <CaptureButtonWithText>
        <CaptureButton onClick={onClick} />
        <CaptureButtonText type="24B" color="WHITE">
          사진 찍기
        </CaptureButtonText>
      </CaptureButtonWithText>
    </CaptureButtonBackground>
  );
};

export default CaptureButtonWithBackground;
