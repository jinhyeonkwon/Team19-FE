import React from 'react';

import Typography from './Typography';

/* StyledTypography props 사용법
1. type은 "24SB"와 같이 넘겨 주세요.
2. color는 세부 분류가 있는 경우 "YELLOW 500" 과 같이 넘기고 세부 분류가 없는 경우 "BLACK" 과 같이 넘겨 주세요. (Typography 참고)
3. ff는 "PRETENDARD"와 같이 넘겨 주세요. (Typography 참고)
*/

const StyledTypography = ({
  type,
  color = 'BLACK',
  ff = 'PRETENDARD',
  children = null,
  ...rest
}) => {
  // 기본은 24SB
  let fs = 24;
  let fw = 'SEMIBOLD';
  let lh = 150;
  let ls = -0.48;
  switch (type) {
    case '24B':
      fs = 24;
      fw = 'BOLD';
      lh = 150;
      ls = -0.48;
      break;
    case '20B':
      fs = 20;
      fw = 'BOLD';
      lh = 150;
      ls = -0.4;
      break;
    case '20SB':
      fs = 20;
      fw = 'SEMIBOLD';
      lh = 150;
      ls = -0.4;
      break;
    case '16B':
      fs = 16;
      fw = 'BOLD';
      lh = 150;
      ls = -0.32;
      break;
    case '16SB':
      fs = 16;
      fw = 'SEMIBOLD';
      lh = 150;
      ls = -0.32;
      break;
    case '16R':
      fs = 16;
      fw = 'REGULAR';
      lh = 150;
      ls = -0.32;
      break;
    case '14M':
      fs = 14;
      fw = 'MEDIUM';
      lh = 150;
      ls = -0.28;
      break;
    case '14R':
      fs = 14;
      fw = 'REGULAR';
      lh = 150;
      ls = -0.28;
      break;
    case '12B':
      fs = 12;
      fw = 'BOLD';
      lh = 155;
      ls = -0.24;
      break;
    case '12SB':
      fs = 12;
      fw = 'SEMIBOLD';
      lh = 155;
      ls = -0.24;
      break;
    default: // 24SB 로 처리
      break;
  }

  return (
    <Typography color={color} ff={ff} fs={fs} fw={fw} lh={lh} ls={ls} {...rest}>
      {children}
    </Typography>
  );
};

export default StyledTypography;
