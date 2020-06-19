import React from 'react';
import { View } from 'react-native';
import { Input, Button } from './components';

import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Input />
      <View style={styles.containerInner}>
        <Button text={'c'} />
        <Button text={'mc'} />
        <Button text={'mr'} />
        <Button text={'m+'} />
      </View>
      <View style={styles.containerInner}>
        <Button text={'<='} />
        <Button text={'+-'} />
        <Button text={'%'} />
        <Button text={'/'} />
      </View>
      <View style={styles.containerInner}>
        <Button text={'7'} backgroundColor={'#1F1F1F'} />
        <Button text={'8'} backgroundColor={'#1F1F1F'} />
        <Button text={'9'} backgroundColor={'#1F1F1F'} />
        <Button text={'x'} />
      </View>
      <View style={styles.containerInner}>
        <Button text={'4'} backgroundColor={'#1F1F1F'} />
        <Button text={'5'} backgroundColor={'#1F1F1F'} />
        <Button text={'6'} backgroundColor={'#1F1F1F'} />
        <Button text={'-'} />
      </View>
      <View style={styles.containerInner}>
        <Button text={'1'} backgroundColor={'#1F1F1F'} />
        <Button text={'2'} backgroundColor={'#1F1F1F'} />
        <Button text={'3'} backgroundColor={'#1F1F1F'} />
        <Button text={'+'} />
      </View>
      <View style={styles.containerInner}>
        <Button text={'0'} backgroundColor={'#1F1F1F'} flex={2} />
        <Button text={'.'} backgroundColor={'#1F1F1F'} />
        <Button text={'='} backgroundColor={'#F09709'}/>
      </View>
    </View>
  );
}
