import React from 'react';
import { View, ScrollView } from 'react-native';

// My styles
import styles from '../styles';

// Wraps the app
export const AppContainer = (props) => {
  return (
    <View style={styles.appContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {props.children}
      </ScrollView>
    </View>
  );
};
