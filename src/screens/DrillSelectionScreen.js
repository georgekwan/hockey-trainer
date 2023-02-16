import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, ScrollView, Text, View } from 'react-native';
import { Button, List } from 'react-native-paper';

import { ResultInputScreen } from './ResultInputScreen';
import * as patterns from '../../temp/drill_patterns.json';
import FullLogo from '../components/FullLogo.js';
import { addDoc, serverTimestamp } from 'firebase/firestore';

import { theme } from '../core/theme';
import { PatternButton } from '../components/selectDrillScreen/PatternButton.js';
import { TimeoutButton } from '../components/selectDrillScreen/TimeoutButton.js';
import { TutorButton } from '../components/selectDrillScreen/TutorButton.js';
import TrainNowButton from '../components/TrainNowButton.js';
import { PatternContext } from '../providers/PatternProvider.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

let patternNames = [
  'Around the World',
  "Pick'n Corners",
  'Up Down',
  'Downtown',
  'Crash and Bang',
  'Titanic',
  "Mom's Cookies",
  'Riding Pine',
  'Dump and Chase',
  'The Frustrating One',
];

const DrillSelectionScreen = () => {
  const { selectedPatternName, setSelectedPatternName } = useContext(PatternContext);

  // route.selectedName = route.selectedName || 'Around the World';
  const navigation = useNavigation();
  // const [selectedPatternName, setSelectedPatternName] = useState();
  const [selectedSeconds, setSelectedSeconds] = useState(0);
  const [selectedTutor, setSelectedTutor] = useState();

  // console.log('selected pattern is', selectedPatternName);
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: HEIGHT * 0.06,
        }}>
        <FullLogo />
      </View>
      <View style={{ padding: 5, margin: 5 }}>
        <View style={styles.iconRow}>
          <List.Icon icon="hockey-puck" color={theme.colors.primary} />
          <Text style={styles.drillSelectText}>SELECT PATTERN</Text>
        </View>

        <View style={{ height: HEIGHT * 0.3 }}>
          <ScrollView
            persistentScrollbar={false}
            style={{
              marginHorizontal: 5,
              height: HEIGHT * 0.2,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                alignContent: 'center',
              }}>
              {patternNames.map((name) => (
                <PatternButton
                  key={name}
                  name={name}
                  selectedPatternName={selectedPatternName}
                  setSelectedPatternName={setSelectedPatternName}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={{ margin: 0 }}>
          <View style={styles.iconRow}>
            <List.Icon icon="timer" color={theme.colors.primary} />
            <Text style={styles.drillSelectText}>SELECT TIMEOUT</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {[3, 5, 7].map((seconds) => (
              <TimeoutButton
                key={seconds}
                seconds={seconds}
                selectedSeconds={selectedSeconds}
                setSelectedSeconds={setSelectedSeconds}
              />
            ))}
          </View>
        </View>

        <View style={styles.iconRow}>
          <List.Icon icon="hockey-sticks" color={theme.colors.primary} />
          <Text style={styles.drillSelectText}>SELECT TUTOR</Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {[5, 11].map((tutorHoles) => (
            <TutorButton
              key={tutorHoles}
              tutorHoles={tutorHoles}
              selectedTutor={selectedTutor}
              setSelectedTutor={setSelectedTutor}
            />
          ))}
        </View>
        <TrainNowButton
          onPress={() =>
            navigation.navigate('InDrillScreen', {
              selectedPatternName,
              selectedSeconds,
              selectedTutor,
            })
          }
        />
      </View>
    </View>
  );
};

export default React.memo(DrillSelectionScreen);

const styles = StyleSheet.create({
  md3FontStyles: {
    lineHeight: 32,
  },
  fontStyles: {
    fontWeight: '800',
    fontSize: 24,
  },
  drillSelectText: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    // paddingVertical: WIDTH * 0.02,
    padding: 5,
  },
  iconRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 50,
    // marginTop: HEIGHT * 0.02,
  },
});
