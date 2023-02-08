import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Avatar, List, Text } from 'react-native-paper';
import FullLogo from '../components/FullLogo.js';
import { TrainNowButton } from '../components/TrainNowButton.js';
import { theme } from '../core/theme.js';
import { patternIDToText } from '../helpers/patternIDToText.js';
import { AuthContext } from '../providers/AuthProvider.js';
import { PatternContext } from '../providers/PatternProvider.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const HomeScreen = ({ setIndex }) => {
  const { selectedPatternName, setSelectedPatternName, patternHistory } =
    useContext(PatternContext);
  const { profile } = useContext(AuthContext);

  const [lastTrainingPercent, setLastTrainingPercent] = useState();

  useEffect(() => {
    let worstIdIndex = 0;
    let highestMiss = 0;
    if (patternHistory) {
      // Last Training Accuracy Calculation
      const totalDrillShots = 15;
      let x = patternHistory.sort((a, b) => b.date.seconds - a.date.seconds);
      const latestTest = x[0];
      const latestMisses = Object.values(latestTest.misses);
      let totalMisses = 0;
      latestMisses.forEach((m) => (totalMisses = totalMisses + m));
      setLastTrainingPercent(
        (((totalDrillShots - totalMisses) / totalDrillShots) * 100).toFixed(1)
      );

      patternHistory.forEach((pattern, index) => {
        if (pattern.misses.total / pattern.totalShots > highestMiss) {
          worstIdIndex = index;
          highestMiss = pattern.misses.total / pattern.totalShots;
        }
      });
      const recommendedPattern = patternIDToText(patternHistory?.[worstIdIndex]?.drillPatternId);
      setSelectedPatternName(recommendedPattern.split(')')[1]);
    }
    return () => {};
  }, [patternHistory]);

  useEffect(() => {
    return () => console.log('home screen unmounted');
  }, []);
  console.log(lastTrainingPercent);
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
          <Text style={styles.normalText}>{patternIDToText(patternHistory?.[0]?.patternID)}</Text>

          <Text style={styles.normalText}>{lastTrainingPercent}% accuracy</Text>
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
        <Text style={styles.recommendedPatternText}>{selectedPatternName}</Text>
        <TrainNowButton
          onPress={() => {
            // setSelectedPatternName(patternIDToText(patternHistory?.[worstIdIndex].drillPatternId));
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
