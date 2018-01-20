import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from '../styles';

// Button component
export const Button = ({ onPress, text, style }) => {
  return (
    // The additional style property can be used to override the button style
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
