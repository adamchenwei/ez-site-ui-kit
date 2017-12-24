import styled from 'styled-components';
const setComponentWrapperContainerClasses = require('../../util/setup/setComponentWrapperContainerClasses');

module.exports = styled.section`
  grid-area: ${props => props.componentName
    ? `${setComponentWrapperContainerClasses(props.componentName)}`
    : 'component-container'}${props => props.componentName && props.gridAreaId ? '-' : ''}${props => props.gridAreaId
      ? `${props.gridAreaId}`
      : ''};
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 14px;
  grid-template-columns: 1fr;
`;
