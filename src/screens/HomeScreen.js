import * as React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const HomeScreen = () => (
  <View>
    <Card>
      <Card.Content>
        <View>
          <Text
            style={{
              fontSize: WIDTH * 0.012,
              fontWeight: 'bold',
              paddingLeft: 5,
              paddingVertical: WIDTH * 0.005,
            }}
          >
            Welcome, Josh!
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Avatar.Icon size={50} icon="face-man-shimmer" />
          <View
            style={{
              paddingLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: WIDTH * 0.015,
                fontWeight: '800',
                paddingLeft: 5,
              }}
            >
              LAST TRAINING
            </Text>
            <Text
              style={{
                fontSize: WIDTH * 0.01,
                fontWeight: '500',
                paddingLeft: 5,
              }}
            >
              Mom's cookies pattern
            </Text>
          </View>
        </View>
        <View
          style={
            ({ flexDirection: 'column' },
            { justifyContent: 'space-around' },
            { margin: WIDTH * 0.005 })
          }
        >
          <Text
            style={{
              fontSize: WIDTH * 0.015,
              fontWeight: '800',
              paddingLeft: 5,
              paddingVertical: WIDTH * 0.0005,
            }}
          >
            OVERALL STATS
          </Text>
          <Text
            style={{
              fontSize: WIDTH * 0.01,
              fontWeight: '500',
              paddingLeft: 5,
              paddingVertical: WIDTH * 0.0005,
            }}
          >
            Average accuracy: 88%
          </Text>
          <Text
            style={{
              fontSize: WIDTH * 0.01,
              fontWeight: '500',
              paddingLeft: 5,
              paddingVertical: WIDTH * 0.005,
            }}
          >
            Total shots taken: 165
          </Text>
        </View>
        <View
          style={
            ({ flexDirection: 'column' },
            { justifyContent: 'space-around' },
            { margin: WIDTH * 0.005 })
          }
        >
          <Text
            style={{
              fontSize: WIDTH * 0.01,
              fontWeight: '800',
              // paddingLeft: 5,
              // paddingVertical: WIDTH * 0.0005,
            }}
          >
            RECOMMENDED PATTERN:
          </Text>
          <Text
            style={{
              fontSize: WIDTH * 0.008,
              fontWeight: '500',
              // paddingLeft: 5,
              // paddingVertical: WIDTH * 0.0005,
            }}
          >
            Top-Left
          </Text>
        </View>
      </Card.Content>
    </Card>
  </View>
);

export default HomeScreen;
