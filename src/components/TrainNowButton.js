import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

export const TrainNowButton = (props) => {
  const onPress = props.onPress;
  return (
    <View style={{ margin: WIDTH * 0.025 }}>
      <View
        style={{
          marginTop: HEIGHT * 0.015,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Button
          mode="elevated"
          buttonColor={'#DCDCDC'}
          onPress={onPress}
          style={{
            width: WIDTH * 0.8,
            height: HEIGHT * 0.07,
            borderRadius: 25,
          }}
          labelStyle={{
            fontSize: 35,
            lineHeight: 45,
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontWeight: '800',
              // alignItems: 'center',
            }}>
            {'TRAIN NOW'}
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
