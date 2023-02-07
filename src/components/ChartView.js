import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React, { useContext } from 'react';
import { PatternContext } from '../providers/PatternProvider.js';
const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const ChartView = () => {
  const { patternHistory } = useContext(PatternContext);

  return (
    <View>
      <Text style={styles.container}>THIS IS A CHART</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 8,
    height: HEIGHT * 0.33,
    marginHorizontal: WIDTH * 0.02,
    textAlign: 'center',
    justifyContents: 'center',
    fontSize: 50,
  },
});
