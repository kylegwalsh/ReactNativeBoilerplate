import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import styles from '../styles';

import { Button, Input, Spinner, AppContainer } from '../components';

// Signin Form Component
class _SignIn extends Component {
  state = { email: '', password: '', error: '', loading: false };

  // Run whenever button is pressed
  onButtonPress() {
    const { email, password } = this.props;

    // Call our action creator to login user
    this.props.signInUser({ email, password });
  }

  // Render our button or spinner depending on 'loading' state
  renderButton() {
    // If loading, render spinner
    if (this.props.loading) {
      return <Spinner size='small' />;
    }

    // Otherwise, render button
    return <Button onPress={this.onButtonPress.bind(this)} text='Sign in' />;
  }

  // Render signin form
  render() {
    return (
      <AppContainer>
        <View style={styles.vCenter}>

          <View style={styles.card}>

            <View style={styles.cardSection}>
              <Input
                placeholder='email@gmail.com'
                label='Email'
                value={this.props.email}
                onChangeText={(value) => this.props.fieldChanged({ prop: 'email', value })}
              />
            </View>

            <View style={styles.cardSection}>
              <Input
                secureTextEntry
                placeholder='Password'
                label='Password'
                value={this.props.password}
                onChangeText={(value) => this.props.fieldChanged({ prop: 'password', value })}
              />
            </View>

            <View style={styles.cardSection}>
              {this.renderButton()}
            </View>

          </View>
          <Text style={styles.error}>
            {this.props.error}
          </Text>

        </View>
      </AppContainer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    error: state.auth.error
  };
};

export const SignIn = connect(mapStateToProps, actions)(_SignIn);
