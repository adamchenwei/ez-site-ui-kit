import CustomizableForm from './index';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';


const MOCK_INSTRUCTION_1 = [
  {
    id: 1,
    fieldLegendTitle: 'First & Last Name',
    fieldName: 'firstNLastName',
    inputType: 'text',
    placeholderText: 'i.e. Mohammmad Ibn Uthaymeen',
  },
  {
    id: 1,
    fieldLegendTitle: 'Email',
    fieldName: 'email',
    inputType: 'email',
    placeholderText: 'i.e. abc@gmail.com',
  },
  {
    id: 1,
    fieldLegendTitle: 'Feedback',
    fieldName: 'feedback',
    inputType: 'text-area',
    placeholderText: 'i.e. I saw problem with the site that...',
  },
];

const MOCK_INSTRUCTION_2 = [
  {
    id: 1,
    fieldLegendTitle: 'Masjid Name',
    fieldName: 'masjidName',
    inputType: 'text',
    placeholderText: 'i.e. Masjid Uthaymeen',
  },
  {
    id: 2,
    fieldLegendTitle: 'Zipcode',
    fieldName: 'zipcode',
    inputType: 'text',
    placeholderText: 'i.e. 08611',
  },
  {
    id: 3,
    fieldLegendTitle: 'Website',
    fieldName: 'website',
    inputType: 'text',
    placeholderText: 'i.e. http://www.masjid-name.com',
  },
  {
    id: 4,
    fieldLegendTitle: 'Facebook',
    fieldName: 'facebook',
    inputType: 'text',
    placeholderText: 'i.e. http://www.facebook.com/masjid-name',
  },
  {
    id: 5,
    fieldLegendTitle: 'Twitter',
    fieldName: 'twitter',
    inputType: 'text',
    placeholderText: 'i.e. http://www.twitter.com/masjid-name',
  },
  {
    id: 6,
    fieldLegendTitle: 'Spreaker',
    fieldName: 'spreak',
    inputType: 'text',
    placeholderText: 'i.e. http://www.spreaker.com/masjid-name',
  },
  {
    id: 7,
    fieldLegendTitle: 'Mixlr',
    fieldName: 'mixlr',
    inputType: 'text',
    placeholderText: 'i.e. http://www.mixlr.com/masjid-name',
  },
  {
    id: 8,
    fieldLegendTitle: 'Email',
    fieldName: 'email',
    inputType: 'email',
    placeholderText: 'i.e. support@masjid-name.com',
  },
  {
    id: 9,
    fieldLegendTitle: 'Phone',
    fieldName: 'phone',
    inputType: 'tel',
    placeholderText: 'i.e. support@masjid-name.com',
  },
  {
    id: 10,
    fieldLegendTitle: 'Paypal Donation Page',
    fieldName: 'paypal',
    inputType: 'text',
    placeholderText: 'the page will require verification upon acceptance! in shaa Allah',
  },
  {
    id: 11,
    fieldLegendTitle: 'Your Email',
    fieldName: 'userEmail',
    inputType: 'email',
    placeholderText: 'i.e. myemail@gmail.com',
  },
  {
    id: 12,
    fieldLegendTitle: 'Your Name',
    fieldName: 'userName',
    inputType: 'text',
    placeholderText: 'i.e. Mohammad Khalid',
  },
  {
    id: 13,
    fieldLegendTitle: 'Best Time To Contact',
    fieldName: 'bestTimeToContact',
    inputType: 'text-area',
    placeholderText: 'i.e. Anytime, 5~7pm every day or type NA for no contact',
  },
];

storiesOf('Customizable Form', module)
.add('3 text input fields with custom text', () => <CustomizableForm instruction={MOCK_INSTRUCTION_1}/>)
.add('multiple mixed fields with custom text', () => <CustomizableForm instruction={MOCK_INSTRUCTION_2}/>)
