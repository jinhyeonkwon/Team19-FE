import styled from 'styled-components';

import { Link } from 'react-router-dom';

const MyPageButtonWrapper = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 3px 5.111px 3px 4.879px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const MyPageButton = ({ goTo }) => {
  return (
    <Link to={goTo}>
      <MyPageButtonWrapper onClick={goTo}>
        <img src="/images/mypage_icon.svg" alt="mypage" />
      </MyPageButtonWrapper>
    </Link>
  );
};
