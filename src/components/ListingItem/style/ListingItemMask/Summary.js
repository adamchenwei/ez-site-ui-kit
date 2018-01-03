import styled from 'styled-components';
import mediaQuery from  "./../../../../theme/styled-components/mediaQuery";

module.exports = styled.section`
  position: relative;
  align-self: center;
  width: 100%;
  text-align: center;
  font-weight: 600;

  &:hover {
    display: none;
  }

  &:focus {
    display: none;
  }

  ${mediaQuery.mobileS`
    font-size: 24px;`
  }
  ${mediaQuery.tablet`
    font-size: 18px;`
  }
`;