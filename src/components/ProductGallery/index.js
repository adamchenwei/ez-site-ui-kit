import React, { Component } from 'react'; import PropTypes from 'prop-types';
import Container from './style/Container';
import ThumbnailsContainer from './style/ThumbnailsContainer';
import DisplayImage from './style/DisplayImage';
import DisplayImageBox from './style/DisplayImageBox';
import ThumbnailImageHolder from './ThumbnailImageHolder';

export default class ProductGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      displayImageUrl: this.props.images[0].content.url || '',
    };
    this.changeImage = this.changeImage.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps
      && newProps.images && newProps.images[0].content.url !== this.props.images[0].content.url) {
      this.setState({
        displayImageUrl: newProps.images[0].content.url || '',
      });
    }
  }
  changeImage(url) {
    this.setState({
      displayImageUrl: url,
    });
  }

  openToggle() {
    this.setState({
      isOpen: this.state.isOpen,
    });
  }
  render() {
    const {
      images,
      style,
    } = this.props;
    const COMPONENT_NAME = 'ProductGallery';
    const hasOnlyOneImage = images.length === 1 || !images.length;
    return (
      <Container
        style={style}
        componentName={COMPONENT_NAME}
        gridAreaId=""
      >
        <DisplayImageBox
          asfullHeight={hasOnlyOneImage}
          ref={(element) => { this.displayBoxDom = element; }}
        >
          <DisplayImage className="img-fluid" src={this.state.displayImageUrl} />
        </DisplayImageBox>
        {
          hasOnlyOneImage
          ? null :
          <ThumbnailsContainer>
            {
              images.map((image, index) => (
                <ThumbnailImageHolder
                  src={image.content.url}
                  key={image.id || index}
                  changeImage={this.changeImage}
                  scrollTargetDom={this.displayBoxDom}
                />
                ))
            }
          </ThumbnailsContainer>
        }
      </Container>
    );
  }
}

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.any).isRequired,
  style: PropTypes.objectOf(PropTypes.any),
};

ProductGallery.defaultProps = {
  style: {},
};
