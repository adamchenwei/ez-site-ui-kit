import styled from 'styled-components';


module.exports = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  @supports not (display: grid) {
    margin-right: 10px;
  }
`;
