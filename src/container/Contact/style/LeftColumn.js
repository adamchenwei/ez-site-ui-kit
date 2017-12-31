import styled from 'styled-components';

module.exports = styled.section`
  grid-area: contact-page-left-column${props => props.gridAreaId ? `-${props.gridAreaId}` : ''};
`;
