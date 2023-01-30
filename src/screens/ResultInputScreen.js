import React, { useState } from 'react';
import { ImageBackground, Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import MissShotInput from '../components/MissShotInput';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const ResultInputScreen = () => {
  const totalShots = 15;
  const [numberOfShotsLeft, setNumberOfShotsLeft] = useState(totalShots);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: HEIGHT * 0.05,
        }}>
        <Image
          source={require('../../assets/harpia-logo.png')}
          style={{ resizeMode: 'contain', height: HEIGHT * 0.085 }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: WIDTH * 0.07,
            fontWeight: '800',
            textAlign: 'center',
            paddingVertical: WIDTH * 0.02,
          }}>
          INPUT PATTERN RESULTS
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: WIDTH * 0.05,
            fontWeight: '800',
            textAlign: 'center',
            paddingVertical: WIDTH * 0.02,
          }}>
          Tap the dropdown button to select number of shots made
        </Text>
      </View>

      <View
        style={{
          position: 'relative',
          // borderColor: 'red',
          // borderWidth: 5,
          height: HEIGHT * 0.35,
        }}>
        <ImageBackground
          source={require('../../assets/hockeynet/hockeynet-basic.png')}
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          resizeMode="contain">
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 3,
              width: '100%',
              height: '100%',
              // borderColor: 'yellow',
              // borderWidth: 5,
            }}>
            {console.log(`shots left is ${numberOfShotsLeft}`)}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingTop: 25,
                paddingHorizontal: 10,
              }}>
              <MissShotInput
                totalShots={totalShots}
                numberOfShotsLeft={numberOfShotsLeft}
                setNumberOfShotsLeft={setNumberOfShotsLeft}
                // positionStyle={{ position: 'absolute', left: 15, top: 30 }}
              />
              <MissShotInput
                totalShots={totalShots}
                numberOfShotsLeft={numberOfShotsLeft}
                setNumberOfShotsLeft={setNumberOfShotsLeft}
                // positionStyle={{ position: 'absolute', left: 110, top: 30 }}
              />
              <MissShotInput
                totalShots={totalShots}
                numberOfShotsLeft={numberOfShotsLeft}
                setNumberOfShotsLeft={setNumberOfShotsLeft}
                // positionStyle={{ position: 'absolute', right: 110, top: 30 }}
              />
              <MissShotInput
                totalShots={totalShots}
                numberOfShotsLeft={numberOfShotsLeft}
                setNumberOfShotsLeft={setNumberOfShotsLeft}
                // positionStyle={{ position: 'absolute', right: 15, top: 30 }}
              />
            </View>
            <View style={{ flex: 1 }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingHorizontal: 10,
              }}>
              <MissShotInput
                totalShots={totalShots}
                numberOfShotsLeft={numberOfShotsLeft}
                setNumberOfShotsLeft={setNumberOfShotsLeft}
                // positionStyle={{ position: 'absolute', left: 10, bottom: 100 }}
              />
              <MissShotInput
                totalShots={totalShots}
                numberOfShotsLeft={numberOfShotsLeft}
                setNumberOfShotsLeft={setNumberOfShotsLeft}
                // positionStyle={{ position: 'absolute', right: 10, bottom: 100 }}
                style={{ marginTop: 20 }}
              />
              <MissShotInput
                totalShots={totalShots}
                numberOfShotsLeft={numberOfShotsLeft}
                setNumberOfShotsLeft={setNumberOfShotsLeft}
                // positionStyle={{ position: 'absolute', left: 100, bottom: 80 }}
                style={{ marginTop: 20 }}
              />
              <MissShotInput
                totalShots={totalShots}
                numberOfShotsLeft={numberOfShotsLeft}
                setNumberOfShotsLeft={setNumberOfShotsLeft}
                // positionStyle={{ position: 'absolute', right: 100, bottom: 80 }}
              />
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingHorizontal: 10,
                paddingBottom: 20,
              }}>
              <MissShotInput
                totalShots={totalShots}
                numberOfShotsLeft={numberOfShotsLeft}
                setNumberOfShotsLeft={setNumberOfShotsLeft}
                // positionStyle={{ position: 'absolute', left: 10, bottom: 5 }}
                style={{ marginTop: 30 }}
              />

              <MissShotInput
                totalShots={totalShots}
                numberOfShotsLeft={numberOfShotsLeft}
                setNumberOfShotsLeft={setNumberOfShotsLeft}
                // positionStyle={{ position: 'absolute', left: 160, bottom: 30 }}
              />
              <MissShotInput
                totalShots={totalShots}
                numberOfShotsLeft={numberOfShotsLeft}
                setNumberOfShotsLeft={setNumberOfShotsLeft}
                // positionStyle={{ position: 'absolute', right: 10, bottom: 5 }}
                style={{ marginTop: 30 }}
              />
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            // borderColor: 'blue',
            // borderWidth: 5,
            zIndex: 0,
            // position: 'absolute',
            // top: 0,
          }}>
          {/* <Image
            source={require('../../assets/hockeynet/hockeynet-basic.png')}
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              resizeMode: 'contain',
            }}
          /> */}
        </View>
      </View>

      <View style={{ margin: WIDTH * 0.1, paddingBottom: HEIGHT * 0.1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            mode="contained"
            onPress={() => console.log('INPUT')}
            style={{
              width: WIDTH * 0.8,
              height: HEIGHT * 0.06,
              borderRadius: 25,
            }}
            labelStyle={{
              fontSize: 30,
              fontWeight: 'bold',
              lineHeight: 30,
            }}>
            INPUT
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ResultInputScreen;

const styles = StyleSheet.create({
  md3FontStyles: {
    lineHeight: 32,
  },
  fontStyles: {
    fontWeight: '800',
    fontSize: 24,
  },
  patternButton: {
    width: WIDTH * 0.29,
    height: WIDTH * 0.29,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    buttonColor: 'blue',
  },
});
