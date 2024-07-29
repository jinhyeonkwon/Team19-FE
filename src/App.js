import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';
import StyledTypography from './common/components/StyledTypography';
import GlobalFrame from './common/components/GlobalFrame';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <GlobalFrame>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </GlobalFrame>
    </div>
  );
}

export default App;
