import styled from 'styled-components';
import {Link} from 'react-router-dom';
module.exports = styled(Link)`
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  text-decoration: underline;
  color: rgba(34,34,34,.55);
  &:hover {
    color: #212121;
    text-decoration: underline;
  }
`;
