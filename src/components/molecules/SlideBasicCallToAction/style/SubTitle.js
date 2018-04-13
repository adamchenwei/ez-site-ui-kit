import styled from 'styled-components';
import mediaQuery from '../../../../theme/styled-components/mediaQuery';

export default styled.span`
  color: white;
  line-height: 80px;
  font-size: 48px;
  ${mediaQuery.xs`
    display: none;
  `}
  ${mediaQuery.md`
    display: initial;
  `}
`;
