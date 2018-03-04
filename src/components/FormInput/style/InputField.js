import styled from 'styled-components';
import mediaQuery from  "./../../../theme/styled-components/mediaQuery";

module.exports = styled.input`
  grid-area: form-input${props => props.gridAreaId ? `-${props.gridAreaId}` : ''};
  ${props => props.responsive
    ? `${mediaQuery.mobileS`
        display: block;
        position: absolute;`
      }
      ${mediaQuery.mobileL`
        display: inline-block;
        position: initial;`
      }`
    : null
  };

  width: 100%;
  padding: 12px;
  margin: 6px 0 4px;
  border: 1px solid #ccc;
  background: #fafafa;
  color: #000;
  font-family: sans-serif;
  font-size: 12px;
  line-height: normal;
  box-sizing: border-box;
  border-radius: 2px;
  font-size: 14px;
  background-color: white;
  display: inline-block;
  height: auto;
  padding: 10px;
`;