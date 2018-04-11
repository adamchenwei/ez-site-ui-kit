import { storiesOf } from '@storybook/react';
import React from 'react';
import FormInput from './index';

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
