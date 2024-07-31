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
  margin-top: 13px;
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
  margin-top: 13px;
`;
// margin-top이 원래 없었으나 환경 맞추어 수정

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
