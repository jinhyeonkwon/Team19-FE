import React, { useEffect, useState } from 'react';

import WebcamTest from '../../common/components/WebcamComp';
import QuestionHeader from '../../common/components/QuestionHeader';
import { InfoBox } from '../../common/components/FloatingInfobox';

import styled from 'styled-components';

const InfoBoxWrapper = styled.div`
  position: absolute;
  top: 82px;
  left: 50%;
  transform: translateX(-50%);
`;

const CaptureQ = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  return (
    <div>
      <QuestionHeader question="모야Q 질문하기" />
      <InfoBoxWrapper>
        <InfoBox />
      </InfoBoxWrapper>
      <WebcamTest setImageUrl={setImageUrl} />
    </div>
  );
};

export default CaptureQ;
