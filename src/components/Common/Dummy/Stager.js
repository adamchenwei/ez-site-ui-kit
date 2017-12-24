import styled from 'styled-components';

module.exports = styled.section`
  display: ${props=> props.displayMethod ? props.displayMethod : 'block'}
`;
