import React, { useEffect, useState } from 'react';

import WebcamTest from '../../common/components/WebcamComp';
import QuestionHeader from '../../common/components/QuestionHeader';

const CaptureQ = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  return (
    <div>
      <QuestionHeader question="모야Q 질문하기" />
      <WebcamTest setImageUrl={setImageUrl} />
    </div>
  );
};

export default CaptureQ;
