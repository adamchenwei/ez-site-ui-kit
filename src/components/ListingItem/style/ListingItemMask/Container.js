import styled from 'styled-components';

module.exports = styled.section`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  transition: opacity 300ms ease-in-out;
  opacity: ${props=>props.hide
    ? 0  : 1}
`;