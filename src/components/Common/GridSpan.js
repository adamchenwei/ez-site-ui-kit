import styled from 'styled-components';

const setComponentWrapperContainerClasses = require('../../util/setup/setComponentWrapperContainerClasses');

module.exports = styled.span`
  grid-area: ${props => (props.componentName
    ? `${setComponentWrapperContainerClasses(props.componentName)}`
    : 'component-container')}${props => (props.gridAreaId
  ? `-${props.gridAreaId}`
  : '')};
  ${props => (props.isGridContainer
    ? `
      display: grid;grid-column-gap: 10px;
      grid-row-gap: 14px;
      grid-template-columns: 1fr;
      `
    : '')}

  @supports not (display: grid) {
    display: block;
  }
`;
