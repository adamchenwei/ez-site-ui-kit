 import React, { Component } from 'react'; import PropTypes from 'prop-types';
 import {Container, Row, Col} from 'reactstrap';

import ContentSynchronizer from '../ContentSynchronizer/ContentSynchronizer';
import BreadCrumb from '../BreadCrumb';
import getGridItem from './../../util/get/getGridItem';
import ShareButtonsBar from '../ShareButtonsBar';
import ProductGallery from '../ProductGallery';

import site from '../ContentCache/site';

import ContainerRow from './style/ContainerRow';
import ProductSlideShowCol from './style/ProductSlideShowCol';
import ProductDescriptionCol from './style/ProductDescriptionCol';
import ProductDescriptionTitleContainer from './style/ProductDescriptionTitleContainer';
import ProductDescriptionPriceContainer from './style/ProductDescriptionPriceContainer';
import DescriptionsSection from './style/DescriptionsSection';
import DescriptionTitle from './style/DescriptionTitle';
import AddToCartContainer from './style/AddToCartContainer';
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
        <Col
          xs={{size: 12,}}
          sm={{size: 12,}}
          md={{size: 12,}}
          lg={{size: 12,}}
          xl={{size: 12,}}
        >
          {/* TODO: need style tweak  */}
          <BreadCrumb content={ {title,}}
            style={breadCrumb.gridContent.style}/>
        </Col>
      )
      // return (
      //   <section className={`breadCrumb__container
      //     col-12
      //     col-sm-12
      //     col-md-12
      //     col-lg-12
      //     col-xl-12`}>
      //     <BreadCrumb content={ {title,}}
      //       style={breadCrumb.gridContent.style}/>
      //   </section>
      // )
    }

  render() {
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
      <ContainerRow>
        {this.showBreadCrumb(title)}
        {/*<ProductSlideShow*/}
        <ProductSlideShowCol
          xs={{size: 12,}}
          sm={{size: 12,}}
          md={{size: 4,}}
          lg={{size: 4,}}
          xl={{size: 4,}}
        >
          <ProductGallery images={images} />

        </ProductSlideShowCol>
        {/*<ProductDescriptions*/}
        <ProductDescriptionCol
          xs={{size: 12,}}
          sm={{size: 12,}}
          md={{size: 8,}}
          lg={{size: 8,}}
          xl={{size: 8,}}
        >
          <ProductDescriptionTitleContainer>
            <span>{title}</span>
          </ProductDescriptionTitleContainer>

          {
            price.regular
            ? <ProductDescriptionPriceContainer>
                <span>{price.regular}</span>
              </ProductDescriptionPriceContainer>
            : null
          }

          <DescriptionsSection>
            <DescriptionTitle>Description:</DescriptionTitle> <span>{description}</span>
          </DescriptionsSection>

          <DescriptionsSection>
            <DescriptionTitle>Ingredients:</DescriptionTitle> <span>{ingredients}</span>
          </DescriptionsSection>

          <DescriptionsSection>
            <DescriptionTitle>Allergy Information:</DescriptionTitle> <span>{allergyInformation}</span>
          </DescriptionsSection>

          <DescriptionsSection>
            <DescriptionTitle>Storage Information:</DescriptionTitle> <span>{storageInformation}</span>
          </DescriptionsSection>

          <AddToCartContainer>
            <section className='productDescriptions__availableQuantity'>
              <span>{availableQuantity}</span>
            </section>

            {/*<ProductPurchaseBox*/}
            <section className='productPurchaseBox__container'>
              Quantity: {/*choose quantity box*/}
              <button> Add To Cart </button>
            </section>
          </AddToCartContainer>

          <section className='productDescriptions__shareButtons'>
            <section className='shareButtonsBar shareButtonsBar__container'>
              <ShareButtonsBar
                sharedImageUrl={imageUrl}
                sharedTitle={title}
                sharedDescriptionText={description}
                hashtags={site.domain.name}/>
            </section>
          </section>
        </ProductDescriptionCol>
      </ContainerRow>
    );
    // return (
    //   <section className={containerLevelStyle}>
    //     {this.showBreadCrumb(title)}
    //     {/*<ProductSlideShow*/}
    //     <section className={`
    //       productSlideShow__container
    //       col-12
    //       col-sm-12
    //       col-md-4
    //       col-lg-4
    //       col-xl-4
    //     `}>
    //       <ProductGallery images={images} />

    //     </section>
    //     {/*<ProductDescriptions*/}
    //     <section className={`
    //       productDescriptions__container
    //       over-ride-bootstrap
    //       col-12
    //       col-sm-12
    //       col-md-8
    //       col-lg-8
    //       col-xl-8
    //     `}>
    //       <section className='productDescriptions__title'>
    //         <span>{title}</span>
    //       </section>

    //       {
    //         price.regular
    //         ? <section className='productDescriptions__price'>
    //             <span>{price.regular}</span>
    //           </section>
    //         : null
    //       }

    //       <section className='productDescriptions__description'>
    //         <span className='productDescriptions__description--title'>Description:</span> <span>{description}</span>
    //       </section>

    //       <section className='productDescriptions__ingredients'>
    //         <span className='productDescriptions__ingredients--title'>Ingredients:</span> <span>{ingredients}</span>
    //       </section>

    //       <section className='productDescriptions__allergyInformation'>
    //         <span className='productDescriptions__allergyInformation--title'>Allergy Information:</span> <span>{allergyInformation}</span>
    //       </section>

    //       <section className='productDescriptions__storageInformation'>
    //         <span className='productDescriptions__storageInformation--title'>Storage Information:</span> <span>{storageInformation}</span>
    //       </section>

    //       <section className='productAddToCart__container'>
    //         <section className='productDescriptions__availableQuantity'>
    //           <span>{availableQuantity}</span>
    //         </section>

    //         {/*<ProductPurchaseBox*/}
    //         <section className='productPurchaseBox__container'>
    //           Quantity: {/*choose quantity box*/}
    //           <button> Add To Cart </button>
    //         </section>
    //       </section>

    //       <section className='productDescriptions__shareButtons'>
    //         <section className='shareButtonsBar shareButtonsBar__container'>
    //           <ShareButtonsBar
    //             sharedImageUrl={imageUrl}
    //             sharedTitle={title}
    //             sharedDescriptionText={description}
    //             hashtags={site.domain.name}/>
    //         </section>
    //       </section>
    //     </section>
    //   </section>
    // );
  }
}

ProductDisplay.propTypes = {
  contentStyle: PropTypes.array.isRequired,
  productName: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
}