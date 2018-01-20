import React from 'react';
import { TextInput, View, Text } from 'react-native';

import styles from '../styles';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export { Input };
