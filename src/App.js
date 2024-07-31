import './App.css';

import React from 'react';

import GlobalFrame from './common/components/GlobalFrame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CaptureQ from './pages/Question/CaptureQ';
import { Home } from './pages/Home/Home';
import { Dict } from './pages/Dict/Dict';

function App() {
  return (
    <div className="App">
      <GlobalFrame>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question" element={<CaptureQ />} />
            <Route path="/dictionary" element={<Dict />} />
          </Routes>
        </BrowserRouter>
      </GlobalFrame>
    </div>
  );
}

export default App;
