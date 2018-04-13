import styled from 'styled-components';
import mediaQuery from '../../../../theme/styled-components/mediaQuery';

export default styled.img`
  width: auto;
  height: auto;
  align-self: center;
  ${mediaQuery.md`
    width: 100%;
  `}
`;
