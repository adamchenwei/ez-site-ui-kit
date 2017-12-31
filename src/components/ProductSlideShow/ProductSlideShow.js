import React, { Component } from 'react'; import PropTypes from 'prop-types';

export default class ProductSlideShow extends Component {
  constructor(props) {
    super(props);
    this.getContentComponent.bind(this);
    this.getStyle.bind(this);
  }

  getStyle(name) {
    //TODO: may need to expand to allow multiple styles!
    const styleName = name[0];
    switch (styleName) {
      case 'center-text':
        return 'ProductSlideShow__text--center';
      default:
        return 'style-name-not-found';
    }
  }

  getContentComponent(type, data) {
    switch (type) {
      case 'textOnly':
        return <span className='productSlideShow__textBody'>{data.text}</span>;
      default:
        return 'Woops! No Notification Type Found!';
    }
  }

  render() {
    require('./ProductSlideShow.scss');
    const contentStyle = this.getStyle(this.props.contentStyle);
    const containerLevelStyle = `productSlideShow__container ${contentStyle}`;
    const type = this.props.contentType;
    const data = this.props.contentData;
    const contentComponent = this.getContentComponent(type, data);
    return (
      <section className={containerLevelStyle}>
        {contentComponent}
      </section>
    );
  }
}

ProductSlideShow.propTypes = {
  contentData: PropTypes.object.isRequired,
  contentStyle: PropTypes.array.isRequired,
  contentType: PropTypes.string.isRequired,
};
