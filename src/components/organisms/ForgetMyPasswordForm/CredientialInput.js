import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import RemoveIcon from 'material-ui-icons/Remove';
import Card from 'material-ui/Card';
import Chip from 'material-ui/Chip';

import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';

function CredentialInput(props) {
  const {
    htmlIdName,
    inputTitle,
    inputType,
    contentObjectName,
    contentEmptyState,
    contentObjectPropertyValue,
    contentObjectPropertyName,
    index,
    event,
    handleFormChange,
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
        onChange={event =>
          this.props.handleFormChange(event, contentObjectName,
          )}
      />
    </FormControl>
  );
}

CredentialInput.propTypes = {
  htmlIdName: PropTypes.string,
  inputTitle: PropTypes.string,
  inputType: PropTypes.string,
  contentObjectName: PropTypes.string,
  contentEmptyState: PropTypes.any,
  contentObjectPropertyValue: PropTypes.any,
  index: PropTypes.number,
  event: PropTypes.object,
  handleFormChange: PropTypes.func.isRequired,
};

export default CredentialInput;
