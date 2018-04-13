import React from 'react';
import SlideBasicCallToAction from '../../molecules/SlideBasicCallToAction';
import PositionedSlideContainer from './style/PositionedSlideContainer';

const PositionedSlideShell = props => (
  <PositionedSlideContainer>
    <SlideBasicCallToAction {...props} />
  </PositionedSlideContainer>
);

export default PositionedSlideShell;
