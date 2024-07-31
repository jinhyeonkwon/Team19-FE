import styled from 'styled-components';

const HorizontalScrollableContainerWrapper = styled.div`
  display: flex;
  width: 342px;
  flex-direction: row;
  justify-content: center;
  align-content: flex-start;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HorizontalScrollableContainer = ({ children }) => (
  <HorizontalScrollableContainerWrapper>
    {children}
  </HorizontalScrollableContainerWrapper>
);
