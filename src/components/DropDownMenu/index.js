import styled from 'styled-components';


export const DropDownMenu = styled.div`
  width: 100%;
  position: relative;
  transition-property: max-height;
  transition-duration: .3s;
  transition-timing-function: linear;
  overflow: hidden;
  max-height: ${props => props.isOpen ? '100%' : '0'};

  /*TODO: should be configables*/
  background: #212121;
`

export default DropDownMenu
