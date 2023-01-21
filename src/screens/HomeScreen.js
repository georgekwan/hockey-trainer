import * as React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { Avatar, Card, Text, List } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const HomeScreen = () => (
  <View style={styles.container}>
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingBottom: HEIGHT * 0.05,
      }}>
      <Image
        source={require('../../assets/harpia-logo.png')}
        style={{ resizeMode: 'contain', height: HEIGHT * 0.085 }}
      />
    </View>
    <Card style={styles.card}>
      <Card.Content>
        <View>
          <Text
            style={{
              fontSize: WIDTH * 0.08,
              fontWeight: 'bold',
              paddingLeft: 5,
              paddingVertical: WIDTH * 0.02,
            }}>
            Welcome, Josh!
          </Text>
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
              Mom's cookies pattern
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
      </Card.Content>
    </Card>
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: { width: '100%', height: '55%', borderColor: 'red', borderWidth: 5 },
});
