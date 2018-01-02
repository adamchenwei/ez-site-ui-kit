import styled from 'styled-components';

export default styled.section`
  width: 100%;
  height: 100%;
  display: ${
    props => props.hide
      ? 'none' : 'flex'
  };
  align-items: center;
  text-align: ${props=> props.centerText
    ? 'center' : 'unset'};
  background-color: #222;
  color: #cf0;
  text-transform: uppercase;
`;