import { View, Text, Dimensions, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { theme } from '../../core/theme.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const PatternButton = (props) => {
  const { name, selectedName, setSelectedName } = props;

  const [patternName, setPatternName] = useState();

  const backgroundColor = selectedName === name ? '#404040' : theme.colors.primary;
  return (
    <>
      <Button
        mode="elevated"
        onPress={() => {
          setPatternName(name);
          setSelectedName(name);
          console.log('selected ', name, 'pattern');
        }}
        style={[styles.button, { backgroundColor: backgroundColor }]}>
        <View>
          <Text style={styles.text}>{name}</Text>
        </View>
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: WIDTH * 0.435,
    height: WIDTH * 0.29,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 0,
    margin: 5,
    alignContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
});
