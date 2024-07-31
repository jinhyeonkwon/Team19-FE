import './App.css';

import React from 'react';

import GlobalFrame from './common/components/GlobalFrame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CaptureQ from './pages/Question/CaptureQ';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <GlobalFrame>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question" element={<CaptureQ />} />
          </Routes>
        </BrowserRouter>
      </GlobalFrame>
    </div>
  );
}

export default App;
