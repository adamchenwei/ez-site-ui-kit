import { Component } from 'react'; import PropTypes from 'prop-types';

export default class StyledComponentWrapper extends Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      children
    );
  }
}
StyledComponentWrapper.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
