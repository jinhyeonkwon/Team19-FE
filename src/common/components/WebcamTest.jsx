import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Webcam from 'react-webcam';

const WebcamWrapper = styled.div`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

const StyledWebcam = styled(Webcam)`
  object-fit: cover;
`;

const WebcamTest = () => {
  const webcamTestRef = React.useRef(null);

  return (
    <WebcamWrapper>
      <StyledWebcam
        width="390px"
        height="844px"
        audio={false}
        ref={webcamTestRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode: 'user' }}
      />
    </WebcamWrapper>
  );
};

export default WebcamTest;
