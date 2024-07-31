import styled from 'styled-components';

const Moya = styled.div`
  color: ${({ theme }) => theme.colors.PURPLE[600]};
  font-family: 'neurimboGothicRegular', sans-serif;
  font-size: 31.923px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 47.885px */
  letter-spacing: -0.638px;
  vertical-align: middle;
`;

const Q = styled.div`
  color: ${({ theme }) => theme.colors.YELLOW[600]};
  font-family: 'neurimboGothicRegular', sans-serif;
  font-size: 31.923px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.638px;
  vertical-align: middle;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0px;
`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <Moya>모야</Moya>
      <Q>Q</Q>
    </LogoWrapper>
  );
};
