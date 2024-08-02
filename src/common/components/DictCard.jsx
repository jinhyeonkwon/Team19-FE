import styled from 'styled-components';
import StyledTypography from './StyledTypography';

const DictCardWrapper = styled.div`
  display: flex;
  width: 163px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: relative;
`;

const DictCardImageWrapper = styled.div`
  width: 163px;
  height: 163px;
  border-radius: 22px;
  overflow: hidden;
`;

const DictCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const DictTextsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const BigTag = styled.div`
  display: flex;
  height: 19px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 13.5px;
  background: ${({ theme }) => theme.colors.YELLOW[800]};
`;

const SmallTag = styled.div`
  display: flex;
  height: 19px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 13.5px;
  background: ${({ theme }) => theme.colors.YELLOW[600]};
`;

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  position: absolute;
  top: 118px;
`;

export const DictCard = ({ num, imageSrc, title, time, bigTag, smallTag }) => (
  <DictCardWrapper>
    <DictCardImageWrapper>
      <DictCardImage src={imageSrc} alt={title} />
    </DictCardImageWrapper>
    <DictTextsWrapper>
      <StyledTypography color="GRAY 1000" type="16SB">
        {title}
      </StyledTypography>
      <StyledTypography color="GRAY 800" type="14R">
        {time}
      </StyledTypography>
    </DictTextsWrapper>
    <Tags>
      <BigTag>
        <StyledTypography color="WHITE" type="12B">
          {bigTag}
        </StyledTypography>
      </BigTag>
      <SmallTag>
        <StyledTypography color="WHITE" type="12B">
          {smallTag}
        </StyledTypography>
      </SmallTag>
    </Tags>
  </DictCardWrapper>
);
