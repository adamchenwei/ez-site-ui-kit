import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import childrenPropType from '../../../proptypes/children';

const AtomTemplateComponent = (props) => {
  const {
    children,
    val,
  } = props;
  const selectedProps = omit(props, ['children']);
  return <h1 {...selectedProps} >{children}{val}</h1>;
};

AtomTemplateComponent.propTypes = {
  children: childrenPropType,
  val: PropTypes.string,
};

AtomTemplateComponent.defaultProps = {
  children: null,
  val: '',
};

export default AtomTemplateComponent;
