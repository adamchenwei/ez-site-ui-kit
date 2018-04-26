import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import childrenPropType from '../../../proptypes/children';

const EzTester = (props) => {
  const {
    children,
    val,
  } = props;
  const selectedProps = omit(props, ['children']);
  return <h1 {...selectedProps} >EzTester {children}{val}</h1>;
};

EzTester.propTypes = {
  children: childrenPropType,
  val: PropTypes.string,
};

EzTester.defaultProps = {
  children: null,
  val: '',
};

export default EzTester;
