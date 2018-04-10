import React, { Component } from 'react'; import PropTypes from 'prop-types';
import scrollToDom from './../../util/layout/scrollToDom';

import ThumbnailImage from './style/ThumbnailImage';
import ThumbnailFrame from './style/ThumbnailFrame';

export default class ThumbnailImageHolder extends Component {
  constructor(props) {
    super(props);
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage() {
    // HACK - for some reason first time the dom will be null!!!
    scrollToDom();

    this.props.changeImage(this.props.src);
  }

  openToggle() {
    this.setState({
      isOpen: this.state.isOpen,
    });
  }
  render() {
    const {
      src,
    } = this.props;
    return (
      <ThumbnailFrame>
        <ThumbnailImage
          src={src}
          onClick={this.changeImage}
        />
      </ThumbnailFrame>
    );
  }
}
ThumbnailImageHolder.propTypes = {
  src: PropTypes.string.isRequired,
  changeImage: PropTypes.func.isRequired,
};
