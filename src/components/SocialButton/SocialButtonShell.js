import React from 'react'; import PropTypes from 'prop-types';
import { IconBoxLink } from './style';
import propTypesChildren from '../../proptypes/children';

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
  children: propTypesChildren,
};

SocialButtonShell.defaultProps = {
  containerLevelStyle: '',
  linkUrl: '',
  children: null,
};
