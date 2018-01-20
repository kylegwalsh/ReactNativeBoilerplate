import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import styles from '../styles';

import { Button, Input, Spinner, AppContainer } from '../components';

// Signin Form Component
class _SignUp extends Component {
  state = { error: '' };

  // Run whenever button is pressed
  onButtonPress() {
    // Remove any errors
    this.setState({ error: '' });

    const { email, password, confirmPassword } = this.props;

    // Check if email and password are filled in
    if (!email || !password) {
      this.setState({ error: 'Please fill in all fields' });
      return false;
    }

    // Check if passwords match
    if (!this.passwordMatch(password, confirmPassword)) {
      this.setState({ error: 'Entered passwords don\'t match' });
      return false;
    }

    // Create user
    this.props.createUser({ email, password });
  }

  // Verify passwords match
  passwordMatch(password, confirmPassword) {
    if (password === confirmPassword) return true;
    return false;
  }

  // Render our button or spinner depending on 'loading' state
  renderButton() {
    // If loading, render spinner
    if (this.props.loading) {
      return <Spinner size='small' />;
    }

    // Otherwise, render button
    return <Button onPress={this.onButtonPress.bind(this)} text='Sign Up' />;
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
              <Input
                secureTextEntry
                placeholder='Confirm Password'
                label='Confirm Password'
                value={this.props.confirmPassword}
                onChangeText={(value) => this.props.fieldChanged({ prop: 'confirmPassword', value })}
              />
            </View>

            <View style={styles.cardSection}>
              {this.renderButton()}
            </View>

          </View>
          <Text style={styles.error}>
            {this.props.error}{this.state.error}
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
    confirmPassword: state.auth.confirmPassword,
    loading: state.auth.loading,
    error: state.auth.error
  };
};

export const SignUp = connect(mapStateToProps, actions)(_SignUp);
