import React, { useContext } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Avatar, List, Text } from 'react-native-paper';
import FullLogo from '../components/FullLogo.js';
import { AuthContext } from '../providers/AuthProvider.js';
import { PatternHistoryContext } from '../providers/PatternHistoryProvider.js';
import { patternIDToText } from '../helpers/patternIDToText.js';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const HomeScreen = () => {
  const { profile } = useContext(AuthContext);
  const patternHistory = useContext(PatternHistoryContext);

  console.log(patternHistory);

  return (
    <>
      <View style={styles.logo}>
        <FullLogo />
      </View>

      <View>
        <Text style={styles.welcomeText}>{'Welcome, ' + profile?.displayName}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Avatar.Icon size={100} icon="face-man-shimmer" />
        <View
          style={{
            paddingLeft: 10,
          }}>
          <Text
            style={{
              fontSize: WIDTH * 0.08,
              fontWeight: '800',
              paddingLeft: 5,
            }}>
            LAST TRAINING
          </Text>
          <Text
            style={{
              fontSize: WIDTH * 0.05,
              fontWeight: '500',
              paddingLeft: 5,
              paddingVertical: WIDTH * 0.02,
            }}>
            {patternIDToText(patternHistory[0]?.patternID)}
          </Text>
        </View>
      </View>
      <View
        style={
          ({ flexDirection: 'column' },
          { justifyContent: 'space-around' },
          { margin: WIDTH * 0.005 })
        }>
        <Text
          style={{
            fontSize: WIDTH * 0.08,
            fontWeight: '800',
            paddingLeft: 5,
            paddingVertical: WIDTH * 0.02,
          }}>
          OVERALL STATS
        </Text>
        <Text
          style={{
            fontSize: WIDTH * 0.05,
            fontWeight: '500',
            paddingLeft: 5,
            paddingVertical: WIDTH * 0.001,
          }}>
          <List.Icon icon="bullseye-arrow" color="blue" />
          Average accuracy: 88%
        </Text>
        <Text
          style={{
            fontSize: WIDTH * 0.05,
            fontWeight: '500',
            paddingLeft: 5,
            paddingVertical: WIDTH * 0.001,
          }}>
          <List.Icon icon="target" color="blue" />
          Total shots taken: 165
        </Text>
      </View>
      <View
        style={
          ({ flexDirection: 'column' },
          { justifyContent: 'space-around' },
          { margin: WIDTH * 0.005 })
        }>
        <Text
          style={{
            fontSize: WIDTH * 0.05,
            fontWeight: '800',
            // paddingLeft: 5,
            paddingVertical: WIDTH * 0.02,
          }}>
          RECOMMENDED PATTERN:
        </Text>
        <Text
          style={{
            fontSize: WIDTH * 0.05,
            fontWeight: '500',
            // paddingLeft: 5,
            paddingVertical: WIDTH * 0.001,
          }}>
          Top-Left
        </Text>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo: {
    marginTop: HEIGHT * 0.06,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: WIDTH * 0.08,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingVertical: WIDTH * 0.02,
  },
});
