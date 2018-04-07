import styled from 'styled-components';
import mediaQuery from './../../../theme/styled-components/mediaQuery';

module.exports = styled.img`
  ${mediaQuery.mobileS`
    height: 32px;
  `}
  ${mediaQuery.tablet`
    height: 48px;
  `}
  cursor: pointer;
`;
