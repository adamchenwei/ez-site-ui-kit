import React from 'react';
import PropTypes from 'prop-types';
import StyledComponentWrapper from './../StyledComponentWrapper/StyledComponentWrapper';
import ContactFormContainer from './style/ContactFormContainer';
import ContactFormLegend from './style/ContactFormLegend';
import ContactFormInput from './style/ContactFormInput';
import ContactFormTextarea from './style/ContactFormTextarea';
import ContactFormSubmitButton from './style/ContactFormSubmitButton';

export default function ContactForm(props) {
  const {
    receiverEmail,
  } = props;
  return (
    <StyledComponentWrapper>
      <ContactFormContainer
        action={`https://formspree.io/${receiverEmail}`}
        method="POST"
      >
        <ContactFormLegend gridAreaId="name">Name</ContactFormLegend>
        <ContactFormInput
          gridAreaId="first-name"
          name="customerFirstName"
          placeholder="First Name"
        />
        <ContactFormInput
          responsive
          gridAreaId="last-name"
          name="customerLastName"
          placeholder="Last Name"
        />
        <ContactFormLegend gridAreaId="email">Email</ContactFormLegend>
        <ContactFormInput
          name="customerEmail"
          gridAreaId="email"
          type="email"
          placeholder="i.e. youremail@gmail.com"
        />
        <ContactFormLegend gridAreaId="phone">Phone</ContactFormLegend>
        <ContactFormInput
          name="customerPhone"
          gridAreaId="phone"
          type="tel"
          placeholder="i.e. 3470000000"
        />
        <ContactFormLegend gridAreaId="message" >Message</ContactFormLegend>
        <ContactFormTextarea
          gridAreaId="message"
          name="message"
          placeholder="please send us as much detail as possible. We appreciate your support"
        />
        <ContactFormSubmitButton type="submit" value="Send" />
      </ContactFormContainer>
    </StyledComponentWrapper>
  );
}

ContactForm.propTypes = {
  receiverEmail: PropTypes.string,
};

ContactForm.defaultProps = {
  receiverEmail: 'support@naturalorchards.us',
};
