import styled from 'styled-components';

module.exports = styled.textarea`
  grid-area: form-textarea${props => (props.gridAreaId ? `-${props.gridAreaId}` : '')};
  min-height: 100px;
  resize: vertical;
  padding: 12px;
`;
