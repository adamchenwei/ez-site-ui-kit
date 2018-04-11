import React from 'react'; import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import getGridComponent from './../../util/get/getGridComponent';

export default function GridItem() {
  const GridComponent = getGridComponent(this.props.gridComponent,
    this.props.gridContent, this.props.gridType);
  const responsive = this.props.gridResponsiveProperties;
  const standard = responsive.standard || '';
  const xs = responsive.xs || '';
  const sm = responsive.sm || '';
  const md = responsive.md || '';
  const lg = responsive.lg || '';
  const xl = responsive.xl || '';
  const offset = responsive.offset || {
    standard: '',
    sm: '',
    md: '',
    lg: '',
    xl: '',
  };

  return (
    <Col
      size={standard}
      xs={{
        size: xs || '',
        offset: offset.xs || '',
      }}
      sm={{
        size: sm || '',
        offset: offset.sm || '',
      }}
      md={{
        size: md || '',
        offset: offset.md || '',
      }}
      lg={{
        size: lg || '',
        offset: offset.lg || '',
      }}
      xl={{
        size: xl || '',
        offset: offset.xl || '',
      }}
    >
      {GridComponent}
    </Col>
  );
}
/* eslint-disable */
GridItem.propTypes = {
  gridComponent: PropTypes.any.isRequired,
  gridContent: PropTypes.any,
  gridResponsiveProperties: PropTypes.object.isRequired,
  gridStyle: PropTypes.any,
  gridCustomStyle: PropTypes.any,
  gridType: PropTypes.any,
};
/* eslint-enable */
