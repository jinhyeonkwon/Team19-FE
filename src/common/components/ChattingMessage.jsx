import styled from 'styled-components';
import StyledTypography from './StyledTypography';

const ChattingMessageBox = styled.div`
  display: flex;
  padding: 24px 35px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  max-width: 254px;
  border-radius: 27px;
  background: ${({ theme, isMine }) =>
    isMine ? theme.colors.PURPLE[500] : theme.colors.YELLOW[600]};
`;

const ChattingMessageWrapper = styled.div`
  display: flex;
  justify-content: ${({ isMine }) => (isMine ? 'flex-end' : 'flex-start')};
`;

export const ChattingMessage = ({ text, isMine }) => (
  <ChattingMessageWrapper isMine={isMine}>
    <ChattingMessageBox isMine={isMine}>
      <StyledTypography type="24B" color="WHITE">
        {text}
      </StyledTypography>
    </ChattingMessageBox>
  </ChattingMessageWrapper>
);
