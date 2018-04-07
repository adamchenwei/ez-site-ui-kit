import styled from 'styled-components';

module.exports = styled.section`
  grid-area: ${props => (props.componentName ? `-${props.componentName}` : 'component-container')}${props => (props.gridAreaId ? `-${props.gridAreaId}` : '')};
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 14px;
  grid-template-columns: 1fr;
`;
