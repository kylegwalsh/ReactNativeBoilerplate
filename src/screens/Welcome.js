import React from 'react';
import { Platform, Text, View } from 'react-native';

// My styles
import styles from '../styles';

// My components
import { Button, AppContainer } from '../components';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export const Welcome = ({ navigation }) => {
  return (
    <AppContainer>
      <View style={styles.vCenter}>
        <View>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={() => navigation.navigate('SignIn')} text="Sign In" />
          <Button onPress={() => navigation.navigate('SignUp')} text="Sign Up" />
        </View>
      </View>
    </AppContainer>
  );
};
