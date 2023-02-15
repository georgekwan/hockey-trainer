import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button } from 'react-native-paper';
import { theme } from '../../core/theme.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const TutorButton = (props) => {
  const { tutorHoles, selectedTutor, setSelectedTutor } = props;
  const backgroundColor = selectedTutor === tutorHoles ? '#404040' : theme.colors.primary;

  const [tutor, setTutor] = useState();

  console.log('selected', tutor, 'tutor');
  return (
    <Button
      mode="elevated"
      onPress={() => {
        setTutor(tutorHoles);
        setSelectedTutor(tutorHoles);
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
        {tutorHoles + ' HOLE'}
      </Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    width: WIDTH * 0.45,
    height: HEIGHT * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 0,
    margin: 5,
  },
});
