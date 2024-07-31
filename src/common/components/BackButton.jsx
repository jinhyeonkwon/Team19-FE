import React from 'react';

import styled from 'styled-components';

const BackButtonWrapper = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 0 0 0 3px var(--Purple-100, #f5eafa);
  background: var(--Purple-600S, #704fe6);
  cursor: pointer;
`;

const BackButton = ({ onClick = () => {} }) => (
  <BackButtonWrapper onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <path
        d="M8.30576 13.8576L14.4238 20.2188C14.7844 20.5937 15.369 20.5937 15.7296 20.2188C16.0901 19.8439 16.0901 19.2361 15.7296 18.8612L9.61151 12.5L15.7296 6.13882C16.0901 5.76392 16.0901 5.15608 15.7296 4.78118C15.369 4.40627 14.7844 4.40627 14.4238 4.78118L8.30576 11.1424L7.66671 11.8068C7.29437 12.1939 7.29437 12.8061 7.66671 13.1932L8.30576 13.8576Z"
        fill="white"
      />
    </svg>
  </BackButtonWrapper>
);

export default BackButton;
