import React, { Component } from 'react'; import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import ReactSVG from 'react-svg';
import concatCssClasses from './../../util/concat/concatCssClasses';
import capToCamelCase from './../../util/transform/capToCamelCase';
import SocialButtonShell from './SocialButtonShell';
import {
  IconImage,
} from './style'
export default class SocialIcon extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    //require('./SocialIcon.scss');

    const {
      content,
      style,
      type,
      srcUrl,
      linkUrl
    } = this.props;

    const componentCSSName = capToCamelCase('SocialIcon');
    return !srcUrl && !linkUrl ? <section></section> : (
      <SocialButtonShell
        containerLevelStyle={`${componentCSSName}__container`}
        style={style}
        linkUrl={linkUrl}
      >
        <IconImage
          src={srcUrl} />
      </SocialButtonShell>
    );
  }
}

SocialIcon.propTypes = {
  style: PropTypes.object,
  srcUrl: PropTypes.string,
  linkUrl: PropTypes.string,
}