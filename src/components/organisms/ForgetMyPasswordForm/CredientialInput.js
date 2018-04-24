import React from 'react';
import PropTypes from 'prop-types';
// import Input, { InputLabel } from 'material-ui/Input';
// import { FormControl } from 'material-ui/Form';
import { Input, Label, FormGroup } from 'reactstrap';

function CredentialInput(props) {
  const {
    htmlIdName,
    inputTitle,
    inputType,
    contentObjectName,
    contentObjectPropertyValue,
  } = props;
  return (
    <FormGroup>
      <Label
        htmlFor={`${contentObjectName}${htmlIdName}`}
      >
        {inputTitle}
      </Label>
      <Input
        id={`${contentObjectName}${htmlIdName}`}
        value={contentObjectPropertyValue}
        type={inputType}
        onChange={onChangeEvent =>
          props.handleFormChange(onChangeEvent, contentObjectName)
        }
      />
    </FormGroup>
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
