import styled from 'styled-components';
import { Col } from 'reactstrap';

module.exports = styled(Col)`
  ${props => (props.center === 'true' ? `
    text-align: center;
  ` : null)}
`;
