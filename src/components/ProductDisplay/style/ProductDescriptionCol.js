import styled from 'styled-components';
import { Col } from 'reactstrap';
import mediaQuery from './../../../theme/styled-components/mediaQuery';

module.exports = styled(Col)`
  ${mediaQuery.mobileS`
    &.over-ride-bootstrap {
      padding-left: 16px;
      padding-right: 16px;
    }
  `}
  ${mediaQuery.tablet`
    &.over-ride-bootstrap {
      padding-left: 16px;
    }
  `}
`;
