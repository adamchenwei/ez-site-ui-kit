import styled from 'styled-components';

module.exports = styled.span`
  color:  ${props => props.color || 'white'};
  font-size: ${props => props.fontSize || '10px'};
  line-height: 4;
  padding-left: ${props => props.fontSize || '10px'};
`;
