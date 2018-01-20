/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import { Nav, TabNav } from './Navigation';

// My styles
import styles from './styles';

// My components
import { Spinner } from './components';

// Generate our redux store
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

// The main application that renders all other components
export default class App extends Component<{}> {
  state = { authenticated: null };

  // Runs before app is rendered
  componentWillMount() {
    // Sets up our connection to firebase authentication
    const config = {
      apiKey: "AIzaSyBOfRR9Oaf9dP4pJNEoYFnMDwGFz5M31gk",
      authDomain: "auth-a9134.firebaseapp.com",
      databaseURL: "https://auth-a9134.firebaseio.com",
      projectId: "auth-a9134",
      storageBucket: "auth-a9134.appspot.com",
      messagingSenderId: "581492945747"
    };
    firebase.initializeApp(config);

    // When the authentication state of the user changes this is called (signin/signout)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authenticated: true });
      } else {
        this.setState({ authenticated: false });
      }
    });
  }

  // Render page based on authentication state
  renderApp() {
    switch (this.state.authenticated) {
      // If user is logged in, show home page within tab nav
      case true:
        return <TabNav />;
      // If user is not logged in, show our initial welcome page within nav
      case false:
        return <Nav />;
      // If we don't know yet, show spinner
      default:
        return (
          <View style={styles.vCenter}>
            <Spinner />
          </View>
        );
    }
  }

  // Renders the entire app
  render() {
    return (
      <Provider store={store}>
        {this.renderApp()}
      </Provider>
    );
  }
}
