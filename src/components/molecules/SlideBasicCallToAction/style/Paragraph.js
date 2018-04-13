import styled from 'styled-components';
import mediaQuery from '../../../../theme/styled-components/mediaQuery';

export default styled.span`
  color: white;
  font-size: 16px;
  line-height: 48px;
  ${mediaQuery.xs`
    display: none;
  `}
  ${mediaQuery.md`
    display: initial;
  `}
`;
