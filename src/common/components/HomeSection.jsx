import styled from 'styled-components';

import StyledTypography from './StyledTypography';

const HomeSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 26px;
  width: 342px;
`;

const HomeTexts = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

const ChildrenWrapper = styled.div``;

export const HomeSection = ({ title, subtitle, children }) => {
  return (
    <HomeSectionWrapper>
      <HomeTexts>
        <StyledTypography type="24SB" color="BLACK" ff="CAFE24">
          {title}
        </StyledTypography>
        <StyledTypography type="16R" color="BLACK">
          {subtitle}
        </StyledTypography>
      </HomeTexts>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </HomeSectionWrapper>
  );
};
