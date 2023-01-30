import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Timer from 'react-native-timer';
import * as patterns from '../../temp/drill_patterns.json';
import Button from '../components/Button.js';
import { fileName } from '../helpers/MP3fileName.js';
import { imageFileName } from '../helpers/imageFileName.js';
import { patternSelector } from '../helpers/patternSelector.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const timeoutConverter = (selectedSeconds) => {
  return selectedSeconds === 3 ? '3 seconds' : selectedSeconds === 5 ? '5 seconds' : '7 seconds';
};

const InDrillScreen = ({ route }) => {
  const navigation = useNavigation();
  const { selectedName, selectedSeconds, selectedTutor } = route.params;
  const [currentStringIndex, setCurrentStringIndex] = useState(1);
  const currentPattern = patternSelector(selectedTutor, selectedName);
  const currentString = currentPattern.sequence[currentStringIndex];

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(fileName(currentString));
    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    if (currentStringIndex === 0) {
      Timer.clearInterval('soundTimer');
      navigation.navigate('ResultInputScreen');
      console.log('navigating away');
    } else {
      playSound();
    }
  }, [currentStringIndex]);

  useEffect(() => {
    Timer.setInterval(
      'soundTimer',
      async () => {
        console.log('running interval');
        setCurrentStringIndex((curVal) => {
          let newVal = (curVal + 1) % currentPattern.sequence.length;
          console.log(newVal);
          return newVal;
        });
      },
      selectedSeconds * 1000
    );
    return () => Timer.clearInterval('soundTimer');
  }, []);

  return (
    <>
      <View style={styles.drillInfo}>
        <View style={styles.row}>
          <Text style={styles.drillTitle}>{selectedName}</Text>
        </View>
        <View style={styles.drillSubtitle}>
          <Text>{selectedTutor + ' hole'}</Text>
          <Text>{timeoutConverter(selectedSeconds)}</Text>
        </View>
      </View>
      <View style={styles.targetTextContainer}>
        <Text style={styles.netTargetText}>{currentString}</Text>
      </View>
      <View style={styles.row}>
        <Image style={styles.image} source={imageFileName(currentString)} />
      </View>
      <View style={styles.row}>
        <Text style={styles.shotsLeft}>Shots left:</Text>
        <Text style={styles.shotsLeft}>{currentPattern.sequence.length - currentStringIndex}</Text>
      </View>
      <View style={styles.row}>
        <Button
          onPress={() => navigation.goBack()}
          style={{
            width: WIDTH * 0.8,
          }}
          mode="contained"
          labelStyle={{
            fontSize: 30,
            fontWeight: 'bold',
            lineHeight: 30,
          }}>
          CANCEL
        </Button>
      </View>
    </>
  );
};

export default InDrillScreen;

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
  },
  drillInfo: {
    flexDirection: 'column',
    // borderColor: 'red',
    // borderWidth: 3,
    marginTop: HEIGHT * 0.065,
    marginBottom: HEIGHT * 0.025,
  },
  drillTitle: {
    fontSize: 30,
    fontWeight: '600',
  },
  drillSubtitle: {
    fontSize: 18,
    fontWeight: '400',
    alignContent: 'space-between',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: WIDTH * 0.25,
  },
  targetTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'green',
    // borderWidth: 5,
    height: HEIGHT * 0.25,
    // width: WIDTH * 0.88,
    marginHorizontal: WIDTH * 0.02,
    // textAlign: 'center',
  },
  netTargetText: {
    // borderColor: 'red',
    // borderWidth: 3,
    fontSize: 65,
    fontWeight: '900',
    textAlign: 'center',

    flexGrow: 1,
    // flexWrap: 'wrap',

    // lineHeight: 70,
  },
  image: {
    width: WIDTH * 0.97,
    resizeMode: 'contain',
    height: HEIGHT * 0.3,
    marginTop: HEIGHT * 0.045,
    marginBottom: HEIGHT * 0.028,
  },
  shotsLeft: {
    fontSize: 30,
    marginBottom: HEIGHT * 0.015,
  },
});
