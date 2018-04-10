import React, { Component } from 'react'; import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import { www___naturalorchards__us as ContentCache, ContentSynchronizer } from 'ez-site-content-store';

import BreadCrumb from '../BreadCrumb';
import ShareButtonsBar from '../ShareButtonsBar';
import ProductGallery from '../ProductGallery';

import ContainerRow from './style/ContainerRow';
import ProductSlideShowCol from './style/ProductSlideShowCol';
import ProductDescriptionCol from './style/ProductDescriptionCol';
import ProductDescriptionTitleContainer from './style/ProductDescriptionTitleContainer';
import ProductDescriptionPriceContainer from './style/ProductDescriptionPriceContainer';
import DescriptionsSection from './style/DescriptionsSection';
import DescriptionTitle from './style/DescriptionTitle';
import AddToCartContainer from './style/AddToCartContainer';

function showBreadCrumb(title) {
  // better switch to getGridItem! More effective...
  const BREADCRUMB_GRID_ID = 8;
  const breadCrumb = ContentSynchronizer.getItem('grids', 'gridItemId', BREADCRUMB_GRID_ID, true);
  return (
    <Col
      xs={{ size: 12 }}
      sm={{ size: 12 }}
      md={{ size: 12 }}
      lg={{ size: 12 }}
      xl={{ size: 12 }}
    >
      {/* TODO: need style tweak  */}
      <BreadCrumb
        content={{ title }}
        style={breadCrumb.gridContent.style}
      />
    </Col>
  );
}
export default class ProductDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.content.slideShow.length
        ? this.props.content.slideShow[0].images
        : [],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.content.slideShow) {
      this.setState({
        images: nextProps.content.slideShow[0].images,
      });
    }
  }



  render() {
    // WARNNING: NEVER ADD  row WITHOUT no-gutters !!! CAUSE GHOST MARGIN ON THE RIGHT OF THE PAGE!!!!!
    const {
      content,
    } = this.props;

    const {
      title,
      description,
      price,
      availableQuantity,
      properties,
    } = content;
    const { site } = ContentCache;
    const {
      ingredients,
      allergyInformation,
      storageInformation,
    } = properties;

    const slideShowImages = this.state.images;
    const imageUrl = slideShowImages[0].url;
    const images = slideShowImages.map((image) => {//eslint-disable-line
      return (
        {
          content: {
            url: image.url,
          },
        }
      )
    });
    // <img className='img-fluid' src={imageUrl} />
    return (
      <ContainerRow>
        {showBreadCrumb(title)}
        {/* <ProductSlideShow */}
        <ProductSlideShowCol
          xs={{ size: 12 }}
          sm={{ size: 12 }}
          md={{ size: 4 }}
          lg={{ size: 4 }}
          xl={{ size: 4 }}
        >
          <ProductGallery images={images} />

        </ProductSlideShowCol>
        {/* <ProductDescriptions */}
        <ProductDescriptionCol
          xs={{ size: 12 }}
          sm={{ size: 12 }}
          md={{ size: 8 }}
          lg={{ size: 8 }}
          xl={{ size: 8 }}
        >
          <ProductDescriptionTitleContainer>
            <span>{title}</span>
          </ProductDescriptionTitleContainer>

          {
            price.regular ?
              <ProductDescriptionPriceContainer>
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
            <DescriptionTitle>
              Allergy Information:
            </DescriptionTitle> <span>{allergyInformation}</span>
          </DescriptionsSection>

          <DescriptionsSection>
            <DescriptionTitle>
              Storage Information:
            </DescriptionTitle> <span>{storageInformation}</span>
          </DescriptionsSection>

          <AddToCartContainer>
            <section className="productDescriptions__availableQuantity">
              <span>{availableQuantity}</span>
            </section>

            {/* <ProductPurchaseBox */}
            <section className="productPurchaseBox__container">
              Quantity: {/* choose quantity box */}
              <button> Add To Cart </button>
            </section>
          </AddToCartContainer>

          <section className="productDescriptions__shareButtons">
            <section className="shareButtonsBar shareButtonsBar__container">
              <ShareButtonsBar
                sharedImageUrl={imageUrl}
                sharedTitle={title}
                sharedDescriptionText={description}
                hashtags={site.domain.name}
              />
            </section>
          </section>
        </ProductDescriptionCol>
      </ContainerRow>
    );
  }
}

ProductDisplay.propTypes = {
  contentStyle: PropTypes.arrayOf(PropTypes.any).isRequired,
  content: PropTypes.objectOf(PropTypes.any).isRequired,
};
