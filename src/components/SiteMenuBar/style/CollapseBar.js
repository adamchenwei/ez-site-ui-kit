import styled from 'styled-components';
import {Collapse} from 'reactstrap';

module.exports = styled(Collapse)`
  ${props => props.left === 'true' ? `
    flex-grow: initial;
  ` : null}
`;
