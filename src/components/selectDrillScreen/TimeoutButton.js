import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { theme } from '../../core/theme.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const TimeoutButton = (props) => {
  const { seconds, selectedSeconds, setSelectedSeconds } = props;
  const backgroundColor = selectedSeconds === seconds ? '#404040' : theme.colors.primary;

  const [timeout, setTimeout] = useState();

  return (
    <Button
      mode="elevated"
      onPress={() => {
        setTimeout(seconds * 1000);
        setSelectedSeconds(seconds);
      }}
      style={[styles.button, { backgroundColor: backgroundColor }]}
      labelStyle={{
        fontSize: 15,
        lineHeight: 15,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'white',
        }}>
        {seconds + ' SEC'}
      </Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: WIDTH * 0.3,
    height: HEIGHT * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 0,
    margin: 5,
  },
});
