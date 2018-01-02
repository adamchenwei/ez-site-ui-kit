import styled from 'styled-components';
import mediaQuery from  "./../../../theme/styled-components/mediaQuery";

module.exports = styled.section`
  ${mediaQuery.mobileS`
    margin-bottom: 24px;
    margin-top: 24px;
  `}

  ${mediaQuery.tablet`
    margin-bottom: initial;
    margin-top: initial;
  `}
`;
