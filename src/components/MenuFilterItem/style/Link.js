import styled from 'styled-components';
import { Link } from 'react-router-dom';

module.exports = styled(Link)`
  color: #212121;
  text-transform: uppercase;
  font-size: 12px;
  text-decoration: none;
  vertical-align: middle;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 17px;
  padding-left: 17px;

  background-color: #fff;
  border: 1px solid #212121;
  border-radius: 100px;
  color: #212121;
  font-size: 12px;
  line-height: 1em;

  &:active {
    text-decoration: underline;
  }
`;
