import { View, Text } from 'react-native';
import React from 'react';
import { patternHistoryArray } from './patternHistoryArrayTEST.js';
import { patternIDToText } from '../src/helpers/patternIDToText.js';

//TODO - for each pattern in patternHistoryArray, find the one with the highest total missed shots,
//and return the drillPatternId of that pattern

const findWorstPerformingPattern = () => {
  let worstIdIndex = 0;
  let highestMiss = 0;

  patternHistoryArray.forEach((pattern, index) => {
    if (pattern.misses.total / pattern.totalShots > highestMiss) {
      worstIdIndex = index;
      highestMiss = pattern.misses.total / pattern.totalShots;
    }
  });
  console.log(patternIDToText(patternHistoryArray[worstIdIndex].drillPatternId));
};

export const recommendPatternAlgorithm = () => {
  findWorstPerformingPattern();
  return (
    <View>
      <Text>recommendPatternAlgorithm</Text>
    </View>
  );
};
