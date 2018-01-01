import React, { Component } from 'react'; import PropTypes from 'prop-types';
import concatCssClasses from './../../util/concat/concatCssClasses';
import getGridComponent from './../../util/get/getGridComponent';
import consoleShow from './../../util/debug/consoleShow';

export default class GridItemShell extends Component {

  render() {
    const userCustomStyleClassNames = concatCssClasses(this.props.gridStyle) || '';
    const containerLevelStyle = `gridItemShell__container original ${userCustomStyleClassNames}`;
    const responsive = this.props.gridResponsiveProperties || {};
    const standard = responsive.standard || 12;
    const sm = responsive.sm || 12;
    const md = responsive.md || 12;
    const lg = responsive.lg || 12;
    const xl = responsive.xl || 12;
    const offset = responsive.offset || {
      standard: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    };

    const composedStyles = `${containerLevelStyle}
      col-${standard}
      col-sm-${sm}
      col-md-${md}
      col-lg-${lg}
      col-xl-${xl}
      offset-${offset.standard}
      offset-sm-${offset.sm}
      offset-md-${offset.md}
      offset-lg-${offset.lg}
      offset-xl-${offset.xl}
    `;

    const customStyle = this.props.gridCustomStyle || {};
    const noCustomStyleAvailable = !Object.keys(customStyle).length && customStyle.constructor === Object;
    return (
      <section className={composedStyles} style={
        !noCustomStyleAvailable ? customStyle.container.inlineStyles : null
      }>
        {this.props.children}
      </section>
    );
  }
}

GridItemShell.propTypes = {
  gridContent: PropTypes.any,
  gridResponsiveProperties: PropTypes.object,
  gridStyle: PropTypes.any,
  gridCustomStyle: PropTypes.any,
  gridType: PropTypes.any,
};

