import React from 'react'; import PropTypes from 'prop-types';
import IconBoxLink from './style/IconBoxLink';
import childrenPropTypes from '../../proptypes/childrenPropTypes';

export default function SocialButtonShell(props) {
  const {
    containerLevelStyle,
    children,
    linkUrl,
  } = props;

  return (
    <IconBoxLink
      href={linkUrl || '/'}
      className={containerLevelStyle}
      data-event-category="Links"
      data-event-action="Click"
      data-event-label={linkUrl}
    >
      {children}
    </IconBoxLink>
  );
}
SocialButtonShell.propTypes = {
  containerLevelStyle: PropTypes.string,
  linkUrl: PropTypes.string,
  children: childrenPropTypes,
};

SocialButtonShell.defaultProps = {
  containerLevelStyle: '',
  linkUrl: '',
  children: null,
};
