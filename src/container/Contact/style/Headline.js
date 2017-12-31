import styled from 'styled-components';

module.exports = styled.h1`
  grid-area: contact-page-headline${props => props.gridAreaId ? `-${props.gridAreaId}` : ''};
  color: #333;
  font-size: 24px;
  text-align: center;
  text-decoration: underline;
  margin-top: 24px;
`;
