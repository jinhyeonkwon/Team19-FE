import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalFrame from './common/components/GlobalFrame';
import CaptureQ from './pages/Question/CaptureQ';
import { Home } from './pages/Home/Home';
import { Dict } from './pages/Dict/Dict';
import { MyPage } from './pages/MyPage/MyPage';
import DiffContext from './DiffContext';
import { initModel } from './services/initModel';

const App = () => {
  const [diff, setDiff] = useState(2);

  useEffect(() => {
    const loadModel = async () => {
      await initModel(diff);
    };
    loadModel();
  }, [diff]);

  return (
    <DiffContext.Provider value={{ diff, setDiff }}>
      <div className="App">
        <GlobalFrame>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/question" element={<CaptureQ />} />
              <Route path="/dictionary" element={<Dict />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </BrowserRouter>
        </GlobalFrame>
      </div>
    </DiffContext.Provider>
  );
};

export default App;
