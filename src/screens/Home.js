import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import * as actions from '../actions';

// My styles
import styles from '../styles';

// My components
import { AppContainer, Button, Spinner } from '../components';

export class _Home extends Component {
  // Render our button or spinner depending on 'loading' state
  renderButton() {
    // If loading, render spinner
    if (this.props.loading) {
      return <Spinner size='small' />;
    }

    // Otherwise, render button
    return <Button text='Sign Out' onPress={() => { this.props.signOutUser(); }} />;
  }

  render() {
    return (
      <AppContainer>
        <View style={styles.vCenter}>
          <View>
            <Text style={styles.welcome}>
              Welcome to my app!
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            {this.renderButton()}
          </View>
        </View>
      </AppContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading
  };
};

export const Home = connect(mapStateToProps, actions)(_Home);
