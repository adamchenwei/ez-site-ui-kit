import React from 'react'; import PropTypes from 'prop-types';

import capToCamelCase from './../../util/transform/capToCamelCase';
import SocialButtonShell from './SocialButtonShell';
import IconImage from './style/IconImage';

export default function SocialIcon(props) {
  const {
    style,
    srcUrl,
    linkUrl,
  } = props;

  const componentCSSName = capToCamelCase('SocialIcon');
  return !srcUrl && !linkUrl ? <section /> : (
    <SocialButtonShell
      containerLevelStyle={`${componentCSSName}__container`}
      style={style}
      linkUrl={linkUrl}
    >
      <IconImage
        src={srcUrl}
      />
    </SocialButtonShell>
  );
}

SocialIcon.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  srcUrl: PropTypes.string,
  linkUrl: PropTypes.string,
};

SocialIcon.defaultProps = {
  style: {},
  srcUrl: '',
  linkUrl: '',
};
