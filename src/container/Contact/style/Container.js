import styled from 'styled-components';

// two columns mode switch areas to:
// "contact-page-left-column contact-page-right-column";

module.exports = styled.section`
  grid-area: contact-page-container${props => (props.gridAreaId ? `-${props.gridAreaId}` : '')};
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    ". contact-page-headline ."
    ". contact-page-left-column .";
  margin-left: 25px;
  margin-right: 25px;
`;
