import React, { useState } from 'react';

import styled from 'styled-components';

import Webcam from 'react-webcam';
import CaptureButtonWithBackground from './CaptureButtonWithText';

import { analyzeImage } from '../../services/analyzeImage';

const WebcamWrapper = styled.div`
  width: 100%;
  height: 50%;
`;

const StyledWebcam = styled(Webcam)`
  object-fit: cover;
`;

const WebcamComp = ({
  setImageUrl,
  setIsLoading,
  setStep,
  setAudioSrc,
  setChattingTitle,
  addChat,
  clearChats,
}) => {
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
        // console.log('로딩중..');
        clearChats();
        const { response1, response2 } = await analyzeImage({
          imgSrc: imgSrc,
          addChat: addChat,
        }); // response2
        // console.log('analyzed', response1.data);
        const audioBlob = response2.data;
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioSrc(audioUrl);
        setIsLoading(false);
        setChattingTitle(response1.data.response_data_summary);
        setStep((step) => step + 1);
      } catch (err) {
        console.error('Error uploading file', err);
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
        height="807px"
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ facingMode: 'environment' }}
      />
    </WebcamWrapper>
  );
};
// height: 원래 797px이었음

export default WebcamComp;
