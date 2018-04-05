import React from 'react';
import PropTypes from 'prop-types';
import PageShell from '../PageShell/PageShell';
import GridItemShell from '../../components/GridItem/GridItemShell';
import ContactForm from '../../components/ContactForm';
import Container from './style/Container';
import LeftColumn from './style/LeftColumn';
import Headline from './style/Headline';

function Contact(props) {
  return (

    <PageShell
      containerLevelClass=""
      style={{}}
    >
      <GridItemShell>
        <Container>
          <Headline>{'We\'d love to hear from you!'}</Headline>
          <LeftColumn><ContactForm /></LeftColumn>
        </Container>
      </GridItemShell>
      {props.children}
    </PageShell>
  );
}

Contact.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
};
Contact.defaultProps = {
  children: null,
};
export default Contact;
