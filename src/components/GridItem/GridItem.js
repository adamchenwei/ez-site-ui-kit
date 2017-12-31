import React, { Component } from 'react'; import PropTypes from 'prop-types';
import concatCssClasses from './../../util/concat/concatCssClasses';
import getGridComponent from './../../util/get/getGridComponent';
import consoleShow from './../../util/debug/consoleShow';

export default class GridItem extends Component {

  render() {
    require('./GridItem.scss');
    /*consoleShow('props', {
      componentName: 'GridItem',
      props: this.props});*/
    const GridComponent = getGridComponent(this.props.gridComponent, this.props.gridContent, this.props.gridType);
    const userCustomStyleClassNames = concatCssClasses(this.props.gridStyle) || '';
    const containerLevelStyle = `gridItem__container original ${userCustomStyleClassNames}`;
    const responsive = this.props.gridResponsiveProperties;
    const standard = responsive.standard || '';
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
        {GridComponent}
        {
          /*Array.isArray(GridComponent) ? GridComponent.map((GridComponent) => {
            return GridComponent;
          }) : GridComponent*/
        }
      </section>
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
