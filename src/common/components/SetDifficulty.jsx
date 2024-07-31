import React, { useContext } from 'react';
import styled from 'styled-components';
import StyledTypography from './StyledTypography';
import DiffContext from '../../DiffContext';

const SetDifficultyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const EachRowWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  align-self: stretch;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledButton = styled.button`
  display: flex;
  width: 60px;
  height: 25px;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-radius: 10px;
  background: ${({ theme, diff, value }) =>
    diff === value ? theme.colors.PURPLE[600] : theme.colors.WHITE};
  border-width: 0px;
`;

const StyledButtonText = styled(StyledTypography)`
  color: ${({ theme, diff, value }) =>
    diff === value ? theme.colors.WHITE : theme.colors.GRAY[500]};
  text-align: center;
`;

const EachRowTitle = styled(StyledTypography)`
  width: 76px;
`;

export const SetDifficulty = () => {
  const { diff, setDiff } = useContext(DiffContext);

  return (
    <SetDifficultyWrapper>
      <EachRowWrapper>
        <EachRowTitle type="16R" color="BLACK">
          문장 단어 수
        </EachRowTitle>
        <Buttons>
          <StyledButton value={0} diff={diff} onClick={() => setDiff(0)}>
            <StyledButtonText type="16SB" diff={diff} value={0}>
              3-5
            </StyledButtonText>
          </StyledButton>
          <StyledButton value={1} diff={diff} onClick={() => setDiff(1)}>
            <StyledButtonText type="16SB" diff={diff} value={1}>
              6-8
            </StyledButtonText>
          </StyledButton>
          <StyledButton value={2} diff={diff} onClick={() => setDiff(2)}>
            <StyledButtonText type="16SB" diff={diff} value={2}>
              9 이상
            </StyledButtonText>
          </StyledButton>
        </Buttons>
      </EachRowWrapper>
      <EachRowWrapper>
        <EachRowTitle type="16R" color="BLACK">
          말 속도
        </EachRowTitle>
        <Buttons>
          <StyledButton value={0} diff={diff} onClick={() => setDiff(0)}>
            <StyledButtonText type="16SB" diff={diff} value={0}>
              거북이
            </StyledButtonText>
          </StyledButton>
          <StyledButton value={1} diff={diff} onClick={() => setDiff(1)}>
            <StyledButtonText type="16SB" diff={diff} value={1}>
              코알라
            </StyledButtonText>
          </StyledButton>
          <StyledButton value={2} diff={diff} onClick={() => setDiff(2)}>
            <StyledButtonText type="16SB" diff={diff} value={2}>
              돌고래
            </StyledButtonText>
          </StyledButton>
        </Buttons>
      </EachRowWrapper>
      <EachRowWrapper>
        <EachRowTitle type="16R" color="BLACK">
          구사 단어
        </EachRowTitle>
        <Buttons>
          <StyledButton value={0} diff={diff} onClick={() => setDiff(0)}>
            <StyledButtonText type="16SB" diff={diff} value={0}>
              기본어
            </StyledButtonText>
          </StyledButton>
          <StyledButton value={1} diff={diff} onClick={() => setDiff(1)}>
            <StyledButtonText type="16SB" diff={diff} value={1}>
              확장어
            </StyledButtonText>
          </StyledButton>
          <StyledButton value={2} diff={diff} onClick={() => setDiff(2)}>
            <StyledButtonText type="16SB" diff={diff} value={2}>
              복잡어
            </StyledButtonText>
          </StyledButton>
        </Buttons>
      </EachRowWrapper>
    </SetDifficultyWrapper>
  );
};
