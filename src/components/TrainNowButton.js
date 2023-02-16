import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { theme } from '../core/theme';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const TrainNowButton = (props) => {
  const onPress = props.onPress;
  return (
    <View style={{ margin: 15 }}>
      <View
        style={{
          // marginTop: HEIGHT * 0.015,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button
          mode="elevated"
          // buttonColor={'#DCDCDC'}
          buttonColor={theme.colors.primary}
          onPress={onPress}
          style={{
            // width: WIDTH * 0.8,
            // height: HEIGHT * 0.07,
            width: 300,
            height: 60,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          labelStyle={{
            fontSize: 35,
            lineHeight: 40,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: '800',
            }}>
            {'TRAIN NOW'}
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default React.memo(TrainNowButton);
const styles = StyleSheet.create({});
