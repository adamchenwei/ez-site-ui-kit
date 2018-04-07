import React from 'react';
import PropTypes from 'prop-types';
import AnimatedLoadingBar from './../AnimatedLoadingBar';
import MaskingBackgroundContainer from './style/MaskingBackgroundContainer';
import OpaqBackground from './style/OpaqBackground';
import LoadingMaskContainer from './style/LoadingMaskContainer';
import LogoContainer from './style/LogoContainer';
import LoadingBarContainer from './style/LoadingBarContainer';

const LOGO_IMAGE_URL = '';
const LoadingMask = (props) => {
  const {
    fullScreen,
  } = props;
  if (fullScreen) {
    return (
      <LoadingMaskContainer>
        <MaskingBackgroundContainer>
          <LogoContainer src={LOGO_IMAGE_URL} />
          <LoadingBarContainer>
            <AnimatedLoadingBar />
          </LoadingBarContainer>
        </MaskingBackgroundContainer>
        <OpaqBackground />
      </LoadingMaskContainer>
    );
  }
  return (
    <MaskingBackgroundContainer>
      <LogoContainer src={LOGO_IMAGE_URL} />
      <LoadingBarContainer>
        <AnimatedLoadingBar />
      </LoadingBarContainer>
    </MaskingBackgroundContainer>
  );
};

LoadingMask.propTypes = {
  fullScreen: PropTypes.bool,
};

LoadingMask.defaultProps = {
  fullScreen: false,
};

export default LoadingMask;
