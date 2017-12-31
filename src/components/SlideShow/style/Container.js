import styled from 'styled-components';
import mediaQuery from  "./../../../theme/styled-components/mediaQuery";

module.exports = styled.section`
  ${'' /* ${mediaQuery.mobileS`
    display: none;
  `}
  ${mediaQuery.tablet`
    display: block;
  `} */}

  display: block;
  cursor: pointer;
`;
