import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from '../styles';

// Spinner component
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinner}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

export { Spinner };
