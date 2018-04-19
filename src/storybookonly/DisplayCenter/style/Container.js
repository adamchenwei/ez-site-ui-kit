import styled from 'styled-components';

export default styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: 32px;
  padding: 32px;
  ${props => (props.borderless ? null : `
    border-color: lightgrey;
    border-width: 1px;
    border-style: dashed;
  `)}


  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    border-color: transparent;
    border-style: solid;
  }

  &::after {
    border-radius: 0;
    border-width: 28px;
    border-right-color: lightgrey;
    border-top-color: lightgrey;
  }
`;
