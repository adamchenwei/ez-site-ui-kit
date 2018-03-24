import styled from 'styled-components';
import { gridAreaName } from './../../../styles/helpers';

module.exports = styled.a`
  height: 32px;
  width: 32px;
  position: absolute;
  display: block;
  justify-content: center;
  cursor: pointer;

  padding-top: 10px;
  padding-left: 10px;

  @supports not (display: grid) {
    padding-top: 0;
    position: relative;
    display: inline-block;
    float: left;
  }
`;
