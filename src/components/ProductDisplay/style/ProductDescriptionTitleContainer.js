import styled from 'styled-components';
import mediaQuery from  "./../../../theme/styled-components/mediaQuery";

module.exports = styled.section`
  font-weight: 500;
  font-size: 24px;
  ${mediaQuery.mobileS`
    margin-top: 32px;
  `}
  ${mediaQuery.mobileM`
    margin-top: initial;
  `}
`;
