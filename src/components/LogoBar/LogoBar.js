import React, { Component } from 'react'; import PropTypes from 'prop-types';
import concatCssClasses from './../../util/concat/concatCssClasses';

export default class LogoBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    require('./LogoBar.scss');
    const content = this.props.content.data;
    const contentStyle = concatCssClasses(this.props.contentStyle);
    const containerLevelStyle = `logoBar__container ${contentStyle}`;
    return (
      <section className={containerLevelStyle}>
        <section className='logoBar__logoBox' >
          <img className='logoBar__logo' src={content.logo.image.url} />
        </section>
      </section>
    );
  }
}

LogoBar.propTypes = {
  content: PropTypes.object.isRequired,
  style: PropTypes.array,
  type: PropTypes.string,
};
