import React from 'react';
import PropTypes from 'prop-types';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';

function CredentialInput(props) {
  const {
    htmlIdName,
    inputTitle,
    inputType,
    contentObjectName,
    contentObjectPropertyValue,
  } = props;
  return (
    <FormControl>
      <InputLabel
        htmlFor={`${contentObjectName}${htmlIdName}`}
      >
        {inputTitle}
      </InputLabel>
      <Input
        id={`${contentObjectName}${htmlIdName}`}
        value={contentObjectPropertyValue}
        type={inputType}
        onChange={inputEvent =>
          props.handleFormChange(inputEvent, contentObjectName)}
      />
    </FormControl>
  );
}

CredentialInput.propTypes = {
  htmlIdName: PropTypes.string,
  inputTitle: PropTypes.string,
  inputType: PropTypes.string,
  contentObjectName: PropTypes.string,
  contentObjectPropertyValue: PropTypes.string,
  handleFormChange: PropTypes.func.isRequired,
};

CredentialInput.defaultProps = {
  htmlIdName: '',
  inputTitle: '',
  inputType: '',
  contentObjectName: '',
  contentObjectPropertyValue: '',
};

export default CredentialInput;
