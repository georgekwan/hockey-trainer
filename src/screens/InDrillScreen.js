import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../components/Button.js';
import { Audio } from 'expo-av';
import Timer from 'react-native-timer';
import * as patterns from '../../temp/drill_patterns.json';
import { fileName } from '../helpers/MP3fileName.js';
import { imageFileName } from '../helpers/imageFileName.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const InDrillScreen = () => {
  const [sound, setSound] = useState();
  const [currentStringIndex, setCurrentStringIndex] = useState(1);
  const [currentString, setCurrentString] = useState(patterns.drillPatterns[0].sequence[0]);

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(fileName(currentString));
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    Timer.setInterval(
      'soundTimer',
      async () => {
        console.log('Unloading Sound');
        setCurrentStringIndex((curVal) => {
          let newVal = (curVal + 1) % patterns.drillPatterns[0].sequence.length;
          setCurrentString(patterns.drillPatterns[0].sequence[newVal]);
          return newVal;
        });
        console.log(currentStringIndex);
        sound.unloadAsync();
      },
      3000
    );
    return () => Timer.clearInterval('soundTimer');
  }, [sound]);

  useEffect(() => {
    playSound();
  }, [currentStringIndex]);
  return (
    <>
      <View style={styles.drillInfo}>
        <View style={styles.row}>
          <Text style={styles.drillTitle}>Riding Pine</Text>
        </View>
        <View style={styles.drillSubtitle}>
          <Text>5 hole</Text>
          <Text>7 seconds</Text>
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
        <Text style={styles.shotsLeft}>5</Text>
      </View>
      <View style={styles.row}>
        <Button
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
    marginTop: HEIGHT * 0.025,
  },
  shotsLeft: {
    fontSize: 30,
    // fontWeight: '600',
  },
});
