import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';
import StyledTypography from './common/components/StyledTypography';

const YellowHeader = styled.header`
  color: ${({ theme }) => theme.colors.YELLOW['DEFAULT']};
`;

const YellowA = styled.a`
  color: ${({ theme }) => theme.colors.YELLOW['DEFAULT']};
`;

const YellowP = styled.p`
  color: ${({ theme }) => theme.colors.YELLOW['DEFAULT']};
`;

function App() {
  return (
    <div className="App">
      <YellowHeader className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <YellowP>
          Edit <code>src/App.js</code> and save to reload.
        </YellowP>
        <YellowA
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </YellowA>
        <StyledTypography type="24SB" color="YELLOW 300">
          과연 글꼴이 들어갔을까요?
        </StyledTypography>
      </YellowHeader>
    </div>
  );
}

export default App;
