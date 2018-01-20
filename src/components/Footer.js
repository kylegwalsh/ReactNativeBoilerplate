import React from 'react';
import { View, Text } from 'react-native';

import styles from '../styles';

// Footer component (not used with react-navigation active)
export const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Footer</Text>
    </View>
  );
};
