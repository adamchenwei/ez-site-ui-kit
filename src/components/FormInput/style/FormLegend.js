import styled from 'styled-components';

module.exports = styled.legend`
  grid-area: form-legend${props => props.gridAreaId ? `-${props.gridAreaId}` : ''};
`;
