import FormInput from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';

storiesOf('FormInput', module)
  .add('default', () => <FormInput />)
  .add('email', () =>
    (<FormInput
      fieldLegendTitle="Your Email"
      fieldName="emailInput"
      inputType="email"
      placeholderText="i.e. mohammad@gmail.com"
    />))
  .add('text', () =>
    (<FormInput
      fieldLegendTitle="Your Text"
      fieldName="textInput"
      inputType="text"
      placeholderText="text here"
    />))
  .add('text-area', () =>
    (<FormInput
      fieldLegendTitle="Your Text"
      fieldName="textInput"
      inputType="text-area"
      placeholderText="text here"
    />));
