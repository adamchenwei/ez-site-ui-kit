import styled from 'styled-components';
import mediaQuery from './../../../theme/styled-components/mediaQuery';

module.exports = styled.section`
  ${mediaQuery.tablet`
    flex-basis: 16%;
  `}

  ${mediaQuery.laptopL`
    flex-basis: 8%;
  `}
  text-align: center;
`;
