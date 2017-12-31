import React, { Component } from 'react'; import PropTypes from 'prop-types';
import concatCssClasses from './../../util/concat/concatCssClasses';
import capToCamelCase from './../../util/transform/capToCamelCase';
import {IconBoxLink} from './style';

export default class SocialButtonShell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //require('./SocialButtonShell.scss');

    let {
      style,
      containerLevelStyle,
      children,
      linkUrl,
    } = this.props;

    if (!style) {
      style = {
        container: {
          classes: [],
        }
      }
    }

    return (
      <IconBoxLink href={linkUrl || '/'} className={containerLevelStyle}
      data-event-category="Links"
      data-event-action="Click"
      data-event-label={linkUrl}>
        {children}
      </IconBoxLink>
    );
  }
}
SocialButtonShell.propTypes = {
  style: PropTypes.object,
  containerLevelStyle: PropTypes.string,
  linkUrl: PropTypes.string,
}