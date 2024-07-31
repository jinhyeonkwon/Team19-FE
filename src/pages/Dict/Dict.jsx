import styled from 'styled-components';

import ChattingHeader from '../../common/components/ChattingHeader';
import { useSearchParams } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  flex-grow: 1;
  background: #fff7ec;
`;

export const Dict = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const num = searchParams.get('num');
  const dummyTitle = '오므라이스가 뭐야?';
  return (
    <Container>
      <ChattingHeader text={num} backButtonLinkTo={'/'} />
      <ContentsWrapper />
    </Container>
  );
};
