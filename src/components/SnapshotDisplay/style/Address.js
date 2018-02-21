import styled from 'styled-components';
import mediaQuery from './../../../theme/styled-components/mediaQuery';

module.exports = styled.h2`

  ${mediaQuery.mobileS`
    font-size: 16px;
  `}
  ${mediaQuery.tablet`
    font-size: 16px;
  `}
  ${mediaQuery.laptop`
    font-size: 32px;
  `}
`;
