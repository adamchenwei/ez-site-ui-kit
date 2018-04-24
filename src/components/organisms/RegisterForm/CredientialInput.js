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
        onChange={event =>
          this.props.handleFormChange(event, contentObjectName)}
      />
    </FormGroup>
  );
}

CredentialInput.propTypes = {
  htmlIdName: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  contentObjectName: PropTypes.string.isRequired,
  contentObjectPropertyValue: PropTypes.oneOfType([PropTypes.any]).isRequired,
};
export default CredentialInput;
