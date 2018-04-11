import React from 'react'; import PropTypes from 'prop-types';
import concatCssClasses from './../../util/concat/concatCssClasses';

export default function GridItemShell(props) {
  const userCustomStyleClassNames = concatCssClasses(props.gridStyle) || '';
  const containerLevelStyle = `gridItemShell__container original ${userCustomStyleClassNames}`;
  const responsive = props.gridResponsiveProperties || {};
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

  const customStyle = props.gridCustomStyle || {};
  const noCustomStyleAvailable = !Object.keys(customStyle)
    .length && customStyle.constructor === Object;
  return (
    <section
      className={composedStyles}
      style={
      !noCustomStyleAvailable ? customStyle.container.inlineStyles : null
    }
    >
      {props.children}
    </section>
  );
}

GridItemShell.propTypes = {
  gridResponsiveProperties: PropTypes.objectOf(PropTypes.any).isRequired,
  gridStyle: PropTypes.arrayOf(PropTypes.any).isRequired,
  gridCustomStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  children: PropTypes.node.isRequired,
};

