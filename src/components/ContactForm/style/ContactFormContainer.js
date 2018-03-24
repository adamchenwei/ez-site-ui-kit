import styled from 'styled-components';

module.exports = styled.form`
  grid-area: form-contact-container${props => (props.gridAreaId ? `-${props.gridAreaId}` : '')};
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 14px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "form-legend-name form-legend-name"
    "form-input-first-name form-input-last-name"
    "form-legend-email form-legend-email"
    "form-input-email form-input-email"
    "form-legend-phone form-legend-phone"
    "form-input-phone form-input-phone"
    "form-legend-message form-legend-message"
    "form-textarea-message form-textarea-message"
     "form-submit-button .";
`;
