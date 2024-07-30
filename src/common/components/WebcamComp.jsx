import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import Webcam from 'react-webcam';
import CaptureButtonWithBackground from './CaptureButtonWithText';

import { analyzeImage } from '../../services/analyzeImage';
import InfoBox from './FloatingInfobox';
import { APITest } from '../../services/test/APITest';

const WebcamWrapper = styled.div`
  width: 100%;
  height: 50%;
`;

const StyledWebcam = styled(Webcam)`
  object-fit: cover;
`;

const WebcamComp = ({ setImageUrl, setIsLoading, setStep, setAudioSrc }) => {
  const webcamRef = React.useRef(null);

  const [imgSrc, setImgSrc] = useState(null);

  // const [loading, setLoading] = useState(false);

  // const capture = useCallback(() => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   setImageUrl(imageSrc);
  // }, [webcamRef, setImageUrl]);

  // 테스트용 -------------------------------------------------------------------
  // const APITestWrapper = async () => {
  //   try {
  //     const response = await APITest();
  //     console.log(response.status);
  //     console.log(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const imageTestWrapper = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);

    if (imgSrc) {
      try {
        setIsLoading(true);
        console.log('로딩중..');
        const { response1, response2 } = await analyzeImage(imgSrc); // response2
        console.log('analyzed', response1.data);
        const audioBlob = response2.data;
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioSrc(audioUrl);
      } catch (err) {
        console.error('Error uploading file', err);
      } finally {
        setIsLoading(false);
        setStep((step) => step + 1);
      }
    }
  };

  const onButtonClick = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageUrl(imageSrc);
    imageTestWrapper();
  };
  // ---------------------------------------------------------------------------

  return (
    <WebcamWrapper>
      <CaptureButtonWithBackground onClick={onButtonClick} />
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

export default WebcamComp;
