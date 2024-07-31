import styled from 'styled-components';
import StyledTypography from './StyledTypography';

const DictCardWrapper = styled.div`
  display: flex;
  width: 163px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
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

export const DictCard = ({ imageSrc, title }) => (
  <DictCardWrapper>
    <DictCardImageWrapper>
      <DictCardImage src={imageSrc} alt={title} />
    </DictCardImageWrapper>
    <StyledTypography color="GRAY 1000" type="16SB">
      {title}
    </StyledTypography>
  </DictCardWrapper>
);
