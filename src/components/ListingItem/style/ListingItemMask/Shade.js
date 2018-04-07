import styled from 'styled-components';

module.exports = styled.section`
  position: absolute;
    height: 100%;
    width: 100%;
    background-color: white;
    opacity: 0.65;
    top: 0;

    &:hover {
      opacity: 1;
      background: transparent;
    }

    &:focus {
      opacity: 1;
      background: transparent;
    }
`;
