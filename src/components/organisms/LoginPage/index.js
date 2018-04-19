import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginForm from './../../components/LoginForm';

import ContentSynchronizer from '../../components/ContentSynchronizer/ContentSynchronizer';
import getStoreBuilderUri from '../../service/transformer/getStoreBuilderUri';
import getStoreRoutePartial from '../../service/transformer/getStoreRoutePartial';

const LoginPage = class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        userName: '',
        displayName: '',
        password: '',
        loggedIn: false,
        profile: {},
      },
      loginStatusCode: '',
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLoginFormChange = this.handleLoginFormChange.bind(this);
    this.getReturnToRoute = this.getReturnToRoute.bind(this);
  }

  componentDidMount() {
    // TODO - when mature, move into a module + callback setup inside LoginForm component
    // TODO - as well as manage user inside ContentSyntronizer
    ContentSynchronizer.getFirebase().auth().onAuthStateChanged((user) => {
      // TODO: obtain user info according to what we got in user object?
      console.log(user);
      // User is signed in.
      if (user) {
        this.setState({
          user: {
            userName: this.state.userName,
            displayName: user.displayName || '',
            password: this.state.password,
            loggedIn: true,
          },
          profile: {},
          loginStatusCode: '',
        });
        console.log('SIGNED IN !!!!');
        const uid = user.uid;
        const users = ContentSynchronizer.getFirebase().database().ref('users')
          .child(uid)
          .once('value')
          .then((data) => {
            console.log('=========================== Set profile!!!!');
            this.setState({
              profile: data.val() || {},
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        console.log('NOTTTTT SIGN IN !!!!');
        // No user is signed in.
      }
    });
  }

  getReturnToRoute() {
    if (!this.state.profile || !this.state.profile.stores) {
      return {
        uri: '',
        name: '',
      };
    }
    // TODO: support multiple stores and build url link strings
    const store = this.state.profile.stores;
    const storeRoutePartials = [];
    for (const name in store) {
      const url = store[name].url;
      const publicName = store[name].name;
      storeRoutePartials.push({ name: publicName, url });
    }
    const uris = storeRoutePartials.map(partial => getStoreBuilderUri(partial.url, 'products'));
    return {
      uri: uris[0],
      name: storeRoutePartials[0].name,
    };
  }

  handleLogin(userName, password, changeLoggingInStateFunc) {
    console.log(this.state);
    ContentSynchronizer.getFirebase().auth()
      .signInWithEmailAndPassword(userName, password)
      .catch((error) => {
        changeLoggingInStateFunc(false);
        console.log(error);
        const errorCode = error.code;
        this.setState({
          loginStatusCode: errorCode,
        });
      });
  }

  handleLogout() {
    console.log('log out triggered');
    ContentSynchronizer.getFirebase().auth()
      .signOut().then(() => {
      // Sign-out successful.
        this.setState({
          user: {
            userName: '',
            password: '',
            loggedIn: false,
          },
        });
      })
      .catch((error) => {
        console.log(error);
      // An error happened.
      });
  }

  handleLoginFormChange(event, propertyName) {
    if (!propertyName) return;
    const user = this.state.user;
    user[propertyName] = event.target.value;
    this.setState({
      user,
    });
    console.log(this.state.user);
  }
  render() {
    return (<LoginForm
      statusCode={this.state.loginStatusCode}
      userInfo={this.state.user}
      handleLogin={this.handleLogin}
      handleLogout={this.handleLogout}
      handleLoginFormChange={this.handleLoginFormChange}
      getReturnToRoute={this.getReturnToRoute}
      layout="standAlone"
    />);
  }
};
LoginPage.propTypes = {
  location: PropTypes.any,
  params: PropTypes.object,
};

export default withRouter(LoginPage);
