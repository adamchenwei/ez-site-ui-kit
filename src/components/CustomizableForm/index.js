import React, { Component } from 'react'; import PropTypes from 'prop-types';
import StyledComponentWrapper from './../StyledComponentWrapper/StyledComponentWrapper';
import FormInput from './../FormInput';

import FormContainer from './style/FormContainer';
import FormSubmitButton from './style/FormSubmitButton';

export default class CustomizableForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      style,
      receiverEmail,
      instruction,
    } = this.props;
    return (
      <FormContainer
        style={style}
        action={`https://formspree.io/${receiverEmail}`}
        method="POST"
      >

        {instruction.map((config) => {
          const {
            id,
            fieldLegendTitle,
            fieldName,
            inputType,
            placeholderText,
          } = config;
          return (
            <FormInput
              key={id}
              fieldLegendTitle={fieldLegendTitle}
              fieldName={fieldName}
              inputType={inputType}
              placeholderText={placeholderText}
            />
          );
        })}
        <FormSubmitButton type="submit" value="Send" />
      </FormContainer>
    );
  }
}

CustomizableForm.propTypes = {
  style: PropTypes.object,
  receiverEmail: PropTypes.string,
  instruction: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.object,
};

CustomizableForm.defaultProps = {
  style: {},
  receiverEmail: 'support@ezeewei.com',
  instruction: [],
  style: {},
};
