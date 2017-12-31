 import React, { Component } from 'react'; import PropTypes from 'prop-types';
import ContentSynchronizer from '../ContentSynchronizer/ContentSynchronizer';
import BreadCrumb from '../BreadCrumb';
import getGridItem from './../../util/get/getGridItem';
import ShareButtonsBar from '../ShareButtonsBar';
import ProductGallery from '../ProductGallery';

import site from '../ContentCache/site';

export default class ProductDisplay extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: this.props.content.slideShow.length
        ? this.props.content.slideShow[0].images
        : [],
    }
    this.getContentComponent.bind(this);
    this.getStyle.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content.slideShow) {
      this.setState({
        images: nextProps.content.slideShow[0].images,
      });
    }
  }
  getStyle(name) {
    //TODO: may need to expand to allow multiple styles!
    const styleName = name[0];
    switch (styleName) {
      case 'center-text':
        return 'productDisplay__text--center';
      default:
        return 'style-name-not-found';
    }
  }

  getContentComponent(type, data) {
    switch (type) {
      case 'textOnly':
        return <span className='productDisplay__textBody'>{data.text}</span>;
      default:
        return 'Woops! No Notification Type Found!';
    }
  }

  showBreadCrumb(title) {
      //better switch to getGridItem! More effective...
      const BREADCRUMB_GRID_ID = 8;
      const breadCrumb = ContentSynchronizer.getItem(
        'grids', 'gridItemId', BREADCRUMB_GRID_ID, true);
      return (
        <section className={`breadCrumb__container
          col-12
          col-sm-12
          col-md-12
          col-lg-12
          col-xl-12`}>
          <BreadCrumb content={ {title,}}
            style={breadCrumb.gridContent.style}/>
        </section>
      )
    }

  render() {
    require('./ProductDisplay.scss');
    const contentStyle = this.getStyle(this.props.contentStyle);
    //WARNNING: NEVER ADD  row WITHOUT no-gutters !!! CAUSE GHOST MARGIN ON THE RIGHT OF THE PAGE!!!!!
    const containerLevelStyle = `productDisplay__container ${contentStyle} row no-gutters`;
    const {
      productName,
      content,
    } = this.props;

    const {
      title,
      description,
      price,
      availableQuantity,
      properties,
    } = content;

    const {
      ingredients,
      allergyInformation,
      storageInformation,
    } = properties;

    const slideShowImages = this.state.images;
    const imageUrl = slideShowImages[0].url;
    const images = slideShowImages.map((image, index) => {
      return {
        content: {
          url: image.url,
        }
      };
    })
    //<img className='img-fluid' src={imageUrl} />
    return (
      <section className={containerLevelStyle}>
        {this.showBreadCrumb(title)}
        {/*<ProductSlideShow*/}
        <section className={`
          productSlideShow__container
          col-12
          col-sm-12
          col-md-4
          col-lg-4
          col-xl-4
        `}>
          <ProductGallery images={images} />

        </section>
        {/*<ProductDescriptions*/}
        <section className={`
          productDescriptions__container
          over-ride-bootstrap
          col-12
          col-sm-12
          col-md-8
          col-lg-8
          col-xl-8
        `}>
          <section className='productDescriptions__title'>
            <span>{title}</span>
          </section>

          {
            price.regular
            ? <section className='productDescriptions__price'>
                <span>{price.regular}</span>
              </section>
            : null
          }

          <section className='productDescriptions__description'>
            <span className='productDescriptions__description--title'>Description:</span> <span>{description}</span>
          </section>

          <section className='productDescriptions__ingredients'>
            <span className='productDescriptions__ingredients--title'>Ingredients:</span> <span>{ingredients}</span>
          </section>

          <section className='productDescriptions__allergyInformation'>
            <span className='productDescriptions__allergyInformation--title'>Allergy Information:</span> <span>{allergyInformation}</span>
          </section>

          <section className='productDescriptions__storageInformation'>
            <span className='productDescriptions__storageInformation--title'>Storage Information:</span> <span>{storageInformation}</span>
          </section>

          <section className='productAddToCart__container'>
            <section className='productDescriptions__availableQuantity'>
              <span>{availableQuantity}</span>
            </section>

            {/*<ProductPurchaseBox*/}
            <section className='productPurchaseBox__container'>
              Quantity: {/*choose quantity box*/}
              <button> Add To Cart </button>
            </section>
          </section>

          <section className='productDescriptions__shareButtons'>
            <section className='shareButtonsBar shareButtonsBar__container'>
              <ShareButtonsBar
                sharedImageUrl={imageUrl}
                sharedTitle={title}
                sharedDescriptionText={description}
                hashtags={site.domain.name}/>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

ProductDisplay.propTypes = {
  contentStyle: PropTypes.array.isRequired,
  productName: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
}