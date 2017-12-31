import React, { Component } from 'react'; import PropTypes from 'prop-types';
import GridItem from '../../components/GridItem/GridItem';
import getGridItem from './../../util/get/getGridItem';
import capToCamelCase from './../../util/transform/capToCamelCase';
import { withRouter } from 'react-router';
import PageShell from '../PageShell/PageShell';
import GridItemShell from '../../components/GridItem/GridItemShell';

const LandingPage = class LandingPage extends Component {

  render() {
    require('./LandingPage.scss');

    const component = capToCamelCase('SocialIcon');
    return (

      <PageShell
        containerLevelClass={''}
        style={{}} >

        <GridItemShell>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </GridItemShell>
      </PageShell>
    );
  }
};
LandingPage.propTypes = {
  location: PropTypes.any,
  params: PropTypes.object,
}

export default withRouter(LandingPage);
