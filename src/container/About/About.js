import React, { Component } from 'react'; import PropTypes from 'prop-types';
import GridItem from '../../components/GridItem/GridItem';
import getGridItem from './../../util/get/getGridItem';
import capToCamelCase from './../../util/transform/capToCamelCase';
import PageShell from '../PageShell/PageShell';
import GridItemShell from '../../components/GridItem/GridItemShell';
import EmptyStateUnderConstruction from '../../components/EmptyStateUnderConstruction/EmptyStateUnderConstruction';
import {PageContentContainer} from '../../components/Common';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Description from './style/Description';

const About = class About extends Component {

  render() {
    require('./About.scss');

    const component = capToCamelCase('SocialIcon');
    return (

      <PageShell
        containerLevelClass={''}
        style={{}} >
         {/* <GridItemShell>
          <EmptyStateUnderConstruction />
        </GridItemShell> */}
        <PageContentContainer>
        {
          ReactHtmlParser(`
          <section style="max-width: 60%">
          <h1 style="font-size: 24px;
            text-transform: uppercase;
            text-decoration: underline;">Our Goal</h1>
          <p style="font-size: 16px;">We believe that health is the best investment. Our goal is to offer a healthy variety of nutritious snacks.</p>
          <p style="font-size: 16px;">Our portfolio of natural sun-dried fruits and raw nuts are exceptional in flavor, quality and taste.</p>
          <p style="font-size: 16px;">Our dried fruits and nuts are full of heart healthy antioxidants, essential trace elements and omega 3’s fatty acids.</p>

          <h1 style="font-size: 24px;
            text-transform: uppercase;
            text-decoration: underline;">Our difference</h1>
          <p style="font-size: 16px;">Our products are exceptional in flavor, quality and taste.</p>
          <p style="font-size: 16px;">This can be attributed to the unique eco system of the orchards, from which we source our produce.</p>
          <p style="font-size: 16px;">These orchards are largely untouched by man, protected by Mother Nature and naturally irrigated by the water run-off from the surrounding mountain ranges. </p>
          <p style="font-size: 16px;">Our products are harvested with care, naturally sun-dried and meticulously hand-packed.</p>

          <h1 style="font-size: 24px;
            text-transform: uppercase;
            text-decoration: underline;">About Us</h1>
          <p style="font-size: 16px;">We are a small organic food startup with offices in New York and a warehouse in the New Jersey Area.</p>
          <p style="font-size: 16px;">Our initiatives are directed for the benefit of our suppliers and their communities most of whom are landlocked and have never before exported their produce beyond Central and South Asia.</p>
          <p style="font-size: 16px;">We have built a value-added supply chain based on the principle of mutual trust and fair compensation practices. </p>

          <h1 style="font-size: 24px;
            text-transform: uppercase;
            text-decoration: underline;">Organic Certification</h1>
          <p style="font-size: 16px;">All our products are organic in nature, free of pesticides insecticides and any additives or preservatives. We are in the process of actively pursuing USDA organic certification for our full line of dried fruits and nuts. </p>
          </section>
          `)
        }
        </PageContentContainer>

      </PageShell>
    );
  }
};
About.propTypes = {
  location: PropTypes.any,
  params: PropTypes.object,
};
export default About;
