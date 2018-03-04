//TODO - Its another kind of input only, but style change is too dramatic
//merge into ContactFormInput once some sort of conditional becomes allowed in styled.components

import styled from 'styled-components';

module.exports = styled.input`
  grid-area: form-submit-button;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
  font-style: normal;
  background-color: transparent;
  color: #222;
  border-color: #333;
  border-radius: 3px;
  border-width: 2px;
  border-style: solid;
  transition: 0.1s background-color linear, 0.1s color linear;
  text-align: center;
  cursor: pointer;
  height: 45px;
`;