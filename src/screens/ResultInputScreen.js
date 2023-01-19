import * as React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const ResultInputScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: HEIGHT * 0.05,
        }}
      >
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
        }}
      >
        <Text
          style={{
            fontSize: WIDTH * 0.07,
            fontWeight: '800',
            textAlign: 'center',
            paddingVertical: WIDTH * 0.02,
          }}
        >
          INPUT PATTERN RESULTS
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: WIDTH * 0.05,
            fontWeight: '800',
            textAlign: 'center',
            paddingVertical: WIDTH * 0.02,
          }}
        >
          Tap the dropdown button to select number of shots made
        </Text>
      </View>

      <View
        style={{
          position: 'relative',
          borderColor: 'red',
          borderWidth: 5,
          height: HEIGHT * 0.35,
        }}
      >
        <View></View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'red',
            borderWidth: 5,
          }}
        >
          <Image
            source={require('../../assets/hockeynet/hockeynet-basic.png')}
            style={{
              width: WIDTH * 0.95,
              alignItems: 'center',
              justifyContent: 'center',
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>

      <View style={{ margin: WIDTH * 0.1, paddingBottom: HEIGHT * 0.1 }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
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
            }}
          >
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
