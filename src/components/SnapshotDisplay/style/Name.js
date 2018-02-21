import styled from 'styled-components';
import mediaQuery from './../../../theme/styled-components/mediaQuery';

module.exports = styled.h1`

  ${mediaQuery.mobileS`
    font-size: 32px;
  `}
  ${mediaQuery.tablet`
    font-size: 32px;
  `}
  ${mediaQuery.laptop`
    font-size: 64px;
  `}
`;
