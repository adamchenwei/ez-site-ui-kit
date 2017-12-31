import React, { Component } from 'react'; import PropTypes from 'prop-types';

import Lightbox from 'react-images';
import scrollToDom from './../../util/layout/scrollToDom';
import {
  ThumbnailImage,
  ThumbnailFrame,
} from './style';

export default class ThumbnailImageHolder extends Component {

  constructor(props) {
    super(props);
    this.changeImage = this.changeImage.bind(this);
  }

  changeImage() {
    //HACK - for some reason first time the dom will be null!!!
    scrollToDom();

    this.props.changeImage(this.props.src);
  }

  openToggle() {
    this.setState({
      isOpen: this.state.isOpen,
    });
  }
  render() {
    let {
      src,
    } = this.props;
    const COMPONENT_NAME = 'ThumbnailImageHolder';
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
  src: PropTypes.string,
  changeImage: PropTypes.func,
  scrollTargetDom: PropTypes.any,
}