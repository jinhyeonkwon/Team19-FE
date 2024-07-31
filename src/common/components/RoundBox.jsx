import styled from 'styled-components';

import theme from '../../styles/themes.d';

const colorParsing = (color) => {
  const [colorName, value] = color.split(' ');
  return value ? theme.colors[colorName][value] : theme.colors[colorName];
};

const RoundBoxWrapper = styled.div`
  display: flex;
  width: 270px;
  padding: 36px 36px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 27px;
  background: ${({ color }) => (color ? colorParsing(color) : 'inherit')};};
`;

export const RoundBox = ({ children, color, ...rest }) => {
  return (
    <RoundBoxWrapper color={color} {...rest}>
      {children}
    </RoundBoxWrapper>
  );
};
