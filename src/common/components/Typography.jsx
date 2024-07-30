import React from 'react';

import styled from 'styled-components';
import theme from '../../styles/themes.d';

const colorParsing = (color) => {
  const [colorName, value] = color.split(' ');
  return value ? theme.colors[colorName][value] : theme.colors[colorName];
};

const weightParsing = (weight) => {
  if (Number.isInteger(weight)) {
    return weight;
  } else {
    return theme.fonts.WEIGHT[weight];
  }
};

/* Typography props 사용법
1. color는 세부 분류가 있는 경우 "YELLOW 500" 과 같이 넘기고
세부 분류가 없는 경우 "BLACK" 과 같이 넘겨 주세요.
2. ff는 "PRETENDARD"와 같이 넘겨 주세요.
3. fs는 px 단위의 숫자로 넘겨 주세요. 
4. fw는 숫자로 넘겨 주세요. 
5. lh는 % 단위의 숫자로 넘겨 주세요. 
6. ls는 px 단위의 숫자로 넘겨 주세요. 
7. ta는 "center"와 같이 넘겨 주세요.
*/

const TypographyInner = styled.div`
  color: ${({ color }) => (color ? colorParsing(color) : 'inherit')};
  font-family: ${({ ff, theme }) => (ff ? theme.fonts.FAMILY[ff] : 'inherit')};
  font-size: ${({ fs }) => (fs ? `${fs}px` : 'inherit')};
  font-weight: ${({ fw }) => (fw ? weightParsing(fw) : 'inherit')};
  line-height: ${({ lh }) => (lh ? `${lh}%` : 'inherit')};
  letter-spacing: ${({ ls }) => (ls ? `${ls}px` : 'inherit')};
  text-align: ${({ ta }) => (ta ? ta : 'inherit')};
`;

const Typography = ({ children = null, ...rest }) => (
  <TypographyInner {...rest}>{children}</TypographyInner>
);

export default Typography;
