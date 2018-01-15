import React, { Component } from 'react'; import PropTypes from 'prop-types';
import concatCssClasses from './../../util/concat/concatCssClasses';
import getGridComponent from './../../util/get/getGridComponent';
import consoleShow from './../../util/debug/consoleShow';
import {Col} from 'reactstrap';

export default class GridItem extends Component {

  render() {
    const GridComponent = getGridComponent(this.props.gridComponent, this.props.gridContent, this.props.gridType);
    const userCustomStyleClassNames = concatCssClasses(this.props.gridStyle) || '';
    const containerLevelStyle = `gridItem__container original ${userCustomStyleClassNames}`;
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

    //Reactstrap Component Instead!


    const customStyle = this.props.gridCustomStyle || {};
    const noCustomStyleAvailable = !Object.keys(customStyle).length && customStyle.constructor === Object;
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
}

GridItem.propTypes = {
  gridComponent: PropTypes.any.isRequired,
  gridContent: PropTypes.any,
  gridResponsiveProperties: PropTypes.object.isRequired,
  gridStyle: PropTypes.any,
  gridCustomStyle: PropTypes.any,
  gridType: PropTypes.any,
};
