import styled from 'styled-components';
import { NavItem } from 'reactstrap';

module.exports = styled(NavItem)`
  ${props => (props.textcasing ? `
    text-transform: ${props.textcasing}
  ` : null)}
`;
