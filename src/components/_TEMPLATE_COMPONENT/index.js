import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { Col, Row } from 'reactstrap';
import Container from './style/Container';

const TemplateComponent = (props) => {
  const {
    val,
    className,
    style,
  } = props;
  return (
    <Container style={style} className={className} ><Row>
      <Col>Success {val}</Col>
    </Row>
    </Container>
  );
};

TemplateComponent.propTypes = {
  val: PropTypes.string,
  style: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  className: PropTypes.string,
};

TemplateComponent.defaultProps = {
  val: '',
  style: {},
  className: '',
};

export default TemplateComponent;
