import styled from 'styled-components';
import mediaQuery from  "./../../../theme/styled-components/mediaQuery";

module.exports = styled.section`
  margin: 0 auto;
  ${mediaQuery.mobileS`
    width: 100%;
  `}

  ${mediaQuery.mobileL`
    width: 400px;
  `}
`;
