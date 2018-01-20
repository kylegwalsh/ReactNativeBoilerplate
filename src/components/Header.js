import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';

// Header component (used as custom header within navigation)
export const Header = ({ text }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{text}</Text>
    </View>
  );
};
