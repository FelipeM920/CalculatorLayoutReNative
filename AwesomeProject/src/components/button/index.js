import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export function Button(props) {
  const {backgroundColor = '#393939', flex = 1, ...otherProps} = props;
  return (
    <View style={[styles.buttonContainer, {backgroundColor, flex}]}>
      <Text style={styles.buttonText}>
        {props.text}
      </Text>
    </View>
  );
}