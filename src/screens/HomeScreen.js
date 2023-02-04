import React, { useContext, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Avatar, Button, List, Text } from 'react-native-paper';
import FullLogo from '../components/FullLogo.js';
import { AuthContext } from '../providers/AuthProvider.js';
import { PatternHistoryContext } from '../providers/PatternHistoryProvider.js';
import { patternIDToText } from '../helpers/patternIDToText.js';
import { theme } from '../core/theme.js';
import { TrainNowButton } from '../components/TrainNowButton.js';
import { useNavigation } from '@react-navigation/native';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const HomeScreen = ({ setIndex, setSelectedName, selectedName }) => {
  const { profile } = useContext(AuthContext);
  const patternHistory = useContext(PatternHistoryContext);

  const recommendedPattern = 'Titanic';
  setSelectedName(recommendedPattern);

  console.log(patternHistory);

  let worstIdIndex = 0;
  let highestMiss = 0;

  patternHistory.forEach((pattern, index) => {
    if (pattern.misses.total / pattern.totalShots > highestMiss) {
      worstIdIndex = index;
      highestMiss = pattern.misses.total / pattern.totalShots;
    }
  });
  // console.log(patternIDToText(patternHistory[worstIdIndex].drillPatternId));

  return (
    <>
      <View style={styles.logo}>
        <FullLogo />
      </View>

      <View>
        <Text style={styles.welcomeText}>{'Welcome, ' + profile?.displayName}</Text>
      </View>
      <View style={styles.lastTrainingSection}>
        <Avatar.Icon size={100} icon="face-man-shimmer" />
        <View style={{ justifyContent: 'center', paddingHorizontal: WIDTH * 0.02 }}>
          <Text style={styles.title}>LAST TRAINING</Text>
          {/* <Text style={styles.normalText}>{patternIDToText(patternHistory[2]?.patternID)}</Text> */}
          <Text style={styles.normalText}>
            {/* {Math.round(((15 - patternHistory[2]?.misses.total) / 15) * 100)}% accuracy */}
          </Text>
        </View>
      </View>
      <View style={styles.overallStatsSection}>
        <Text style={styles.title}>OVERALL STATS</Text>
        <View style={styles.iconTextRow}>
          <List.Icon icon="bullseye-arrow" color={theme.colors.primary} />
          <Text style={styles.normalText}>Average accuracy: 88%</Text>
        </View>
        <View style={styles.iconTextRow}>
          <List.Icon icon="target" size={40} color={theme.colors.primary} />
          <Text style={styles.normalText}>Total shots taken: 165</Text>
        </View>
      </View>
      <View style={styles.recommendedPatternSection}>
        <Text style={styles.recommendedPatternTitle}>RECOMMENDED PATTERN:</Text>
        <Text style={styles.recommendedPatternText}>
          {patternIDToText(patternHistory[worstIdIndex].drillPatternId)}
        </Text>
        <TrainNowButton
          onPress={() => {
            setIndex(1);
          }}
        />
      </View>
    </>
  );
};

export default React.memo(HomeScreen);

const styles = StyleSheet.create({
  normalText: {
    fontSize: WIDTH * 0.05,
    fontWeight: '500',
  },
  logo: {
    marginTop: HEIGHT * 0.06,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: WIDTH * 0.08,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingVertical: WIDTH * 0.02,
    marginLeft: WIDTH * 0.03,
    marginTop: HEIGHT * 0.03,
  },
  lastTrainingSection: {
    marginTop: HEIGHT * 0.02,
    marginHorizontal: WIDTH * 0.02,
    flexDirection: 'row',
    // borderColor: 'red',
    // borderWidth: 5,
  },
  title: {
    fontSize: WIDTH * 0.08,
    fontWeight: '800',
    paddingLeft: 5,
  },
  overallStatsSection: {
    alignItems: 'center',
    marginVertical: HEIGHT * 0.039,
  },
  iconTextRow: {
    margin: WIDTH * 0.01,
    width: WIDTH * 0.65,
    // borderColor: 'red',
    // borderWidth: 5,
    flexDirection: 'row',
    alignContent: 'flex-start',
    marginVertical: WIDTH * 0.01,
  },
  recommendedPatternSection: {
    alignItems: 'center',
    marginTop: HEIGHT * 0.03,
  },
  recommendedPatternTitle: {
    fontSize: WIDTH * 0.05,
    fontWeight: '800',
    paddingVertical: WIDTH * 0.02,
  },
  recommendedPatternText: {
    fontSize: WIDTH * 0.05,
    fontWeight: '500',
    paddingVertical: WIDTH * 0.001,
  },
});
