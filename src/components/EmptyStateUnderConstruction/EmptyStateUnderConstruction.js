import React, { Component } from 'react'; import PropTypes from 'prop-types';
import concatCssClasses from './../../util/concat/concatCssClasses';
import capToCamelCase from './../../util/transform/capToCamelCase';

export default class EmptyStateUnderConstruction extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    require('./EmptyStateUnderConstruction.scss');

    let {
      content,
      style,
      type,
    } = this.props;
    if (!style) {
      style = {
        container: {
          classes: [],
        },
      };
    }
    const containerClasses = style.container.classes;
    if (containerClasses) {
      const style = concatCssClasses(containerClasses);
    }

    const componentCSSName = capToCamelCase('EmptyStateUnderConstruction');
    const containerLevelStyle = `${componentCSSName}__container`;

    return (
      <section className={containerLevelStyle} style={style.container.inlineStyles}>
        <div className="object">
          <div className="object-rope" />
          <div className="object-shape">
              Coming <span className="soon">Soon</span><br />
              in shaa Allah
          </div>
        </div>
      </section>
    );
  }
}

EmptyStateUnderConstruction.propTypes = {
  content: PropTypes.object,
  style: PropTypes.object,
  type: PropTypes.string,
};
