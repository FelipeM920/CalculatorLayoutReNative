import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

export function Input() {
  return (
    <TextInput
      placeholder="0"
      placeholderTextColor="#fff"
      style={styles.inputText}
    />
  );
}

