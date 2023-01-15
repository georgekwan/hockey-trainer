import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, List } from 'react-native-paper';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const DrillSelectionScreen = () => {
  return (
    <View style={[{ flex: 1 }, { backgroundColor: 'white' }]}>
      <View style={[{ alignItems: 'center' }, { justifyContent: 'center' }]}>
        <Avatar.Icon size={150} icon="hockey-sticks" />
      </View>

      <View
        style={[
          { flexDirection: 'row' },
          { alignItems: 'center' },
          { justifyContent: 'center' },
        ]}
      >
        <Text
          style={{
            fontSize: WIDTH * 0.08,
            fontWeight: '800',

            paddingVertical: WIDTH * 0.02,
          }}
        >
          <List.Icon icon="hockey-puck" color="blue" />
          SELECT PATTERN
        </Text>
      </View>
      <View
        style={[
          { flexDirection: 'row' },
          { alignItems: 'center' },
          { justifyContent: 'spacing-between' },
          { margin: WIDTH * 0.015 },
        ]}
      >
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.patternButton}
        >
          Around the World
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.patternButton}
        >
          Pick’n Corners
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.patternButton}
        >
          Up Down
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.patternButton}
        >
          Downtown
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.patternButton}
        >
          Crash and Bang
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.patternButton}
        >
          Titanic
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.patternButton}
        >
          Mom’s Cookies
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.patternButton}
        >
          Riding Pine
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.patternButton}
        >
          Dump and Chase
        </Button>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={styles.patternButton}
        >
          The Frustrating One
        </Button>
      </View>
      <View
        style={[
          { flexDirection: 'row' },
          { alignItems: 'center' },
          { justifyContent: 'center' },
        ]}
      >
        <Text
          style={{
            fontSize: WIDTH * 0.08,
            fontWeight: '800',

            paddingVertical: WIDTH * 0.02,
          }}
        >
          <List.Icon icon="timer" color="blue" />
          SELECT TIMEOUT
        </Text>
      </View>

      <View
        style={[
          { flexDirection: 'row' },
          { alignItems: 'center' },
          { justifyContent: 'space-between' },
          { margin: WIDTH * 0.015 },
        ]}
      >
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={[
            { width: WIDTH * 0.3 },
            { height: HEIGHT * 0.08 },
            { alignItems: 'center' },
            { justifyContent: 'center' },
            { borderRadius: 10 },
            { padding: 5 },
            { margin: 5 },
          ]}
        >
          3 SEC
        </Button>

        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={[
            { width: WIDTH * 0.3 },
            { height: HEIGHT * 0.08 },
            { alignItems: 'center' },
            { justifyContent: 'center' },
            { borderRadius: 10 },
            { padding: 5 },
            { margin: 5 },
          ]}
        >
          5 SEC
        </Button>

        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={[
            { width: WIDTH * 0.3 },
            { height: HEIGHT * 0.08 },
            { alignItems: 'center' },
            { justifyContent: 'center' },
            { borderRadius: 10 },
            { padding: 5 },
            { margin: 5 },
          ]}
        >
          7 SEC
        </Button>
      </View>
      <View style={{ margin: WIDTH * 0.025 }}>
        <View
          style={[
            { flexDirection: 'row' },
            { alignItems: 'center' },
            { justifyContent: 'center' },
          ]}
        >
          <Button
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={[
              { width: WIDTH * 0.8 },
              { height: HEIGHT * 0.06 },
              { alignItems: 'center' },
              { justifyContent: 'center' },
              { borderRadius: 25 },
            ]}
            labelStyle={[styles.fontStyles, styles.md3FontStyles]}
          >
            TRAIN NOW
          </Button>
        </View>
      </View>
    </View>
  );
};

export default DrillSelectionScreen;

const styles = StyleSheet.create({
  md3FontStyles: {
    lineHeight: 32,
  },
  fontStyles: {
    fontWeight: '800',
    fontSize: 24,
  },
  patternButton: {
    width: WIDTH * 0.3,
    height: WIDTH * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
});
