import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Container from './style/Container';
import CtaButtonContainer from './style/CtaButtonContainer';
import CenteredCtaTextContainer from './style/CenteredCtaTextContainer';
import BackgroundImage from './style/BackgroundImage';
import Title from './style/Title';
import SubTitle from './style/SubTitle';
import Paragraph from './style/Paragraph';


export default function SlideBasicCallToAction(props) {
  const {
    style,
    className,
    title,
    subTitle,
    paragraph,
    callToActionButtonConfig,
    imageSourcePath,
  } = props;

  const CtaButton = get(callToActionButtonConfig, 'customButtonComponent');
  const CtaButtonProps = get(callToActionButtonConfig, 'customButtonComponentProps');

  return (
    <Container style={style} className={className}>
      <CenteredCtaTextContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Paragraph>{paragraph}</Paragraph>
        { CtaButton ? <CtaButtonContainer><CtaButton {...CtaButtonProps} /></CtaButtonContainer> : null}
      </CenteredCtaTextContainer>

      <BackgroundImage alt="slide-background" src={imageSourcePath} />
    </Container>
  );
}

SlideBasicCallToAction.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  title: PropTypes.string,
  subTitle: PropTypes.string,
  paragraph: PropTypes.string,
  callToActionButtonConfig: PropTypes.shape({
    title: PropTypes.string,
    callback: PropTypes.func,
    link: PropTypes.string,
    customButtonComponent: PropTypes.any,
    customButtonComponentProps: PropTypes.objectOf(PropTypes.any),
  }),
  imageSourcePath: PropTypes.string,
};

SlideBasicCallToAction.defaultProps = {
  className: '',
  style: null,
  title: '',
  subTitle: '',
  paragraph: '',
  callToActionButtonConfig: null,
  imageSourcePath: null,
};
