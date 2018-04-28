import React from 'react';
import PropTypes from 'prop-types';
// import Input, { InputLabel } from 'material-ui/Input';
// import { FormControl } from 'material-ui/Form';
import { Input, Label, FormGroup } from 'reactstrap';
import omit from 'lodash/omit';

function FormInput(props) {
  const {
    id,
    title,
  } = props;

  const inputProps = omit(props, [
    'id',
    'title',
  ]);
  return (
    <FormGroup>
      <Label
        htmlFor={id}
      >
        {title}
      </Label>
      <Input
        {
          ...inputProps
        }
      />
    </FormGroup>
  );
}

FormInput.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

FormInput.defaultProps = {
  id: '',
  title: '',
  name: 'aTestInputField',
  value: '',
  type: 'text',
  placeholder: 'your text here',
};

export default FormInput;
