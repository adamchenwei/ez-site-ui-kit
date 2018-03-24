import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from './style/Container';
import FormLegend from './style/FormLegend';
import InputField from './style/InputField';
import FormTextarea from './style/FormTextarea';

export default class FormInput extends Component {
  constructor(props) {
    super(props);
    const {
      inputType,
    } = props;
    this.getInputField = this.getInputField.bind(this);
    this.getTextArea = this.getTextArea.bind(this);
    let InputComponent = null;
    switch (inputType) {
      case 'text-area':
        InputComponent = this.getTextArea;
        break;
      case 'email':
      case 'text':
      case 'phone':
        InputComponent = this.getInputField;
        break;
      default:
        break;
    }
    this.InputComponent = InputComponent;
  }

  getInputField() {
    const {
      fieldLegendTitle,
      fieldName,
      inputType,
      placeholderText,
    } = this.props;
    return (
      <InputField
        name={fieldName}
        gridAreaId={inputType}
        type={inputType}
        placeholder={placeholderText}
      />
    );
  }
  getTextArea() {
    const {
      fieldLegendTitle,
      fieldName,
      inputType,
      placeholderText,
    } = this.props;

    return (
      <FormTextarea
        gridAreaId={inputType}
        name={fieldName}
        placeholder={placeholderText}
      />
    );
  }
  render() {
    const {
      fieldLegendTitle,
      fieldName,
      inputType,
      placeholderText,

    } = this.props;
    const InputComponent = this.InputComponent;
    return (
      <Container>
        <FormLegend gridAreaId={inputType}>{fieldLegendTitle}</FormLegend>
        {InputComponent ? <InputComponent /> : null}
      </Container>
    );
  }
}

FormInput.propTypes = {
  fieldLegendTitle: PropTypes.string,
  fieldName: PropTypes.string,
  inputType: PropTypes.string,
  placeholderText: PropTypes.string,
};

FormInput.defaultProps = {
  fieldLegendTitle: '',
  fieldName: '',
  inputType: '',
  placeholderText: '',
};
