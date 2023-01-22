import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import Timer from 'react-native-timer';
import { StyleSheet, Text } from 'react-native';
import * as patterns from '../temp/drill_patterns.json';
import { fileName } from '../src/helpers/MP3fileName.js';

const sounds = [
  require('../assets/audio/topLeft.mp3'),
  require('../assets/audio/topRight.mp3'),
  require('../assets/audio/bottomLeft.mp3'),
  require('../assets/audio/bottomRight.mp3'),
];
const strings = ['top left', 'top right', 'bottom left', 'bottom right'];

export default function InDrillScreenTEST() {
  const [sound, setSound] = useState();
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
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
        setCurrentStringIndex((currentStringIndex + 1) % patterns.drillPatterns[0].sequence.length);
        setCurrentString(patterns.drillPatterns[0].sequence[currentStringIndex]);
        playSound();
        sound.unloadAsync();
      },
      3000
    );
    return () => Timer.clearInterval('soundTimer');
  }, [sound]);

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
