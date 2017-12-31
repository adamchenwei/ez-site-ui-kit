import styled from 'styled-components';

module.exports = styled.section`
  height: ${props => props.asfullHeight
    ? '100%'
    : '75%'};
  background-color: white;

  display: flex;
  justify-content: center;
  overflow: hidden;
`;

