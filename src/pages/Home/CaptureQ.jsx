import React, { useEffect, useState } from 'react';

import WebcamComp from '../../common/components/WebcamComp';
import QuestionHeader from '../../common/components/QuestionHeader';
import { InfoBox } from '../../common/components/FloatingInfobox';

import styled from 'styled-components';
import { LoadingModal } from '../../common/components/LoadingModal';

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
  height: 797px;
  width: 390px;
`;

const CapturedImage = styled.img`
  object-fit: cover;
`;

const CaptureQ = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  return (
    <div>
      {isLoading && <LoadingModal />}
      {isLoading && (
        <CapturedImageWrapper>
          <CapturedImage src={imageUrl} alt="captured image" />
        </CapturedImageWrapper>
      )}
      <QuestionHeader question="모야Q 질문하기" />
      <FunctionWrapper isLoading={isLoading}>
        <InfoBoxWrapper>
          <InfoBox
            title="카메라 인식하기"
            contents="궁금한 것을 모야에게 보여줘!"
          />
        </InfoBoxWrapper>
        <WebcamComp setImageUrl={setImageUrl} setIsLoading={setIsLoading} />
      </FunctionWrapper>
    </div>
  );
};

export default CaptureQ;
