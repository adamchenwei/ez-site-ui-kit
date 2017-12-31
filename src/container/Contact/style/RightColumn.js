import styled from 'styled-components';

module.exports = styled.section`
  grid-area: contact-page-right-column${props => props.gridAreaId ? `-${props.gridAreaId}` : ''};
`;
