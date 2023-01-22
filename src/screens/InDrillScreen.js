import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Button from '../components/Button.js';
import { Audio } from 'expo-av';
import Timer from 'react-native-timer';
import * as patterns from '../../temp/drill_patterns.json';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const InDrillScreen = () => {
  {
    /*
    const [currentString, setCurrentString] = useState(patterns.drillPatterns[0].sequence[0]);
  const sound = new AV.Sound();

  sound.setOnPlaybackStatusUpdate((status) => {
    if (!status.isPlaying) {
      setCurrentString(
        patterns[patterns.drillPatterns[0].sequence.indexOf(currentString) + 1] || patterns[0]
      );
      sound.unloadAsync();
      sound.loadAsync(currentString.audio);
      sound.playAsync();
    }
  });

  Timer.setInterval(
    'stringTimer',
    () => {
      sound.stopAsync();
    },
    5000
  );*/
  }

  const sounds = [
    require('../../assets/audio/topLeft.mp3'),
    require('../../assets/audio/topRight.mp3'),
    require('../../assets/audio/bottomLeft.mp3'),
    require('../../assets/audio/bottomRight.mp3'),
  ];
  const [currentString, setCurrentString] = useState(patterns.drillPatterns[0].sequence[0]);
  console.log(currentString);

  const [sound, setSound] = React.useState();
  const [currentSoundIndex, setCurrentSoundIndex] = useState(0);

  async function playSound() {
    console.log('Loading Sound');
    {
      /*const { sound } = await Audio.Sound.createAsync(require('../../assets/audio/topLeft.mp3'));*/
    }
    const { sound } = await Audio.Sound.createAsync(sounds[currentSoundIndex]);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  {
    /*React.useEffect(() => {
    Timer.setInterval(
      'soundTimer',
      async () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
        setCurrentSoundIndex((currentSoundIndex + 1) % patterns.drillPatterns[0].sequence.length);
        playSound();
      },
      5000
    );
    return () => Timer.clearInterval('soundTimer');
  }, []);*/
  }

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
        <Text style={styles.netTargetText}>TOP LEFT</Text>
      </View>
      <View style={styles.row}>
        <Image
          style={styles.image}
          source={require('../../assets/hockeynet/targets/top-left.png')}
        />
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
          onPress={playSound}
          labelStyle={{
            fontSize: 30,
            fontWeight: 'bold',
            lineHeight: 30,
          }}>
          PLAY SOUND
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
