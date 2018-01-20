import React from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from '.';

import styles from '../styles';

// Confirmation modal component
export const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType='slide'
      onRequestClose={() => {}}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.cardSection, { justifyContent: 'center', marginRight: 10, marginLeft: 10 }]}>
          <Text style={styles.modalText}>{children}</Text>
        </View>

        <View style={[styles.cardSection, { justifyContent: 'center', paddingTop: 15, paddingBottom: 15, marginRight: 10, marginLeft: 10 }]}>
          <Button text='Yes' onPress={onAccept} />
          <Button text='No' onPress={onDecline} />
        </View>
      </View>
    </Modal>
  );
};
