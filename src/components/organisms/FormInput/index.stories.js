import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import FormInput from './index';
import OrganismName from '../../../storybookonly/CategoryName/OrganismName';
import ezlogger from '../../../util/debug/ezlogger';
import onChange from './service/onChange';

class FormInputInteractive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state[props.inputProperties.name] = props.inputProperties.value;
    this.onChange = onChange.bind(this);
  }

  render() {
    const {
      inputProperties,
      id,
      title,
    } = this.props;
    ezlogger(this.state);
    return (
      <FormInput
        {...inputProperties}
        id={id}
        title={title}
        onChange={this.onChange}
        value={this.state[inputProperties.name]}
      />
    );
  }
}

FormInputInteractive.propTypes = {
  inputProperties: PropTypes.objectOf(PropTypes.any),
  id: PropTypes.string,
  title: PropTypes.string,
};

FormInputInteractive.defaultProps = {
  inputProperties: {
    name: 'testInputField',
    value: '',
    type: 'text',
    placeholder: '',
  },
  id: '',
  title: '',
};

storiesOf(`Component/${OrganismName}/FormInput/Stand Alone`, module)
  .add('interactive: text', () => (
    <FormInputInteractive
      id="testField"
      title="Form Input Title"
      inputProperties={{
        name: 'aTestInputField',
        value: '',
        type: 'text',
        placeholder: 'your text here',
      }}
    />
  ));
