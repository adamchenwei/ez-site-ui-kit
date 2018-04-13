import styled from 'styled-components';
import mediaQuery from '../../../../theme/styled-components/mediaQuery';

export default styled.span`
  font-family: "Tangerine", cursive;
  color: white;
  font-size: 80px;
  ${mediaQuery.xs`
    font-size: 48px;
  `}
  ${mediaQuery.md`
    font-size: 80px;
  `}
  font-weight: 400;
  line-height: 80px;
`;
