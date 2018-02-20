import React, { Component } from 'react'; import PropTypes from 'prop-types';
import StyledComponentWrapper from './../StyledComponentWrapper/StyledComponentWrapper';
import {
  ContactFormContainer,
  ContactFormLegend,
  ContactFormInput,
  ContactFormTextarea,
  ContactFormSubmitButton,
} from './style';
export default class ContactForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      style,
      receiverEmail,
    } = this.props;
    return (
      <StyledComponentWrapper>
        <ContactFormContainer action={`https://formspree.io/${receiverEmail}`}
            method="POST">
            <ContactFormLegend gridAreaId="name">Name</ContactFormLegend>
            <ContactFormInput gridAreaId="first-name" name={'customerFirstName'}
              placeholder="First Name" />
            <ContactFormInput
              responsive={true}
              gridAreaId="last-name" name={'customerLastName'}
              placeholder="Last Name" />
            <ContactFormLegend gridAreaId="email">Email</ContactFormLegend>
            <ContactFormInput name={'customerEmail'}
              gridAreaId="email"
              type="email"
              placeholder="i.e. youremail@gmail.com"/>
            <ContactFormLegend gridAreaId="phone">Phone</ContactFormLegend>
            <ContactFormInput name={'customerPhone'}
              gridAreaId="phone"
              type="tel"
              placeholder="i.e. 3470000000"/>
            <ContactFormLegend gridAreaId="message" >Message</ContactFormLegend>
            <ContactFormTextarea
              gridAreaId="message"
              name="message"
              placeholder="please send us as much detail as possible. We appreciate your support"/>
            <ContactFormSubmitButton type="submit" value="Send" />
        </ContactFormContainer>
      </StyledComponentWrapper>
    );
  }
}

ContactForm.propTypes = {
  style: PropTypes.object,
  receiverEmail: PropTypes.string,
};

ContactForm.defaultProps = {
  style: {},
  receiverEmail: 'support@naturalorchards.us',
};