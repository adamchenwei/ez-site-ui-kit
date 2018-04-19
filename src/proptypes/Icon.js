import PropTypes from 'prop-types';

const PropTypesIcon = PropTypes.shape({
  viewBox: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
});

export default PropTypesIcon;
