import styled from 'styled-components';
import mediaQuery from  "./../../../theme/styled-components/mediaQuery";

module.exports = styled.section`
  ${mediaQuery.mobileS`
    display: none;
  `}
  ${mediaQuery.tablet`
    display: flex;
  `}
  ${'' /* grid-area: ${props => props.componentName ? `-${props.componentName}` : 'component-container'}${props => props.gridAreaId ? `-${props.gridAreaId}` : ''};
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 14px;
  grid-template-columns: 1fr; */}
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  font-weight: 500;
`;
