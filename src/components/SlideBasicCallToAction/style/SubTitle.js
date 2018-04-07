import styled from 'styled-components';
import mediaQuery from '../../../theme/styled-components/mediaQuery';

export default styled.span`
  ${mediaQuery.xs`
    display: none;
  `}
  ${mediaQuery.md`
    display: initial;
  `}
`;
