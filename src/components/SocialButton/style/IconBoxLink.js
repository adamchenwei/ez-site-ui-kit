import styled from 'styled-components';
import mediaQuery from './../../../theme/styled-components/mediaQuery';

module.exports = styled.a`
  ${mediaQuery.mobileS`
    flex-basis: 16%;
  `}
  ${mediaQuery.tablet`
    flex-basis: 8%;
  `}
  display: inline-block;
  background-repeat: no-repeat;
  align-self: center;
  text-align: center;
`;
