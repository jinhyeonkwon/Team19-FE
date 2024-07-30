import './App.css';

import React from 'react';

import GlobalFrame from './common/components/GlobalFrame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CaptureQ from './pages/Home/CaptureQ';

function App() {
  return (
    <div className="App">
      <GlobalFrame>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CaptureQ />} />
            <Route path="/home" element={<CaptureQ />} />
          </Routes>
        </BrowserRouter>
      </GlobalFrame>
    </div>
  );
}

export default App;
