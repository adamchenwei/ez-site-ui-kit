import styled from 'styled-components';
import {Link} from 'react-router-dom';
module.exports = styled.a`
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  text-decoration: none;
  vertical-align: middle;

  padding: 14px;
  display: block;

  &:active {
    text-decoration: underline;
  }
`;
