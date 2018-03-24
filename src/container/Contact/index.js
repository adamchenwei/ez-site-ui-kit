import React, { Component } from 'react'; import PropTypes from 'prop-types';
import GridItem from '../../components/GridItem/GridItem';
import getGridItem from './../../util/get/getGridItem';
import capToCamelCase from './../../util/transform/capToCamelCase';
import PageShell from '../PageShell/PageShell';
import GridItemShell from '../../components/GridItem/GridItemShell';
import ContactForm from '../../components/ContactForm';

import {
  Container,
  LeftColumn,
  RightColumn,
  Headline,
} from './style';

const Contact = class Contact extends Component {
  render() {
    const component = capToCamelCase('SocialIcon');
    return (

      <PageShell
        containerLevelClass=""
        style={{}}
      >
        <GridItemShell>
          <Container>
            <Headline>We'd love to hear from you!</Headline>
            <LeftColumn><ContactForm /></LeftColumn>
          </Container>
        </GridItemShell>
        {this.props.children}
      </PageShell>
    );
  }
};
Contact.propTypes = {
  location: PropTypes.any,
  params: PropTypes.object,
};
export default Contact;
