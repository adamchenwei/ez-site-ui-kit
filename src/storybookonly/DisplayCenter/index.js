import React from 'react';
import PropTypes from 'prop-types';
// import { ic_help_outline as helpIcon } from 'react-icons-kit/md/ic_help_outline';
import Container from './style/Container';
// import CornerNote from './style/CornerNote';
// import TooltipIconNew from '../../components/TooltipIconNew';

const DisplayCenter = (props) => {
  const {
    className,
    style,
    // innerStyle,
    innerWidth,
    borderless,
  } = props;

  return (
    <Container
      className={className}
      style={style}
      borderless={borderless}
    >
      <div style={{
          // ...innerStyle,
          width: innerWidth,
        }}
      >
        {props.children}
      </div>
      {/* <CornerNote>
        <TooltipIconNew icon={helpIcon} message="display center" />
      </CornerNote> */}
    </Container>
  );
};

DisplayCenter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  // innerStyle: PropTypes.objectOf(PropTypes.any),
  innerWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  borderless: PropTypes.bool,
};

DisplayCenter.defaultProps = {
  className: '',
  style: {},
  // innerStyle: {},
  innerWidth: '100%',
  borderless: false,
};

export default DisplayCenter;
