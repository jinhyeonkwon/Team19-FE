import React, { useEffect, useState } from 'react';

import WebcamTest from '../../common/components/WebcamComp';

const Home = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  return (
    <div>
      <WebcamTest setImageUrl={setImageUrl} />
    </div>
  );
};

export default Home;
