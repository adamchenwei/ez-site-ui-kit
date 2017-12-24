import styled from 'styled-components';
import mediaQuery from  "./../../theme/styled-components/mediaQuery";

module.exports = styled.section`
  ${'' /* ${mediaQuery.mobileS`
    padding-right: 24px;
    padding-left: 24px;
  `}
  ${mediaQuery.tablet`
    padding-right: 80px;
    padding-left: 80px;
  `}
  ${mediaQuery.laptop`
    padding-right: 320px;
    padding-left: 320px;
  `} */}
  text-align: center;
  width: 100%;

  display: flex;
  justify-content: center;
`;
