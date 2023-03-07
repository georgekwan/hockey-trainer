import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import Timer from 'react-native-timer';

import { fileName } from '../src/helpers/MP3fileName.js';
import * as patterns from '../temp/drill_patterns.json';

export default function InDrillScreenTEST() {
  const [sound, setSound] = useState();
  const [currentStringIndex, setCurrentStringIndex] = useState(1);
  const [currentString, setCurrentString] = useState(patterns.drillPatterns[0].sequence[0]);

  async function playSound() {
    // console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(fileName(currentString));
    setSound(sound);

    // console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    Timer.setInterval(
      'soundTimer',
      async () => {
        // console.log('Unloading Sound');
        setCurrentStringIndex((curVal) => {
          const newVal = (curVal + 1) % patterns.drillPatterns[0].sequence.length;
          setCurrentString(patterns.drillPatterns[0].sequence[newVal]);
          return newVal;
        });
        // console.log(currentStringIndex);
        sound.unloadAsync();
      },
      3000
    );
    return () => Timer.clearInterval('soundTimer');
  }, [sound]);

  useEffect(() => {
    playSound();
  }, [currentStringIndex]);

  return <Text style={styles.text}>{currentString}</Text>;
}

const styles = StyleSheet.create({
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: 65,
    fontWeight: '900',
    textAlign: 'center',
    flexGrow: 1,
    paddingTop: 100,
  },
});
