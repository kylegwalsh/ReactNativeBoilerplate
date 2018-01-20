import React, { Component } from 'react';
import { Text, View } from 'react-native';

// My styles
import styles from '../styles';

// My components
import { AppContainer, Button, Confirm } from '../components';

// An example screen
export class Example extends Component {
  state = { showModal: false };

  render() {
    return (
      <AppContainer>
        <View style={styles.vCenter}>
          <View>
            <Text style={styles.welcome}>
              Heres another page!
            </Text>
            <Text style={styles.instructions}>
              This is a great example of navigation!
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button text='Try Modal' onPress={() => { this.setState({ showModal: true }); }} />
          </View>
        </View>

        <Confirm
          visible={this.state.showModal}
          onAccept={() => { this.setState({ showModal: false }); }}
          onDecline={() => { this.setState({ showModal: false }); }}
        >
          {"Isn't this modal cool?"}
        </Confirm>

      </AppContainer>
    );
  }
}
