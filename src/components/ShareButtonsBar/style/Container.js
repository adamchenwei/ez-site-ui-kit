import styled from 'styled-components';

module.exports = styled.section`
  grid-area: ${props => props.componentName ? `-${props.componentName}` : 'component-container'}${props => props.gridAreaId ? `-${props.gridAreaId}` : ''};
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 32px 32px 32px 32px 32px;

  /*this should be in a layout element*/
  margin-top: 14px;
  ${props => props.hasMarginBottom ? `
    margin-bottom: 14px;
  ` : null}
  @supports not (display: grid) {
    display: flex;
  }
`;
